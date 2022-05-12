// Object.entries: Bir dizideki anahtarları ve değerleri almak için

const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
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

