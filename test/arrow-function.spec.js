import { expect, should } from 'chai';
should();

// You can implement your solution in another file or inline here

// You can find more information about arrow-function mdn by following the link below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

describe('Arrow function', () => {
<<<<<<< 63b2647caad90797ba41f8efae3713ac77a8bd66
  describe('Invoked through call or apply', () => {
    it('Should not bind this through call', () => {
      const person = {
        age: 1,

        add: function (age) {
          const f = v => v + this.age;
          return f(age);
        },

        addThruCall: function (age) {
          let f = v => {
            return v + this.age;
          };

          const hidden = {
            age: 2
          };

          return f.call(hidden, age);
        },
        addThruApply: function (age) {
          let f = v => {
            return v + this.age;
          };

          const hidden = {
            age: 2
          };

          return f.apply(hidden, [age]);
        }
      };

      let actual = person.add(1);

      expect(actual).equal(__);

      actual = person.addThruCall(1);

      expect(actual).equal(__);

      actual = person.addThruApply(1);

      expect(actual).equal(__);
    });
  });
  describe('Used as methods', () => {
    it('Should return undefined', () => {
      const person = {
        age: 10,
        getAge: function () {
          return this.age;
        },
        getAgeByArrow: () => {
          return this ? this.age : undefined;
        }
      };

      Object.defineProperty(person, "getAgeProperty", {
        get: () => {
          return this ? this.age : undefined;
        }
      });

      let actual = person.getAge();

      expect(actual).equal(__);

      actual = person.getAgeByArrow();

      expect(actual).equal(__);

      actual = person.getAgeProperty;
    });
  });
=======
>>>>>>>  Add actual statement  and correct TODO sentence

  describe('No binding of this & arguments ', () => {
    it("without its own 'this' context", () => {

      // TODO Modify the growUp function below to satisfy all the assertions below. Using '.bind' is forbidden
      function Person() {
        this.age = 10;

        setTimeout(function growUp() {
          this.age++;
        }, 1000);
      }

      const person = new Person();
      const actual = person.age;

      expect(actual).equal(11);
    });
    it("without its own 'argument' object ", () => {

      const arguments = 42;
      const arr = () => arguments;

      let actual = arr();

      expect(actual).equal(__);

      function foo() {
        const f = function (i) { arguments[0] + i };
        return f(2);
      }

      actual = foo(1);

      expect(actual).equal(__);

      function bar() {
        var f = (i) => arguments[0] + i;
        return f(2);
      }

      actual = foo(1);

      expect(actual).equal(__);
    });
  });

  describe('Add or Sum function...', () => {
    // TODO:
    it('Should return 5 when passing 2 and 3', () => {
      add(2, 3).should.equal(5);
    });

    it('Should throw an error if only one argument is passed', () => {
      (() => {
        add(2);
      }).should.throw();
    });

    it('Should accept more than 2 arguments', () => {
      add(1, 2, 3, 4).should.equal(10);
    });

    it('Should throw an error if any of the arguments is not a number', () => {
      (() => {
        add(2, undefined, '2', 10);
      }).should.throw();
    });
  });

  describe('Lexical this', () => {
    it('Should return the list of fruits', () => {
      var cart = {
        owner: 'Davy',
        fruits: ['apple', 'brussels sprout', 'banana', 'mango'],
        printFruits: function () {
          this.fruits.forEach(function (f) {
            console.log(this.owner + " bought " + f);
          });
        }
      };
    });
  });
});
