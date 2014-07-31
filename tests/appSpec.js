define(['myLibrary/myLibrary'], function(myLibrary) {

  describe('myLibrary modules', function() {
    it('should be able to add, subtract, multiply and divide', function() {
      expect(myLibrary.add(1, 2)).toBe(3);
    });
  });
});
