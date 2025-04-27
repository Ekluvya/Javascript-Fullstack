console.log("Hello, World!");
console.log("This is a simple Node.js application.");
console.log("It demonstrates how to use the console.log function.");

//alert("This is an alert message!"); // This will not work in Node.js, only in browsers

console.table({ name: "John", age: 30, city: "New York" });

let banana = "banana";

console.log(`Hello, ${name}!`);

//1. Create a variable name and store your name
let Person_name = "yash";

//2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
let whatDoYouWannaBecomeInYourLife = "programmer";

//3. Create variable name (gender) & store your gender
let gender = "male";

//4. Create variable name (twitterHandle)
let twitterHandle = "@yashkhare";

console.table({
  Person_name,
  whatDoYouWannaBecomeInYourLife,
  gender,
  twitterHandle,
});

// 1. Create Variable name (firstFavNum) & store your favorite number.
// 2. Create Variable name (secondFavNum) & store your second fav number.
// 3. Add (firstFavNum & secondFavNumber).
// 4. Subtract (firstFavNum & secondFavNumber).
// 5. Multiply (firstFavNum & secondFavNumber).
// 6. Divided (firstFavNum & secondFavNumber).
// 7. Check (firstFavNum Mod secondFavNumber)
// 8. Check the power of (firstFavNum)

let firstFavNum = 10;
let secondFavNum = 25;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** 5);

// 1. Create Variable name (isJsProgrammingLanguage) & store true as a value.
// 2. Create variable name (isJsHard) & store false as a value.
// 3. Create variable name (favNumb) & store your favorite number inside.
// 4. Now Add favNumber with the value of undefined.

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 10;
let result = favNumb + undefined;
console.log(result); // This will log NaN (Not a Number) because undefined is not a number

// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

let firstFavNumb = 10;
let secondFavNumb = 20;
console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNum);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);
console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Yash";
let favActorLastName = "Khare";
let fullName = favActorFirstName + " " + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = `My favourite Actor is ${uppercase} & he is a great actor`;
message += " his best show is Silicon Valley";
console.log(message);
