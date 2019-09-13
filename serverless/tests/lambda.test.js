require('chai').should()

process.env = {
  ... process.env,
  MINIO_ENDPOINT: '127.0.0.1',
  MINIO_ACCESS_KEY: 'minio',
  MINIO_SECRET_KEY: 'minio-storage',
  BUCKET_NAME: 'lambda'
}

let lambda = require('../src/lambda')
const config = require('../src/config')()

const Minio = require('minio')
const MinioClient = new Minio.Client(config.minioConnectionConfig)





describe('Lambda', () => {

  describe('correct response', ()=> {
    it('should respond with 200 ok status. Body -- string', (done) => {
      lambda
        .handler({ body: 'something'}, { awsRequestId: 'test1'})
        .then(result => {
          result.should.be.a('object')
          result.statusCode.should.be.a('number')
          result.statusCode.should.be.equal(200)
          return MinioClient.getObject(config.bucketName, 'test1.txt')
        })
        .then(() => {
          MinioClient.removeObject(config.bucketName, 'test1.txt')
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('should respond with 200 ok status. Body -- object', (done) => {
      lambda
        .handler({ body: { "test": "something"}}, { awsRequestId: 'test2'})
        .then(result => {
          result.should.be.a('object')
          result.statusCode.should.be.a('number')
          result.statusCode.should.be.equal(200)
          return MinioClient.getObject(config.bucketName, 'test2.txt')
        })
        .then(() => {
          MinioClient.removeObject(config.bucketName, 'test2.txt')
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('should respond with 200 ok status. Body -- number', (done) => {
      lambda
        .handler({ body: 100}, { awsRequestId: 'test3'})
        .then(result => {
          result.should.be.a('object')
          result.statusCode.should.be.a('number')
          result.statusCode.should.be.equal(200)
          return MinioClient.getObject(config.bucketName, 'test3.txt')
        })
        .then(() => {
          MinioClient.removeObject(config.bucketName, 'test3.txt')
          done()
        })
        .catch(err => {
          done(err)
        })
    })

    it('should respond with 200 ok status. Body -- array', (done) => {
      lambda
        .handler({ body: [1,2,3]}, { awsRequestId: 'test4'})
        .then(result => {
          result.should.be.a('object')
          result.statusCode.should.be.a('number')
          result.statusCode.should.be.equal(200)
          return MinioClient.removeObject(config.bucketName, 'test4.txt')
        })
        .then(() => {
          MinioClient.removeObject(config.bucketName, 'test4.txt')
          done()
        })
        .catch(err => {
          done(err)
        })
    })
  })



})
