// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

let favSingers = ["Adele", "Taylor Swift", "Ed Sheeran"];
console.log(favSingers[0]); // Adele
let favNumbers = [1, 2, 3, 4];
let mixedArr = ["string", ["otherarray"], 123, true, { name: "huxn", age: 23 }];
console.log(mixedArr[0]); // string
console.log(mixedArr[1]); // ["otherarray"]
console.log(mixedArr[2]); // 123
console.log(mixedArr[3]); // true
console.log(mixedArr[4]); // {name: "huxn", age: 23}
console.log(mixedArr[4]["name"]); // huxn
console.log(mixedArr[4]["age"]); // 23
