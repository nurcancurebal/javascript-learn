// Object.keys: Bir nesnenin anahtarlarını veya özelliklerini array olarak almak için

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

const keys = Object.keys(person);

console.log(keys); // (8) ['firstName', 'age', 'country', 'city', 'skills', 'title', 'address', 'getPersonInfo']


const newAddress = Object.keys(person.address);

console.log(newAddress); // (3) ['street', 'pobox', 'city']