describe('var, let, const', () => {

  describe('var...', () => {

    function iterator(bool) {
      if (bool) {
        var name = 'Hackages';
      }
      return name;
    }

    it('what do you expect???', () => {
      //console.log(iterator(false)); // =>
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
      //console.log(iterator());
    });
  });
});
