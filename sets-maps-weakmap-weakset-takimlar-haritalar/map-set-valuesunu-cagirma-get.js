let map = new Map();

map.set("a", "merhaba dünya"); // setle ekledik

console.log(map.get("a"));  // merhaba dünya , get ile valuesunu çağırdık



const obj = { a: 1 };

let mapTwo = new Map();

mapTwo.set(obj, "merhaba, Nurcan");

console.log(mapTwo.get(obj));   // merhaba, Nurcan