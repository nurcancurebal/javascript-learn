const student = ['Nurcan', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

let [name, skills, score] = student;

const scoreSpread = [...score];

let jsScore = scoreSpread[2];

let reactScore = scoreSpread[3];

console.log(name, skills, jsScore, reactScore);   // Nurcan [ 'HTML', 'CSS', 'JS', 'React' ] 90 95