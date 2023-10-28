
import { letterLast, convertStringToUpperCase } from '../src/string-utils';

describe('letterLast', () => {
    it('should palabra hola return a', () => {
      expect(letterLast("hola")).toEqual('a');
    });
  });

describe('convertStringToUpperCase', () => {
  it('should word hola return HOLA', () => {
    expect(convertStringToUpperCase("hola")).toEqual('HOLA');
  });
});