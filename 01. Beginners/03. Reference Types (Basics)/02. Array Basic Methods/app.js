// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements
// join() joins all elements of an array into a string

// concat()
const arr1 = ["Cecile", "Adele", "Taylor Swift"];
const arr2 = ["Ed Sheeran", "Justin Bieber", "Bruno Mars"];

const singers = arr1.concat(arr2);
console.log(singers); // ["Cecile", "Adele", "Taylor Swift", "Ed Sheeran", "Justin Bieber", "Bruno Mars"]

// includes()
let text = "Hello World, Welcome to the universe.";
let result = text.includes("Welcome");
console.log(result); // true

// push()
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// unshift()
const numbers = [1, 2, 3];
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3]

// pop()
const colors = ["Red", "Green", "Blue"];
const lastColor = colors.pop();
console.log(lastColor); // Blue

// shift()
const animals = ["Dog", "Cat", "Elephant"];
const firstAnimal = animals.shift();
console.log(firstAnimal); // Dog

// sort()
const names = ["John", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "John"]

// slice()
const numbers2 = [1, 2, 3, 4, 5];
const slicedNumbers = numbers2.slice(1, 4); // [2, 3, 4]
console.log(slicedNumbers); // [2, 3, 4]

// splice()
const numbers3 = [1, 2, 3, 4, 5];
const removedNumbers = numbers3.splice(1, 2); // [2, 3]
console.log(removedNumbers); // [2, 3]

// join()
const elements = ["Fire", "Air", "Water"];
const joinedElements = elements.join(", ");
console.log(joinedElements); // "Fire, Air, Water"
// -----------------------------------
