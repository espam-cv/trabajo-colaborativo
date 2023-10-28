import { sum, multiply, isEven} from '../src/number-utils';



describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('multiply', () => {
  it('should return multiplication of two numbers', () => {
    expect(multiply(1, 1)).toEqual(1);
  });
});

describe('isEven', () => {
  it('should return true if number is par', () => {
    expect(isEven(10)).toEqual(true);
  });
  it('should return false if number is impar', () => {
    expect(isEven(9)).toEqual(false);
  });
});