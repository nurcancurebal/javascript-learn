// Object.assign: Orijinal nesneyi değiştirmeden bir nesneyi kopyalamak için, referanssız kopyalama

const person = {
    firstName: 'Nurcan',
    age: 250,
    country: 'Finland',
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
    }
};

// referanslı kopyalama

let newPerson = person;
console.log(person); // {firstName: 'Nurcan', age: 250, country: 'Finland', getPersonInfo: ƒ}

newPerson.firstName = 'Erdinç';
console.log(person); // {firstName: 'Erdinç', age: 250, country: 'Finland', getPersonInfo: ƒ}

//! referanslı kopyalarsak orijinal metinde her değişimden etkilenir.


// referanssız kopyalama(object.assign)

const copyPerson = Object.assign({}, person);

copyPerson.firstName = 'Bal';

console.log(person); // {firstName: 'Erdinç', age: 250, country: 'Finland', getPersonInfo: ƒ}
console.log(copyPerson); // {firstName: 'Bal', age: 250, country: 'Finland', getPersonInfo: ƒ}