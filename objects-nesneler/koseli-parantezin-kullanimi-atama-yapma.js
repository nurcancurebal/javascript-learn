// 1. değişken olarak kullanma

let meyve = "elma";
let poset = {};
poset[meyve] = 10;

console.log(poset); // {elma: 10}


// 2.key value ataması yapma

let poset2 = {};
poset2["elma"] = 10;

console.log(poset2); // {elma: 10}

const ani = {};
let d = { e: 'kopek' }
let c = { e: 'essek' }

ani[d] = { ...d, n: "Mara" }
ani[c] = { ...c, n: "Sara" }

console.log(ani); // { '[object Object]': { e: 'essek', n: 'Sara' } }