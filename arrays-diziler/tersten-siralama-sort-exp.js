// let arr = [5, 2, 1, -10, 8];

// ... kodunuz bu diziyi tersten sıralamalıdır.

// console.log( arr ); // 8, 5, 2, 1, -10

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // [ 8, 5, 2, 1, -10 ]