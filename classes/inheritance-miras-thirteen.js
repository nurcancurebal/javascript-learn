// Kalıtım kullanarak ana sınıfın tüm özelliklerine ve yöntemlerine erişebiliriz. Bu, kod tekrarını azaltır. Hatırlarsanız, bir Person
// ebeveyn sınıfımız var ve bundan çocuklar oluşturacağız. Çocuk sınıfımız öğrenci, öğretmen vb. olabilir.


// syntax(söz dizimi)
//class ChildClassName extends {

//   kod buraya gelecek
//};


// Kişi ebeveyn sınıfından bir Öğrenci alt sınıfı oluşturalım.


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


class Student extends Person {

    saySomething() {

        return 'I am a child of the person class';
    };
};

const s1 = new Student('Nurcan', 'Cürebal', 'Canada', 27, 'Ottava');

s1.setScore = 1;
s1.setSkill = 'HTML';
s1.setSkill = 'CSS';
s1.setSkill = 'JavaScript';


console.log(s1);    // Student

console.log(s1.getFullName());  // Person' daki function

console.log(s1.getScore);   // get

console.log(s1.getSkills);  // get

console.log(s1.score);   // set

console.log(s1.skills);   // set

console.log(s1.getPersonInfo());    // Person' daki function

console.log(Student.favoriteSkill());   // static

console.log(Student.showDateTime());    // static

console.log(s1.saySomething());     // Student' taki function


// Student {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 'Canada',
//     country: 27,
//     city: 'Ottava',
//     score: 1,
//     skills: [ 'HTML', 'CSS', 'JavaScript' ]
//   }

//   Nurcan Cürebal

//   1

//   [ 'HTML', 'CSS', 'JavaScript' ]

//   1

//   [ 'HTML', 'CSS', 'JavaScript' ]

//   Nurcan Cürebal is Canada. She lives Ottava, 27. She knows HTML, CSS and JavaScript

//   CSS

//   22.07.2022 20:46

//   I am a child of the person class