// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// Basic variable assignment
const foo = ["one", "two", "three"];
const [a, b, c] = foo;

console.log(a);
console.log(b);
console.log(c);
// --------------------------------

// --------------------------------
const foo2 = ["one", "two"];

const [red, yellow, green, blue] = foo2;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined
// --------------------------------
