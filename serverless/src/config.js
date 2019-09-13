module.exports = () => ({
  minioConnectionConfig: {
    endPoint: process.env.MINIO_ENDPOINT || 'http://127.0.0.1',
    port: 9000,
    useSSL: false,
    accessKey: process.env.MINIO_ACCESS_KEY,
    secretKey: process.env.MINIO_SECRET_KEY,
  },
  bucketName: process.env.BUCKET_NAME
})
