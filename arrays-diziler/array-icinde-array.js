const numbers = [3, 4, 6, [1, 3, 7], 10];

console.log(numbers); // (5) [3, 4, 6, Array(3), 10]

console.log(numbers[0]); // 3 = arrayin içindeki sıfırıncı elemanı çağırdık

console.log(numbers[3]); // (3) [1, 3, 7] arrayin içindeki 3. elemanı çağırdık

console.log(numbers[3][2]); // 7 = 3. elemanın içindeki 2. elemanı çağırdık


const firstNums = [1, 2, 3];
const secondNums = [1, 4, 9];

const arrayOfArray = [[1, 2, 3], [1, 2, 3]];

console.log(arrayOfArray[0]); // [1, 2, 3]


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = [frontEnd, backEnd];

console.log(fullStack);   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

console.log(fullStack.length);  // 2

console.log(fullStack[0]);  // ["HTML", "CSS", "JS", "React", "Redux"]

console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]