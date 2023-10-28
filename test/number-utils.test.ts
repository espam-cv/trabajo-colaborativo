import { sum } from '../src/number-utils';
import { ultimaLetra } from '../src/string-utils';
describe('blah', () => {
  it('works', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});


describe('ultimaLetra', () => {
  it('should palabra hola return a', () => {
    expect(ultimaLetra("hola")).toEqual('a');
  });
});