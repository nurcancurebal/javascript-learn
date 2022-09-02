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

    getFullName() { // class' ın içinde function bu şekilde tanımlanır

        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    };
};

const person1 = new Person("Nurcan", "Cürebal", "27", "Canada", "Ottava");
const person2 = new Person("Erdinç", "Cürebal", "27", "İstanbul", "Sancaktepe");

console.log(person1);
// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'Canada',
//     city: 'Ottava'
//   }

console.log(person1.getFullName()); // Nurcan Cürebal

console.log(person2);
//   Person {
//     firstName: 'Erdinç',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'İstanbul',
//     city: 'Sancaktepe'
//   }

console.log(person2.getFullName()); // Erdinç Cürebal