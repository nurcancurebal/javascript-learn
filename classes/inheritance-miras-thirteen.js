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

console.log(s1);
console.log(s1.saySomething());
console.log(s1.getFullName());
console.log(s1.getPersonInfo());


// Student {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 'Canada',
//     country: 27,
//     city: 'Ottava',
//     score: 0,
//     skills: []
//   }
//   I am a child of the person class
//   undefined
//   Nurcan Cürebal
//   Nurcan Cürebal is Canada. She lives Ottava, 27.