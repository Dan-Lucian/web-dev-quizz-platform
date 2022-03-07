const {
  getPositiveUniqueRandomInts,
} = require('../utils/getPositiveUniqueRandomInts');

describe('Getting array of random numbers', () => {
  test('returns type array', () => {
    const arrayInts = getPositiveUniqueRandomInts(3, 1, 6);

    expect(Array.isArray(arrayInts)).toBe(true);
  });

  test('returns correct number of elements', () => {
    const arrayInts = getPositiveUniqueRandomInts(3, 1, 6);

    expect(arrayInts).toHaveLength(3);
  });

  test('numbers are inside [min-max] (1000 checks)', () => {
    for (let i = 0; i < 1000; i += 1) {
      const arrayInts = getPositiveUniqueRandomInts(8, 1, 10);

      const min = Math.min(...arrayInts);
      const max = Math.max(...arrayInts);

      expect(max).toBeLessThanOrEqual(10);
      expect(min).toBeGreaterThanOrEqual(1);
    }
  });

  test('all values are of type number', () => {
    const arrayInts = getPositiveUniqueRandomInts(3, 1, 6);

    arrayInts.forEach((value) => {
      expect(typeof value).toBe('number');
    });
  });

  test('all values are integers', () => {
    const arrayInts = getPositiveUniqueRandomInts(3, 1, 6);

    arrayInts.forEach((value) => {
      expect(Number.isInteger(value)).toBe(true);
    });
  });

  test.only('returns null if arguments are invalid', () => {
    expect(getPositiveUniqueRandomInts(5, 1, 3)).toBeNull();
    expect(getPositiveUniqueRandomInts(3, 5, 1)).toBeNull();
    expect(getPositiveUniqueRandomInts(3, 1, 1)).toBeNull();
    expect(getPositiveUniqueRandomInts(3)).toBeNull();
    expect(getPositiveUniqueRandomInts()).toBeNull();
    expect(getPositiveUniqueRandomInts(-1, 1, 3)).toBeNull();
    expect(getPositiveUniqueRandomInts(1, -1, 3)).toBeNull();
    expect(getPositiveUniqueRandomInts(1, 1, -3)).toBeNull();
    expect(getPositiveUniqueRandomInts(1, -1, -3)).toBeNull();
    expect(getPositiveUniqueRandomInts(-1, -1, -3)).toBeNull();
    expect(getPositiveUniqueRandomInts('22', 1, 3)).toBeNull();
    expect(getPositiveUniqueRandomInts(1, true, 3)).toBeNull();
    expect(getPositiveUniqueRandomInts(-1, 1, '3')).toBeNull();
  });

  test('there are no repeating values (1000 checks)', () => {
    // creating a set from an array, it will remove all duplicates.
    // if the length of set and array are equal it means nothing was removed
    // which proves there were no duplicate in the initial array
    for (let i = 0; i < 1000; i += 1) {
      const arrayInts = getPositiveUniqueRandomInts(8, 1, 10);
      expect(new Set(arrayInts).size).toBe(arrayInts.length);
    }
  });
});
