import { sum, isEven } from '../src/number-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('isEven', () => {
  it('Should return True if the number is even', () => {
    expect(isEven(4)).toEqual(true);
  });
  it('Should return False if the number is odd', () => {
    expect(isEven(3)).toEqual(false);
  });
});