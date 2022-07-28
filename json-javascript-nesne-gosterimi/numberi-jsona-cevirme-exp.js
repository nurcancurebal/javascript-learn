let age = 250;

age = { age };

console.log(age);

const numberJson = JSON.stringify(age, undefined, 2);

console.log(numberJson);


// { age: 250 }
// {
//   "age": 250
// }