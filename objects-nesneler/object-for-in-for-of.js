// her şey bir nesne olabilir. Nesnelerin özezllikleri vardir. özelliklerinde değerleri vardır.
// Bir nesne anahtar ve değer ikilisi, çiftlisi gibi bir şeydir.

/* const person = {}; // boş bir nesne

console.log(person) // {} */


const user = {
    name: 'nurcan',
    surname: 'cürebal',
    cat: 'bal',
    skills: ['javascript', 'HTML', 'CSS'],
    a: {

    }
};

console.log(user);  //{name: 'nurcan', surname: 'cürebal', cat: 'bal', skills: Array(3), a: {…}}

let bul = "skills";

for (let anahtar in user) {
    if (anahtar == bul) {
        return console.log(user.anahtar) // undefined, çünkü for in yalnızca keyleri geziyor valuesunu vermiyor
    }
}


for (const iterator of Object.entries(user)) {

    if (iterator[0] == bul) {
        return console.log(iterator[1]) // [ 'javascript', 'HTML', 'CSS' ]
    }
}