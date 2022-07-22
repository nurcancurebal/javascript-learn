// Gördüğünüz gibi Person Class'taki tüm yöntemlere erişmeyi başardık ve Student alt sınıfında kullandık. Ebeveyn yöntemlerini
// özelleştirebiliriz, bir alt sınıfa ek özellikler ekleyebiliriz. Yöntemleri özelleştirmek istiyorsak ve ekstra özellikler eklemek
// istiyorsak, alt sınıfa da kurucu işlevi kullanmamız gerekir. Yapıcı işlevinin içinde, ana sınıftan tüm özelliklere erişmek için
// super() işlevini çağırırız. Person sınıfının cinsiyeti yoktu ama şimdi alt sınıf olan Student için cinsiyet özelliği verelim. Alt
// sınıfta aynı yöntem adı kullanılıyorsa, üst yöntem geçersiz kılınır.


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
    constructor(firstName, lastName, age, country, city, gender) {

        super(firstName, lastName, age, country, city);

        this.gender = gender;
    };

    saySomething() {

        return 'I am a child of the person class';
    };

    getPersonInfo() {

        let fullName = this.getFullName();
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`;

        let formattedSkills = skills ? `He knows ${skills}` : '';

        let pronoun = this.gender == 'Male' ? 'He' : 'She';

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;

        return info;
    };
};

const s1 = new Student(
    'Nurcan',
    'Cürebal',
    27,
    'Canada',
    'Ottava',
    'female'
);

const s2 = new Student('Erdinç', 'Cürebal', 27, 'Turkey', 'Istanbul', 'Male');
s1.setScore = 1;
s1.setSkill = 'HTML';
s1.setSkill = 'CSS';
s1.setSkill = 'JavaScript';

s2.setScore = 1;
s2.setSkill = 'Planning';
s2.setSkill = 'Managing';
s2.setSkill = 'Organizing';

console.log(s1);

// Student {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Canada',
//     city: 'Ottava',
//     score: 1,
//     skills: [ 'HTML', 'CSS', 'JavaScript' ],
//     gender: 'female'
//   }

console.log(s1.saySomething());     // I am a child of the person class
console.log(s1.getFullName());      // Nurcan Cürebal
console.log(s1.getPersonInfo());    // Nurcan Cürebal is 27. She lives in Ottava, Canada. He knows HTML, CSS and JavaScript

console.log(s2.saySomething());     // I am a child of the person class
console.log(s2.getFullName());      // Erdinç Cürebal
console.log(s2.getPersonInfo());    // Erdinç Cürebal is 27. He lives in Istanbul, Turkey. He knows Planning, Managing and Organizing