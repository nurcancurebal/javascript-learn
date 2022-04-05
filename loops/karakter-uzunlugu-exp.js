const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const webTechsLength = [];
const webTechsFour = [];

for (let index = 0; index < webTechs.length; index++) {

    webTechsLength.push(webTechs[index].length-1);

    if (webTechsLength[index] == 4) {
        webTechsFour.push(webTechs[index]);
    };

};

console.log(webTechsLength);
console.log(webTechsFour);