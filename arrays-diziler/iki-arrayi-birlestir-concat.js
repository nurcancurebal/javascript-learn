// concat() = iki arrayi birleştirmek istediğimiz zaman

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = [7, 8, 9, 10, 20];

const fourth = firstList.concat(thirdList, secondList, [30, 50, 60, 74]);

console.log(fourth);  // (11) [1, 2, 3, 7, 8, 9, 10, 20, 4, 5, 6, 30, 50, 60, 74]