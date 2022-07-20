class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    };
};

const person1 = new Person('Nurcan', 'Cürebal');

console.log(person1);   // Person { firstName: 'Nurcan', lastName: 'Cürebal' }


// En başta da belirttiğimiz gibi bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz. Şimdi, Person sınıfını
// kullanarak bir çok person nesnesi oluşturalım.

class PersonTwo {

    constructor(firstName, lastName) {

        console.log(this);

        this.firstName = firstName;
        this.lastName = lastName;
    };
};

const person2 = new PersonTwo('Erdinç', 'Cürebal');
const person3 = new PersonTwo('Bal', 'Cürebal');
const person4 = new PersonTwo('Timur', 'Cürebal');

console.log(person2);
console.log(person3);
console.log(person4);

// PersonTwo {}
// PersonTwo {}
// PersonTwo {}
// PersonTwo { firstName: 'Erdinç', lastName: 'Cürebal' }
// PersonTwo { firstName: 'Bal', lastName: 'Cürebal' }
// PersonTwo { firstName: 'Timur', lastName: 'Cürebal' }