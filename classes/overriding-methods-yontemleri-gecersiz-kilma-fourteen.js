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

        let pronoun = this.gender == 'Male' ? 'He' : 'She';

        let formattedSkills = skills ? `${pronoun} knows ${skills}` : '';

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

s1.setScore = 2;
s1.setSkill = 'HTML';
s1.setSkill = 'CSS';
s1.setSkill = 'JavaScript';

s2.setScore = 5;
s2.setSkill = 'Planning';
s2.setSkill = 'Managing';
s2.setSkill = 'Organizing';

// Şimdi, getPersonInfo yöntemi geçersiz kılındı ​​ve kişinin erkek mi yoksa kadın mı olduğunu tanımlar.

console.log(s1);        // Student

console.log(s1.getFullName());  // student' in iindeki function

console.log(s1.getScore);   // get

console.log(s1.getSkills);  // get

console.log(s1.score);   // set

console.log(s1.skills);    // set

console.log(s1.getPersonInfo());    // Student' taki function(overriding: değiştirdik)

console.log(Student.favoriteSkill());   // static

console.log(Student.showDateTime());    // static

console.log(s1.saySomething());     // Student' taki function(inheritance)


console.log(s2);

console.log(s2.getFullName());

console.log(s2.getScore);

console.log(s2.getSkills);

console.log(s2.score);

console.log(s2.skills);

console.log(s2.getPersonInfo());

console.log(Student.favoriteSkill());

console.log(Student.showDateTime());

console.log(s2.saySomething());



// Student {
//     firstName: 'Nurcan',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Canada',
//     city: 'Ottava',
//     score: 2,
//     skills: [ 'HTML', 'CSS', 'JavaScript' ],
//     gender: 'female'
//   }
//   Nurcan Cürebal
//   2
//   [ 'HTML', 'CSS', 'JavaScript' ]
//   2
//   [ 'HTML', 'CSS', 'JavaScript' ]
//   Nurcan Cürebal is 27. She lives in Ottava, Canada. She knows HTML, CSS and JavaScript
//   HTML
//   22.07.2022 21:09
//   I am a child of the person class
//   Student {
//     firstName: 'Erdinç',
//     lastName: 'Cürebal',
//     age: 27,
//     country: 'Turkey',
//     city: 'Istanbul',
//     score: 5,
//     skills: [ 'Planning', 'Managing', 'Organizing' ],
//     gender: 'Male'
//   }
//   Erdinç Cürebal
//   5
//   [ 'Planning', 'Managing', 'Organizing' ]
//   5
//   [ 'Planning', 'Managing', 'Organizing' ]
//   Erdinç Cürebal is 27. He lives in Istanbul, Turkey. He knows Planning, Managing and Organizing
//   JS
//   22.07.2022 21:09
//   I am a child of the person class