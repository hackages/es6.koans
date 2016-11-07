import 'babel-polyfill';
import { expect } from 'chai';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// http://koajs.com/
// http://www.2ality.com/2015/03/es6-generators.html

describe('Generators', () => {
  function getGeneratorResultInArray(func) {
    const res = [];
    for (let val of func()) {
      res.push(val);
    }
    return res;
  }

  describe('Syntax', () => {

    it('Via function declaration', () => {
      // Declare and Implement the generator function foo that will satisfy all assertions

      const actual = getGeneratorResultInArray(foo);
      expect(actual).deep.equal(['a', 1, 'c']);

    });

    it('Via function expression', () => {
      // Declare and Implement the generator function foo that will satisfy all assertions
      const foo;

      const actual = getGeneratorResultInArray(foo);
      expect(actual).deep.equal(['d', 1, 'lol']);
    });

    it('Via a method definition in an object literal', () => {
      let obj = {
        // Declare and Implement the generator function foo that will satisfy all assertions
      };

      const actual = getGeneratorResultInArray(obj.foo);
      expect(actual).deep.equal(['daddy', 1000, -100]);
    });

    it('Via a method definition in a class definition', () => {
      class Bar {
        // Declare and Implement the generator function foo that will satisfy all assertions
      }

      const actual = getGeneratorResultInArray(new Bar().foo);
      expect(actual).deep.equal(['Mu', 1000, { name: 'Hackages' }]);
    });
  });

});

