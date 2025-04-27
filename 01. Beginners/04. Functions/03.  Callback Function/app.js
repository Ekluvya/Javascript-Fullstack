// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
// -------------------------------
// function
function greet(name, cb) {
  console.log(`Hello ${name}`);
  cb();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument (callback)
greet("Peter", callMe);

function customOperation(num1, num2, operation) {
  return operation(num1, num2);
}

customOperation(10, 20, function (num1, num2) {
  console.log("This fucntion returns the sum of two numbers");
  console.log(num1 + num2);
});

customOperation(10, 20, function (num1, num2) {
  console.log("This fucntion returns the product of two numbers");
  console.log(num1 * num2);
});
// -------------------------------

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});
