import { esImpar, sum } from './../src/number-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('esImpar', () => {
  it('should return True if number is impar', () => {
    expect(esImpar(5)).toEqual(true);
  });

  it('should return False if number is par', () => {
    expect(esImpar(6)).toEqual(false);
  });
});
