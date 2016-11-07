import { expect, should } from 'chai';

describe('Sub classing ', () => {
  it(' Should extends a class declaration/expression', () => {
    class Animal {
      constructor(name) {
        this.name = name;
      }
      eat() {
        return 'Eating ...';
      }
      speak() {
        return this.name + ' makes a noise.';
      }
    }
    // When uncommenting the animal lass below, you have to comment the animal class above
    // const Animal = class {
    //   constructor(name) {
    //     this.name = name;
    //   }
    //   eat() {
    //     return 'Eating ...';
    //   }
    //   speak() {
    //     return this.name + ' makes a noise.';
    //   }
    // };
    class Dog extends Animal {
      speak() {
        return this.name + ' barks.';
      }
    }

    const d = new Dog('Mu');
    let actual = d.eat();

    expect(actual).equal(__);

    actual = d.speak();

    expect(actual).equal(__);
  });

  it('Should extends traditional function-based "classes" ', () => {
    function Animal(name) {
      this.name = name;
    }
    Animal.prototype.eat = function () {
      return 'Eating ...';
    }
    Animal.prototype.speak = function () {
      return this.name + ' makes a noise.';
    }

    class Dog extends Animal {
      speak() {
        return this.name + ' barks.';
      }
    }

    const d = new Dog('Mu');
    let actual = d.eat();

    expect(actual).equal(__);

    actual = d.speak();

    expect(actual).equal(__);
  });
});