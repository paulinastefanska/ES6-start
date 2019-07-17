"use strict";

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

// 1 exercise

var a = "Hello";
var b = "World";
console.log(a + " " + b);

// 2 exercise

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(2));

// 3 exercise

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (total, arg) {
    return total + arg;
  }) / args.length;
};
console.log("Average is " + average(1, 2, 3, 4, 5, 6));

// 4 exercise

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log("Average is " + average.apply(undefined, grades));

// 5 exercise 

var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];

console.log(firstName + " " + lastName);
