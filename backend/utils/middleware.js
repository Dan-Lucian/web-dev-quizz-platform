import logger from './logger.js';

const endpointUknown = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

const handlerError = (error, req, res, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

export { endpointUknown, handlerError };
