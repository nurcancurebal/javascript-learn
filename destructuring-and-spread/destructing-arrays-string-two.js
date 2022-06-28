const names = ["Nurcan", "Erdinç", "Bal", "Cürebal"];

let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);  // Nurcan Erdinç Bal Cürebal



const fullStack = [
    ["HTML", "CSS", "React"],
    ["Node", "Express", "MongoDB"]
];

const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);  // [ 'HTML', 'CSS', 'React' ]

console.log(backEnd);   // [ 'Node', 'Express', 'MongoDB' ]