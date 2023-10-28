import { sum } from '../src/number-utils';
import { firstValue } from '../src/array-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('firstValue', () => {
  it('should get the first value of an array', () => {
    const mockArray = ['Roberto', 'Loayza'];
    expect(firstValue(mockArray)).toEqual('Roberto');
  });
});
