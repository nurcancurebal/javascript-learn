const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

let bigLengthTech = [0];

for (let index = 0; index < webTechs.length; index++) {
    
    if (bigLengthTech[0] < webTechs[index].length) {
        bigLengthTech[0] = webTechs[index].length;
        bigLengthTech[1] = webTechs[index];
    }
    
};

console.log(bigLengthTech[1])