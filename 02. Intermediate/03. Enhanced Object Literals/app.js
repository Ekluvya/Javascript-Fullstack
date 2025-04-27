// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining object
//  in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

function user(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro: function () {
      console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
    },
  };
}

const huxn = user("HuXn", 17, "Programmer");
huxn.intro();

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code

const a = 1;
const b = 2;
const c = 3;
const obj = {
  a,
  b,
  c,
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};
// obj.a = 1, obj.b = 2, obj.c = 3
// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };
