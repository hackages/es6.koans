import { expect } from 'chai';

/**
 * The goal here is to implement an iterator function.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols
 */

describe('iterator function', () => {

  describe('Iterable Protocol', () => {
    it('Should have @@iterator( Symbol.iterator) property', () => {
      // Implement a iterable below to satisfy all assertions
      let iterable = {
      };

      // We use the reflection API to get all proper keys
      const keys = Reflect.ownKeys(iterable);

      expect(iterable)
        .to.be.an('object')
        .that.has.property(keys[0])
        .to.be.a('function');
    });
  });

  describe('Iterator Protocol ...', () => {
    it('Should return an object that provides a next method/function', () => {
      // Implement a iterator below to satisfy all assertions
      let iterator;

      expect(iterator([]))
        .to.be.an('object')
        .that.has.property('next')
        .to.be.a('function');

      describe('next function', () => {
        it('Should return an object with two properties: done of type boolean and value', () => {
          let returnObject = iterator([]).next();
          expect(returnObject).to.have.a.property('value').to.equal(undefined);
          expect(returnObject).to.have.a.property('done').to.be.a('boolean').to.equal(true);
        });

        it('Should return the next item in the collection', () => {
          let items = iterator(['Maartens', 'Johan', 'Eric', 'Tom']);

          expect(items.next()).to.deep.equal({ value: 'Maartens', done: false });
          expect(items.next()).to.deep.equal({ value: 'Johan', done: false });
          expect(items.next()).to.deep.equal({ value: 'Eric', done: false });
          expect(items.next()).to.deep.equal({ value: 'Tom', done: false });
          expect(items.next()).to.deep.equal({ value: undefined, done: true });
          expect(items.next()).to.deep.equal({ value: undefined, done: true });
        });
      });
    });
  });
  
  describe('In action ', () => {
    class Company {
      constructor(customers) {
        this.customers = customers;
      }
      // Create a function below to make this.customers iterable
    }

    it('Company should be iterable by customers', () => {
      let company = new Company(['Davy', 'Thomas', 'Lars']);

      // TODO Fix the Company class above.

      let actual = (() => {
        const result = [];

        for (let customer of company) {
          result.push(customer);
        }
        return result;
      })();

      expect(actual).to.deep.equal(['Davy', 'Thomas', 'Lars']);

      actual = [...company];

      expect(actual).to.deep.equal(['Davy', 'Thomas', 'Lars']);
    });

  });

});
