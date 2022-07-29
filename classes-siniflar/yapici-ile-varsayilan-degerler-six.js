// Yapıcı işlevi özellikleri, diğer normal işlevler gibi varsayılan bir değere sahip olabilir.

class Person {

    constructor(
        firstName = 'Nurcan',
        lastName = 'Cürebal',
        age = 27,
        country = 'Canada',
        city = 'Ottava'
    ) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    };
};

const person1 = new Person(); // varsayılan değerleri alacaktır
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');

console.log(person1);
console.log(person2);


// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Canada',
//     city: 'Ottava'
//   }
//   Person {
//     firstName: 'Lidiya',
//     lastName: 'Tekle',
//     age: 28,
//     country: 'Finland',
//     city: 'Espoo'
//   }