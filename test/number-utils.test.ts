import { sum, multiply, par} from '../src/number-utils';



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

describe('par', () => {
  it('should return true if number is par', () => {
    expect(par(10)).toEqual(true);
  });
  it('should return false if number is impar', () => {
    expect(par(9)).toEqual(false);
  });
});