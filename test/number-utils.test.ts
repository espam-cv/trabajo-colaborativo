import { sum, isEven, divide } from '../src/number-utils';
import { firstValue } from '../src/array-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(6, 3)).toEqual(2);
  });

  it('should handle division by zero', () => {
    expect(() => divide(5, 0)).toThrow("You can't divide by zero");
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
  
describe('firstValue', () => {
  it('should get the first value of an array', () => {
    const mockArray = ['Roberto', 'Loayza'];
    expect(firstValue(mockArray)).toEqual('Roberto');
  });
});
