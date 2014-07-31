require(['myLibrary/myLibrary'], function(myLibrary) {
  var added = myLibrary.add(1,2);
  console.log(added);
  myLibrary.log();
});


// (function() {
//   var added = Arithmetic.add(1,2);
//   console.log(added);
//   Arithmetic.log();
// })()
