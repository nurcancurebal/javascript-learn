// Object.entries: Bir dizideki anahtarları ve değerleri almak için

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

// const entries = Object.entries(person);

// console.log(entries);   //(8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]


for (let [key, val] of Object.entries(person)) {

    console.log(`key: ${key} val:${val}`);
};

console.log(typeof Object.entries(person)); // object