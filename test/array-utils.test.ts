import { arrayInvetir } from '../src/array-utils';

describe('arrayInvetir', () => {
    const array1 = ['one', 'two', 'three'];
  it('works', () => {
    expect(arrayInvetir(array1)).toEqual(array1.reverse());
  });
});