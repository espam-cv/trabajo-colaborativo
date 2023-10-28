import { sum, multiply} from '../src/number-utils';



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
