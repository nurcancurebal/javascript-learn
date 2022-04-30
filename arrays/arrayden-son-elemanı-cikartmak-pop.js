// pop() arrayden son değeri siler

let names = ['nurcan', 'erdinç', 'tarkan', 'ahmet', 'mehmet'];

let newNames = names.pop();
let newNamesTwo = names.pop();

console.log(newNames); //mehmet
console.log(newNamesTwo); //ahmet
console.log(names); //(3) ['nurcan', 'erdinç', 'tarkan']

//shift()baştan eleman çıkartmak istersek
let newNamesThree = names.shift();

console.log(newNamesThree);  //nurcan
console.log(names); //(2) ['erdinç', 'tarkan']