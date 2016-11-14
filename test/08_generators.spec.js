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
      let foo;

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

  describe('Recursion via yield* for output', () => {
    function* child() {
      yield 'a';
      yield 'b';
    }

    it('Should do nothing', () => {
      function* parent() {
        yield 'x';
        child();
        yield 'y';
      }

      const actual = getGeneratorResultInArray(parent);
      expect(actual).deep.equal(['x', 'y']);
    });

    it('Should call correctly the child generator', () => {
      function* parent() {
        yield 'x';
        yield 'y';
        // Call correctly child

      }

      const actual = getGeneratorResultInArray(parent);
      expect(actual).deep.equal(['x', 'y', 'a', 'b']);
    });
  });
  describe('In action ', () => {

    describe('Natural numbers', () => {

      it('Should return natural numbers ', () => {

        function* naturalNumbers() {
          // Implement the generator function that will return the next natural numbers
    
        }
        const iterator = naturalNumbers();

        let actual = iterator.next().value;
        expect(actual).equal(0);

        actual = iterator.next().value;
        expect(actual).equal(1);

        iterator.next();
        iterator.next();
        iterator.next();
        actual = iterator.next().value
        expect(actual).equal(5);
      });
    });

    describe('ObjectEntries', () => {
      it('Should iterate over the properties of an object ', () => {
        function* objectEntries(obj) {
          let propKeys = Reflect.ownKeys(obj);
          // Implement the generator function that will return the key and object value of the key

        }
        let jane = { first: 'Jane', last: 'Doe' };
        const actual = [];
        for (let [key, value] of objectEntries(jane)) {
          actual.push(`${key}: ${value}`);
        }
        expect(actual).deep.equal(['first: Jane', 'last: Doe']);
      });
    });
    describe('Take ', () => {
      it('Should take n first element of the iterable ', () => {
        function* take(n, iterable) {
          // Implement the generator function that will return the n first value
          for (let value of iterable) {

          }
        }
        const actual = [];
        let iterable = [1, 2, 3, 4, 5][Symbol.iterator]();
        for (let value of take(2,iterable)) {
          actual.push(value);
        }

        expect(actual).deep.equal([1, 2]);
      });
    });
  });
});

