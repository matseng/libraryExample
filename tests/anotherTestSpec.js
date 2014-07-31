define(['myLibrary/myLibrary'], function(myLibrary) {

  describe('myLibrary modules again', function() {
    it('should be able to add, subtract, multiply and divide', function() {
      expect(myLibrary.multiply(2, 3)).toBe(6);
    });
  });
});
