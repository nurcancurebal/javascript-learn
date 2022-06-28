// Dizinin değerinin o dizin için tanımsız olması durumunda varsayılan değeri kullanabiliriz

const names = [undefined, "Nurcan", "Erdinç"];

let [
    firstPerson = "Bal",
    secondPerson,
    thirdPerson,
    fourthPerson = "Cürebal"
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);  // Bal Nurcan Erdinç Cürebal