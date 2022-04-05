const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

const webTechsTwoCharacters = [];

for (let index = 0; index < webTechs.length; index++) {

    if (webTechs[index].length == 4 || webTechs[index].length > 4) {

        webTechsTwoCharacters.push(webTechs[index]);
    }
}

console.log(webTechsTwoCharacters);


//TODO yada nın olayını anlamadım anlatır mısın canım benim