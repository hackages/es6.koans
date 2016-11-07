import chai from 'chai';
const expect = chai.expect;
chai.should();

// You can implement your solution in another file or inline here

describe('Class in ES6', () => {
  describe('Like a function ...', () => {
    // Declare the Human class below that will satisfy all assertions
    let Human;
    it('should be a function', () => {

      expect(Human).to.be.a('function');
    });
    it('should not be hoisted like function', () => {
      let polyFunc;

      (() => {
        polyFunc = new PolygoneFunc(3, 5);
      }).should.not.throw(Error);

      function PolygoneFunc(height, width) {
        this.height = height;
        this.width = width;

        this.log = function () {
          return `H:${this.height} & W:${this.width}`;
        };
      }

      expect(polyFunc.log()).equal('H:3 & W:5');

      let polyClass;
      
      // Hint: the declaration position of PolygoneClass is not correct
      (() => {
        polyClass = new PolygoneClass(3, 5);
      }).should.not.throw(Error);

      class PolygoneClass {
        constructor(height, width) {
          this.height = height;
          this.width = width;
        }
        log() {
          return `H:${this.height} & W:${this.width}`;
        }
      }

      expect(polyClass.log()).equal('H:3 & W:5');

    });
  });
  describe('Property ...', () => {

    it('should have a name property called Human', () => {
      expect(Human).has.property('name').equal('Human');
    });

    it('Should have a property prototype of type object', () => {
      expect(Human).has.property('prototype').is.a('object');
      expect(typeof Human.prototype).equal('object');

      describe('Human.prototype', () => {
        it('Should contain a property Walk of type function', () => {
          expect(Human.prototype).has.property('Walk').is.a('function');
        });
      });
    });

    it('Should contain a static property called inject of type array', () => {
      expect(Human).has.property('inject').is.an('array');
    });

    it('Should throw an error if no fullName is passed at the instantiation', () => {
      (() => {
        new Human();
      }).should.throw(Error);
    });

    // Getter and setter in ES6 class
    it('Should have an instance property fullName', () => {
      let obj = new Human({
        fullName: 'Tom Thomas'
      });
      expect(obj.fullName).to.be.defined;
      expect(obj.fullName).to.equal('Tom Thomas');
    });

    it('It should throw an error if fullName is set to anything else but a string', () => {
      (() => {
        new Human({
          fullName: 12987
        });
      }).should.throw(Error);
    });
  });
});

