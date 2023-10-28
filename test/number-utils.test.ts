import { sum, isOdd } from '../src/number-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('isOdd', () => {
  it('should return true if number is odd', () => {
    expect(isOdd(5)).toEqual(true);
  });

  it('should return false if number is even', () => {
    expect(isOdd(6)).toEqual(false);
  });
});
