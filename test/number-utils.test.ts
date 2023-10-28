import { sum, divide } from '../src/number-utils';

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
