// hasOwnProperty: Bir objede belirli bir anahtarın (key) veya özelliğin var olup olmadığını kontrol etmek için

const person = {
    firstName: 'Nurcan',
    age: 27,
    country: 'Canada',
    city: 'Ottava',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
};


console.log(person.hasOwnProperty('firstName'));    // true

console.log(person.hasOwnProperty('score'));    // false

console.log(person.hasOwnProperty('Nurcan'));   // false

console.log(person.hasOwnProperty(27)); // false

console.log(person.hasOwnProperty('age'));  // true