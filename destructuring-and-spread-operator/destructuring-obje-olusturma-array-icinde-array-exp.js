// bir obje yarat 

const student = ['Nurcan', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// const benzeri = {
//     name: "Nurcan",
//     htmlScore: 98,
//     cssScore: 85,
//     jsScore: 90,
//     reactScore: 95,
//     skills: 'HTML CSS JS React'
// };

// console.log(benzeri.name, benzeri.skills, benzeri.jsScore, benzeri.reactScore);



const studentObject = {...student};

console.log(studentObject);