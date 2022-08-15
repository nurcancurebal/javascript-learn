// Bir yöntem, normal bir yöntem veya bir alıcı(get) veya bir ayarlayıcı(set) olabilir. Bir görelim, alıcı(getter) ve ayarlayıcı(setter).

// Get yöntemi, nesneden değere erişmemize izin verir. Get anahtar sözcüğünü ve ardından bir işlev(function) kullanarak bir get yöntemi
// yazıyoruz. Özelliklere doğrudan nesneden erişmek yerine, değeri elde etmek için alıcıyı kullanırız.

//! Getler dısarıdan veri(argument) almaz, içerideki verileri dışarıya çıkartmak için kullanılır.Bu güvenlik açığını kapatmak için kullanılır

class Person {
    constructor(firstName, lastName, age, country, city) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    };

    getFullName() {  // class' ın içinde function bu şekilde tanımlanır

        const fullName = this.firstName + ' ' + this.lastName;

        return fullName;
    };

    get getScore() {

        return this.score;
    };

    get getSkills() {

        return this.skills;
    };
};


const person1 = new Person('Nurcan', 'Cürebal', 27, 'Canada', 'Ottava');
const person2 = new Person('Erdinç', 'Cürebal', 27, 'Turkey', 'Istanbul');

console.log(person1);     // person class' ını çağırdık
console.log(person1.score);    // person objesinin içindeki score anahtarının value' sunu çağırdık
console.log(person1.getFullName());    // person class' ının içindeki getFullName functionunu çağırdık
console.log(person1.getScore);     // Getter yöntemini çağırmak için parantez kullanmamız gerekmez
console.log(person1.getSkills);

console.log(person2.getScore);
console.log(person2.getSkills);


// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Canada',
//     city: 'Ottava',
//     score: 0,
//     skills: []
//   }
//   0
//   Nurcan Cürebal
//   0
//   []
//   0
//   []