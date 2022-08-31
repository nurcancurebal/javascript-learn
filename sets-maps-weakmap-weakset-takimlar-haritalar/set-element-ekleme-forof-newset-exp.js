const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4];

let set = new Set();

for (let num of number) {

    set.add(num);
};

console.log(set); // Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }