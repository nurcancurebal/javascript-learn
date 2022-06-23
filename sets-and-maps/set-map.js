// Set(Küme), bir öğeler(elements) topluluğudur. Küme yalnızca benzersiz öğeler(elements) içerebilir.

let map = new Map();

map.set({ a: 1 }, "merhaba, dünya");

console.log(map);   // Map(1) { { a: 1 } => 'merhaba, dünya' }



const obj = { a: 1 };

let mapTwo = new Map();

mapTwo.set(obj, "merhaba dünya");

console.log(mapTwo);    // Map(1) { { a: 1 } => 'merhaba dünya' }