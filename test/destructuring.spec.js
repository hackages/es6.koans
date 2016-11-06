import { expect } from 'chai';

describe('Destructuring', () => {

  describe('Array...', () => {
    let fruits = ['brussels sprout', 'apple', 'beetroot', 'broccoli', 'carrot', 'cherry'];

    it('With ES5', () => {
      const first = fruits[0];
      expect(first).to.equal('brussels sprout');
      const last = fruits[fruits.length - 1];
      expect(last).to.equal('cherry');
    });

    it('With ES6', () => {
      // TODO: Get the first fruit
      let actual;
      expect(actual).to.equal('brussels sprout');
      // TODO: Get the last fruit
      expect(actual).to.equal('cherry');
      // TODO: Get the queue fruit;
      expect(actual).deep.equal(['apple', 'beetroot', 'broccoli', 'carrot', 'cherry']);
    });

    it('With ES6 & default value', () => {
      let dog = 'Larry';
      let cat;

      [dog = 'Hector', cat = 'Katy'] = [cat, dog];

      const actual = [dog, cat];
      const result = ['Hector', 'Katy'];
      expect(actual).deep.equal(result);
    });

    it('With ES6 & For iterations', () => {

      const people = [
        {
          name: "Mike",
          age: 35
        },
        {
          name: "Tom",
          age: 25
        }
      ];

      let actual = [];
      
      // TODO: Write the destructuring and the push statement to satisfy all assertions
      for (let { } of people) {
        actual.push();
      }

      expect(actual).deep.equal(['Mike 25', 'Tom 25']);
    });
  });

  describe('Object...', () => {
    describe('Getting User Info', () => {

      function getUserInfo() {
        return {
          id: 8798,
          name: 'Davy Engone',
          company: 'Hackages',
          country: 'Everywhere',
          handles: {
            twitter: 'davyengone',
            skype: 'davy_engone'
          }
        };
      }

      // TODO: Retrieve the user's id, name as fullName and twitter handle from getUserInfo
      it('With ES5', () => {
        let userInfo = getUserInfo();
        let id = userInfo.id;
        let fullName = userInfo.name;
        let twitter = userInfo.handles.twitter;

        expect(id).to.be.defined;
        expect(fullName).to.equal('Davy Engone');
        expect(twitter).to.equal('davyengone');
      });

      it('With ES6 object Destructuring to do the same operation', () => {
        // TODO Extract the required information using the spread operator.
        expect(id).to.be.defined;
        expect(fullName).to.equal('Davy Engone');
        expect(twitter).to.equal('davyengone');
      });
    });

    describe('Drawing Chart', () => {
      it("With ES5 & a function parameter's default value", () => {

        function drawES5Chart(options) {
          options = options === undefined ? {} : options;
          const size = options.size === undefined ? 'big' : options.size;
          const cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
          const radius = options.radius === undefined ? 25 : options.radius;
          return [size, cords, radius];
        }
        const actual = drawES5Chart({
          cords: { x: 18, y: 30 },
          radius: 30
        });

        expect(actual).deep.equal(['big', { x: 18, y: 30 }, 30]);

      });
      it("With ES6 & a function parameter's default value", () => {

        function drawES6Chart(/* // TODO: Provide the parameter desctructuring to satisfy all assertions below  */) {
          return [size, cords, radius];
        }
        let actual = drawES6Chart();
        expect(actual).deep.equal(['big', { x: 0, y: 0 }, 25]);

        actual = drawES6Chart({
          cords: { x: 18, y: 30 },
          radius: 30
        });
        expect(actual).deep.equal(['big', { x: 18, y: 30 }, 30]);

      });
    });
  });
});