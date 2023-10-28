import { sum } from '../src/number-utils';
import { letterLast } from '../src/string-utils';
describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('letterLast', () => {
  it('should palabra hola return a', () => {
    expect(letterLast("hola")).toEqual('a');
  });
});