let map = new Map();

map.set("a", "merhaba dünya");

console.log(map.get("a"));  // merhaba dünya



const obj = { a: 1 };

let mapTwo = new Map();

mapTwo.set(obj, "merhaba, Nurcan");

console.log(mapTwo.get(obj));   // merhaba, Nurcan