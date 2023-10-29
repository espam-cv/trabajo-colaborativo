
import { letterLast, convertStringToUpperCase, convertStringToLowerCase } from '../src/string-utils';

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

describe('convertStringToLowerCase', () => {
  it('should word HOLA return hola', () => {
    expect(convertStringToLowerCase("HOLA")).toEqual('hola');
  });
});