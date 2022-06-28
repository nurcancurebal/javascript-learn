// Destructuring (imha etme/yıkım): arrayleri ve objeleri açmanın ve farklı bir değişkene atamanın bir yoludur.

const numbers = [1, 2, 3];

let [numOne, numTwo, numThree] = numbers;

console.log(numbers);   // [ 1, 2, 3 ]

console.log(numOne, numTwo, numThree);  // 1 2 3