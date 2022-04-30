const { performance } = require('perf_hooks');

// const t0 = performance.now();
// const arr = [];

// for (let index = 0; index <= 100000000; index++) {
//     arr.push(index);
// }

// console.log(arr);

// const t1 = performance.now();
// console.log(t1 - t0);


// const t0 = performance.now();
// const arr = [];

// for (let index = 0;; index++) {
//     arr.push(index);
//     if (index >= 100000000) break;
// }

// console.log(arr);

// const t1 = performance.now();
// console.log(t1 - t0);





// const t0 = performance.now();
// const arr = [];

// let i = 0
// while (i <= 100000000) {
//     arr.push(i);
//     i++;
// }

// console.log(arr);

// const t1 = performance.now();
// console.log(t1 - t0);


// const t0 = performance.now();
// const arr = [];

// let i = 0

// while (true) {
//     arr.push(i);

//     if (i >= 100000000) break;
//     i++;
// }

// console.log(arr);

// const t1 = performance.now();
// console.log(t1 - t0);



// const t0 = performance.now();
// const arr = [];

// let i = 0

// do {
//     arr.push(i);
//     if (i >= 100000000) break;
//     i++;
// } while (true);

// console.log(arr);

// const t1 = performance.now();
// console.log(t1 - t0);