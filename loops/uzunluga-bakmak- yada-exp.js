const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'];

const webTechsTwoCharacters = [];

for (let index = 0; index < webTechs.length; index++) {

    if (webTechs[index].length == 4 || webTechs[index].length > 4) { // burada ya da dediğimiz her iki taraf doğru isede if'in içi çalışır

        webTechsTwoCharacters.push(webTechs[index]);
    };
};

console.log(webTechsTwoCharacters);