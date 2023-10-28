import { getIndex, reverseArray } from '../src/array-utils';

describe('getIndex', () => {
  it('should return the index of an element in an array', () => {
    expect(getIndex([0,1,2], 2)).toEqual(2);
  });

  it('should return -1 if the element does not exist', () => {
    expect(getIndex([0,1,2], 5)).toEqual(-1);
  });
});

describe('arrayInvetir', () => {
  it('should return the array in reverse order', () => {
    const array1 = ['one', 'two', 'three'];
    const array2 = ['three', 'two', 'one'];
    expect(reverseArray(array1)).toEqual(array2);
  });
});
