// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

let car = {
  type: "Honda",
  model: "Civic",
  color: "Red",
};

console.log(typeof car); // object
console.log(car); // {type: "Honda", model: "Civic", color: "Red"}

car["type"] = "Toyota";
car["wheels"] = 4;
console.log(car); // {type: "Toyota", model: "Civic", color: "Red", wheels: 4}
