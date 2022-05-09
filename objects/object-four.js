// her şey bir nesne olabilir. Nesnelerin özezllikleri vardir. zelliklerinde değerleri vardır.
// Bir nesne anahtar değer ikilisi, çiftlisi gibi bir şeydir.

const person = {}; // boş bir nesne
console.log(person) // {}


const user = {
    name: 'nurcan',
    surname: 'cürebal',
    cat: 'bal',
    skills: ['javascript', 'HTML', 'CSS'],
    a: {

    }
};

console.log(user);  //{name: 'nurcan', surname: 'cürebal', cat: 'bal', skills: Array(3), a: {…}}