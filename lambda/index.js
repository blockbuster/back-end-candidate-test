const uuidv4 = require('uuid/v4');
const Minio = require('minio');

const BUCKET = 'files';

const minioClient = new Minio.Client({
    endPoint: 'host.docker.internal',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY
  });

exports.handler = async(event) => {

  const fileName = `${uuidv4()}.txt`;
  let bucket = await minioClient.bucketExists(BUCKET);
  if(!bucket) {
    try {
      await minioClient.makeBucket(BUCKET)
    } catch( error) {
      console.log(error)
      return error;
    }
  }

  try {
    return minioClient.putObject(BUCKET, fileName, event.data);
  } catch(error) {
    console.log(error)
    return error;
  }
};


