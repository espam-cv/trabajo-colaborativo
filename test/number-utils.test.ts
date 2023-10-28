import { sum } from '../src/number-utils';
import { primerValor } from '../src/array-utils';

describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});

describe('primerValor', () => {
  const mockArray = ['Roberto', 'Loayza'];
  it('should get the first value of an array', () => {
    expect(primerValor(mockArray)).toEqual('Roberto');
  });
});
