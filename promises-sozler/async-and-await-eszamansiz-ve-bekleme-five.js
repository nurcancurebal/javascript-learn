// Async ve wait, vaatleri yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

const square = async function (n) {

    return n * n;
};

console.log(square(2)); // Promise { 4 }