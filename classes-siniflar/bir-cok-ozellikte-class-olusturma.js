class Person {
    constructor(firstName, lastName, age, country, city) {

        console.log(this);

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    };
};

const person1 = new Person('Nurcan', 'Cürebal', 27, 'Canada', 'Ottava');

console.log(person1);


// Person {}
// Person {
//   firstName: 'Nurcan',
//   lastName: 'Cürebal',
//   age: 27,
//   country: 'Canada',
//   city: 'Ottava'
// }