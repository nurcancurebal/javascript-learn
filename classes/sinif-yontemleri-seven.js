// Bir sınıfın içindeki yapıcı, nesne için bir plan oluşturmamıza izin veren yerleşik bir işlevdir. Bir sınıfta sınıf yöntemleri
// oluşturabiliriz. Yöntemler, sınıf içindeki JavaScript işlevleridir. Bazı sınıf yöntemleri oluşturalım.

class Person {

    constructor(firstName, lastName, age, country, city) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    };

    getFullName() {

        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    };
};

const person1 = new Person("Nurcan", "Cürebal", "27", "Canada", "Ottava");
const person2 = new Person("Erdinç", "Cürebal", "27", "İstanbul", "Sancaktepe");

console.log(person1);
console.log(person1.getFullName());

console.log(person2);
console.log(person2.getFullName());


// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'Canada',
//     city: 'Ottava'
//   }
//   Nurcan Cürebal
//   Person {
//     firstName: 'Erdinç',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'İstanbul',
//     city: 'Sancaktepe'
//   }
//   Erdinç Cürebal