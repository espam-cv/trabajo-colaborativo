<<<<<<< HEAD
import { sum, isEven } from '../src/number-utils';
=======
import { sum } from '../src/number-utils';
import { firstValue } from '../src/array-utils';
>>>>>>> origin/main

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

<<<<<<< HEAD

describe('isEven', () => {
  it('Should return True if the number is even', () => {
    expect(isEven(4)).toEqual(true);
  });
  it('Should return False if the number is odd', () => {
    expect(isEven(3)).toEqual(false);
  });
});
=======
describe('firstValue', () => {
  it('should get the first value of an array', () => {
    const mockArray = ['Roberto', 'Loayza'];
    expect(firstValue(mockArray)).toEqual('Roberto');
  });
});
>>>>>>> origin/main
