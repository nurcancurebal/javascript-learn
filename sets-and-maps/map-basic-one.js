let myMap = new Map();

console.log(typeof myMap); // object

let key1 = "Nurcan";
let key2 = { a: 2, b: 3 };
let key3 = () => 2;

myMap.set(key1, "X");
myMap.set(key2, "Y");
myMap.set(key3, "Z");

console.log(myMap.get(key1)); // X
console.log(myMap.get(key2)); // Y
console.log(myMap.get(key3)); // Z


myMap.forEach(function (key, value) {

    console.log(key, value);
});
// X Nurcan
// Y { a: 2, b: 3 }
// Z [Function: key3]