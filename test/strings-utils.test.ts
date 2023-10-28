
import { letterLast } from '../src/string-utils';

describe('letterLast', () => {
    it('should palabra hola return a', () => {
      expect(letterLast("hola")).toEqual('a');
    });
  });