module.exports = {
  OK: {
    statusCode: 200,
    body:  'Action finished successful. File saved with name: '
  },
  BAD_REQUEST: {
    statusCode: 400,
    body:'Validation error: '
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    body: 'Error produced by: '
  }
}
