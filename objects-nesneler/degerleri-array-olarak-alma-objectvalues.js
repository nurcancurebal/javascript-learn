// Object.values: Bir objenin değerlerini array olarak almak için

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

const values = Object.values(person);

console.log(values);  //(8) ['Nurcan', 27, 'Canada', 'Ottava', Array(3), 'teacher', {…}, ƒ]

console.log(typeof values);  // object