// external libraries
const Minio = require('minio')

// internal modules
const config = require('./config')()
const responses = require('./responses')
const errors = require('./errors')

let MinioClient

exports.handler = async ({ body }, { awsRequestId }) => {
  try {
    const dataToSave = validateAndFormatEventBody(body)
    console.log(config.minioConnectionConfig)
    // check if Minio client exists and using it, else initialize MinioClient
    if (!MinioClient || process.env.NODE_ENV !== 'test') {
      try {
        MinioClient = new Minio.Client(config.minioConnectionConfig)
      } catch (error) {
        throw errors.MINIO_CONNECTION_ERROR
      }
    }

    // check bucket existence, and creating one if not exists
    try {
      const isBucketExists = await MinioClient.bucketExists(config.bucketName)
      if (!isBucketExists) {
        await MinioClient.makeBucket(config.bucketName)
      }
    } catch(error) {
      console.log(error)
      throw errors.MINIO_BUCKET_ERROR
    }
    // using request id to not waste time for generating it by itself
    const filename = `${awsRequestId}.txt`

    // waiting while data will be saved successful or it throw error
    await saveToFile(dataToSave, filename)

    const response = { ... responses.OK }
    response.body += filename
    return response

  } catch (error) {
    console.log(error)
    const response = { ... responses.INTERNAL_SERVER_ERROR }
    response.body += error.producedBy ? error.producedBy : 'Unknown reason.'
    return response
  }

}

const saveToFile = async (data, filename) => {
  try{
    await MinioClient.putObject(config.bucketName, filename, data)
  } catch (error) {
    console.log(error)
    throw errors.SAVING_TO_FILE_ERROR
  }
}

const validateAndFormatEventBody = ( body ) => {
  try {
    let result = body
    switch(typeof body) {
      case 'number':
      case 'boolean':
      case 'bigint':
        result = body.toString()
        break
      case 'null':
      case 'undefined':
        result = ''
        break
      case 'object':
        result = JSON.stringify(body)
        break
    }
    return result
  } catch (error) {
    console.log(error)
    const err = { ...errors.VALIDATION_ERROR }
    err.producedBy += error.message
    throw err
  }
}

