// lastIndexOf() dizide aynı elemandan birden fazla olabilir bu komut içine yazılan elemanın en son nerede geçtiğini söyler

const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2];

console.log(numbers.lastIndexOf(1)); // 9
console.log(numbers.lastIndexOf(2)); // 10