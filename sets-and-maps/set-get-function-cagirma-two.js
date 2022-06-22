const f = () => {
    return "Hello, World";
};

const map = new Map();

map.set(f, "merhaba dünya");

console.log(map.get(f));    // merhaba dünya


let mapTwo = new Map();

mapTwo.set(f, f);

console.log(mapTwo.get(f));  // [Function: f]