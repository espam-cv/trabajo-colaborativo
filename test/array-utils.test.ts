import { reverseArray } from '../src/array-utils';

describe('arrayInvetir', () => {
  it('should return the array in reverse order', () => {
    const array1 = ['one', 'two', 'three'];
    const array2 = ['three', 'two', 'one'];
    expect(reverseArray(array1)).toEqual(array2);
  });
});