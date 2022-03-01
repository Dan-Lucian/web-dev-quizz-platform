import logger from './logger.js';

const endpointUknown = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' });
};

const handlerError = (err, req, res, next) => {
  logger.error(err.message);
  next(err);
};

export { endpointUknown, handlerError };
