const ERROR_STATUS_CODES = {
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
};

const DEFAULT_ERROR_MESSAGES = {
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  NOT_FOUND: 'Not Found',
  BAD_REQUEST: 'Bad Request',
};

class ServerError extends Error {
  constructor(message) {
    super(message || DEFAULT_ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    this.statusCode = ERROR_STATUS_CODES.INTERNAL_SERVER_ERROR;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message || DEFAULT_ERROR_MESSAGES.NOT_FOUND);
    this.statusCode = ERROR_STATUS_CODES.NOT_FOUND;
  }
}

class LogicError extends Error {
  constructor(message) {
    super(message || DEFAULT_ERROR_MESSAGES.BAD_REQUEST);
    this.statusCode = ERROR_STATUS_CODES.BAD_REQUEST;
  }
}

function formatError(error) {
  const {
    message = null,
    extensions: { exception = {} },
  } = error;
  const { statusCode = null } = exception;

  if (!statusCode || Object.values(ERROR_STATUS_CODES).indexOf(statusCode) < 0) {
    return {
      message: message || DEFAULT_ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
      statusCode: ERROR_STATUS_CODES.INTERNAL_SERVER_ERROR,
    };
  }

  return {
    message,
    statusCode,
  };
}

module.exports = {
  ServerError,
  NotFoundError,
  LogicError,
  formatError,
};
