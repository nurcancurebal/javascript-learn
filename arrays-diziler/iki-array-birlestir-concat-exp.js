const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);



let arr = [1, 2];

// diziyi [3,4] ve [5,6] ile birleştir
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// diziyi [3,4] ile birleştir ve ardından 5, 6 ekle
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6