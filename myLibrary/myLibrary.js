define([], function() {
  "use strict";
  var Arithmetic = {
    add: function (firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    },

    subtract: function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    },

    multiply: function (firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    },

    divide: function (firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }
  };

  Arithmetic.log = function() {
    console.log("hello world");
  };

  return Arithmetic;
});

// (function (global) {
//     "use strict";
//     global.Arithmetic = {
//         add: function (firstNumber, secondNumber) {
//             return firstNumber + secondNumber;
//         },

//         subtract: function (firstNumber, secondNumber) {
//             return firstNumber - secondNumber;
//         },

//         multiply: function (firstNumber, secondNumber) {
//             return firstNumber * secondNumber;
//         },

//         divide: function (firstNumber, secondNumber) {
//             return firstNumber / secondNumber;
//         }
//     };

//   global.Arithmetic.log = function() {
//     console.log("hello world");
//   };


// })(this);
