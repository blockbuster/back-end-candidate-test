const uuidv4 = require('uuid/v4');
const Minio = require('minio');

const statusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
};
const BUCKET_NAME = 'objects';
const MINIO_ENDPOINT = process.env.NODE_ENV === 'development' ? 'host.docker.internal' : '127.0.0.1';

const minioClient = new Minio.Client({
  endPoint: MINIO_ENDPOINT,
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY,
  secretKey: process.env.MINIO_SECRET_KEY,
});

function prepareResponse({ message, statusCode }) {
  return {
    statusCode,
    body: JSON.stringify({ message }),
  };
}

function prepareDataToSave({ body }) {
  if (!body) {
    throw new Error('Empty body provided.');
  }

  let data = null;

  try {
    const payload = JSON.parse(body);

    if (!payload.data) {
      throw new Error('Invalid data to save provided.');
    }

    data = payload.data;
  } catch (error) {
    throw new Error(`Unable to parse body. Details: ${error.message}`);
  }

  switch (typeof data) {
    case 'number':
    case 'boolean':
      return data.toString();
    case 'undefined':
      return '';
    case 'object':
      return JSON.stringify(data);
    default:
      return data;
  }
}

async function createBucketIfNotExists({ name }) {
  const isBucketExists = await minioClient.bucketExists(name);

  if (!isBucketExists) {
    return minioClient.makeBucket(name);
  }

  return null;
}

async function saveObjectToFile({ bucketName, fileName, data }) {
  return minioClient.putObject(bucketName, fileName, data);
}

exports.handler = async event => {
  const { body } = event;
  let data = null;

  try {
    data = prepareDataToSave({ body });
  } catch (error) {
    return prepareResponse({ statusCode: statusCodes.BAD_REQUEST, message: error.message });
  }

  try {
    await createBucketIfNotExists({ name: BUCKET_NAME });
  } catch (error) {
    return prepareResponse({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: `Unable to create bucket "${BUCKET_NAME}". Details: ${error.message}`,
    });
  }

  const fileName = `${uuidv4()}.txt`;

  try {
    await saveObjectToFile({ bucketName: BUCKET_NAME, fileName, data });
    return prepareResponse({
      statusCode: statusCodes.OK,
      message: `File "${fileName}" successfully saved to bucket "${BUCKET_NAME}"`,
    });
  } catch (error) {
    return prepareResponse({
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      message: `Unable to save file "${fileName}" to bucket "${BUCKET_NAME}". Details: ${error.message}`,
    });
  }
};
