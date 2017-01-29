import { expect, should } from 'chai';

describe('var, let, const', () => {

  describe('var...', () => {

    function iterator(bool) {
      if (bool) {
        var name = 'Hackages';
      }
      return name;
    }

    it('what do you expect???', () => {
      const actual = iterator(false);

      expect(actual).equal(__);
    });
  });

  describe('let...', () => {

    function iterator(bool) {
      if (bool) {
        let name = 'Hackages';
      }
      return name;
    }

    it('what do you expect???', () => {
      // TODO: uncomment this line below to see what happens when you change var to let
      //console.log(iterator());
    });
  });

  xdescribe('const...', () => {
    function iterator(bool) {
      if (bool) {
        const name = 'we';
      }
      return name;
    }

    it('what do you expect???', () => {
      // TODO: uncomment this line below to see what happens when you change var to const
      //console.log(iterator());
    });
  });
});
