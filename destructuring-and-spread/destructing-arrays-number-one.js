// Destructuring (imha etme/yıkım): arrayleri ve objeleri açmanın ve farklı bir değişkene atamanın bir yoludur.

const numbers = [1, 2, 3];

let [numOne, numTwo, numThree] = numbers;

console.log(numbers);   // [ 1, 2, 3 ]

console.log(numOne, numTwo, numThree);  // 1 2 3



const scientificConstants = [2.72, 3.14, 9.81, 37, 100];

let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);