// Bazı özellikler için bir sınıf oluşturduğumuzda bir başlangıç değerine sahip olabiliriz. Örneğin bir oyun oynuyorsanız, başlama
// puanınız sıfır olacaktır. Dolayısıyla, sıfır olan bir başlangıç puanımız veya puanımız olabilir. Başka bir şekilde, bir başlangıç
// becerisine sahip olabiliriz ve bir süre sonra bir beceri kazanacağız.


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
    getFullName() {    // class' ın içinde function bu şekilde tanımlanır

        const fullName = this.firstName + " " + this.lastName;
        
        return fullName;
    };
};

const person1 = new Person("Nurcan", "Cürebal", "27", "Canada", "Ottava");
const person2 = new Person("Erdinç", "Cürebal", "27", "Turkey", "Istanbul");

console.log(person1);
console.log(person1.score);
console.log(person1.skills);

console.log(person2);
console.log(person2.score);
console.log(person2.skills);


// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'Canada',
//     city: 'Ottava',
//     score: 0,
//     skills: []
//   }
//   0
//   []
//   Person {
//     firstName: 'Erdinç',
//     lastName: 'Cürebal',
//     age: '27',
//     country: 'Turkey',
//     city: 'Istanbul',
//     score: 0,
//     skills: []
//   }
//   0
//   []