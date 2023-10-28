import { sum } from '../src/number-utils';
import { primerValor } from '../src/array-utils';

const mockArray = ['Roberto', 'Loayza'];
describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('shpuld get the first value of an array', () => {
    expect(primerValor(mockArray)).toEqual('Roberto');
  });
});
