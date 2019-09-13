//possible errors for better understanding what is gone wrong
module.exports = {
  MINIO_CONNECTION_ERROR: {
    producedBy: 'Minio client module error.'
  },
  VALIDATION_ERROR: {
    producedBy: 'Invalid request: '
  },
  SAVING_TO_FILE_ERROR: {
    producedBy: 'Minio saving to file error.'
  },
  MINIO_BUCKET_ERROR: {
    producedBy: 'Minio bucket error. Can`t manipulate bucket (create or check existence)'
  }
}
