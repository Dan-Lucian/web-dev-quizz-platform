import { getRandomInt } from './getRandomInt.js';
import logger from './logger.js';

const getUniqueRandomInts = (amount, min, max) => {
  if (!amount) {
    logger.error('No amount provided');
    return null;
  }

  if (!min) {
    logger.error('No min provided');
    return null;
  }

  if (!max) {
    logger.error('No max provided');
    return null;
  }

  if (min >= max) {
    logger.error('min should be smaller than max');
    return null;
  }

  if (amount > max + 1 - min) {
    logger.error('amount bigger than max-min dif');
    return null;
  }

  const randomNumbers = [];

  do {
    const randomNumber = getRandomInt(min, max);
    if (!randomNumbers.includes(randomNumber)) randomNumbers.push(randomNumber);
  } while (randomNumbers.length < amount);

  return randomNumbers;
};

export { getUniqueRandomInts };
