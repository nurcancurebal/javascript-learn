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

const entries = Object.entries(person);

console.log(entries);   //(8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
/* [
    [ 'firstName', 'Nurcan' ],
    [ 'age', 27 ],
    [ 'country', 'Canada' ],
    [ 'city', 'Ottava' ],
    [ 'skills', [ 'HTML', 'CSS', 'JS' ] ],
    [ 'title', 'teacher' ],
    [
      'address',
      { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' }
    ],
    [ 'getPersonInfo', [Function: getPersonInfo] ]
] */

for (let [key, val] of entries) {

    console.log(`key: ${key} val:${val}`);
};
/* key: firstName val:Nurcan
key: age val:27
key: country val:Canada
key: city val:Ottava
key: skills val:HTML,CSS,JS
key: title val:teacher
key: address val:[object Object]
key: getPersonInfo val:function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
} */

console.log(typeof entries); // object