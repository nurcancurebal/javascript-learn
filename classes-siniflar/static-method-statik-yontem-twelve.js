// Statik anahtar kelime, bir sınıf için statik bir yöntem tanımlar. Statik yöntemler, sınıfın örneklerinde çağrılmaz. Bunun yerine,
// sınıfın kendisine çağrılır. Bunlar genellikle nesneler oluşturma veya klonlama işlevleri gibi yardımcı işlevlerdir. Statik yönteme
// bir örnek Date.now()'dur. Now yöntemi doğrudan sınıftan çağrılır.

// Statik yöntemler, yardımcı işlevler olarak kullanılabilen yöntemlerdir.

// Statiğin içinde objeleri(date,math) kullanabiliyoruz.

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

    getFullName() {

        const fullName = this.firstName + ' ' + this.lastName;

        return fullName;
    };

    get getScore() {

        return this.score;
    };

    get getSkills() {

        return this.skills;
    };

    set setScore(score) {

        this.score += score;
    };

    set setSkill(skill) {

        this.skills.push(skill);
    };

    getPersonInfo() {

        let fullName = this.getFullName();

        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`;

        let formattedSkills = skills ? `She knows ${skills}` : '';

        let info = `${fullName} is ${this.age}. She lives ${this.city}, ${this.country}. ${formattedSkills}`;

        return info;
    };

    static favoriteSkill() {

        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node'];

        const index = Math.floor(Math.random() * skills.length);

        return skills[index];
    };

    static showDateTime() {

        let now = new Date();

        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (hours < 10) {

            hours = '0' + hours;
        }

        if (minutes < 10) {

            minutes = '0' + minutes;
        }

        if (date < 10) {

            date = '0' + date;
        }

        if (month < 10) {

            month = '0' + month;
        }

        let dateMonthYear = date + '.' + month + '.' + year;
        let time = hours + ':' + minutes;
        let fullTime = dateMonthYear + ' ' + time;

        return fullTime;
    };
};

const person = new Person('Nurcan', 'Cürebal', 27, 'Canada', 'Ottava');

console.log(person);

console.log(person.getFullName());

console.log(person.getScore);   // get

console.log(person.getSkills);  // get

console.log(person.score);     // set

console.log(person.skills);    // set

console.log(person.getPersonInfo());

console.log(Person.favoriteSkill());    // static

console.log(Person.showDateTime());     // static


// Person {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Canada',
//     city: 'Ottava',
//     score: 0,
//     skills: []
//   }
//   Nurcan Cürebal
//   0
//   []
//   0
//   []
//   Nurcan Cürebal is 27. She lives Ottava, Canada.
//   Python
//   22.07.2022 20:59