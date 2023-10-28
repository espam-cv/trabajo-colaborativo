import { sum, EsPar } from '../src/number-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('EsPar', () => {
  it('Should return True if the number is even', () => {
    expect(EsPar(4)).toEqual(true);
  });
  it('Should return False if the number is odd', () => {
    expect(EsPar(3)).toEqual(false);
  });
});