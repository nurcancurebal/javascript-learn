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