// Dizideki değerleri atlamak istersek, ek virgül kullanırız. Virgül, o belirli dizindeki değerin atlanmasına yardımcı olur

const numbers = [1, 2, 3];

let [one, , three] = numbers;

console.log(one, three);    // 1 3



const names = ["Nurcan", "Erdinç", "Bal", "Cürebal"];

let [, secondPerson, , fourthPerson] = names;

console.log(secondPerson, fourthPerson);    // Erdinç Cürebal