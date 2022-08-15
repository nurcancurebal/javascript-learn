// Ayarlayıcı(Setter) yöntemi, belirli özelliklerin değerini değiştirmemize izin verir. Anahtar kelime seti ve ardından bir fonksiyon
// kullanarak bir setter yöntemi yazıyoruz.

//! setler return dönmez, class' ın içindeki verileri değiştirmek için kullanılır. Güvenlik açaığını kapatmak için kullanılır.

class Person {
    constructor(firstName, lastName, age, country, city) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 1;
        this.skills = [];
    };

    getFullName() {     // function classlarda bu şekilde yazılır

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
};

const person1 = new Person('Nurcan', 'Cürebal', 27, 'Canada', 'Ottava');
const person2 = new Person('Erdinç', 'Cürebal', 27, 'Turkey', 'Istanbul');

person1.setScore = 1;
person1.setSkill = 'HTML';
person1.setSkill = 'CSS';
person1.setSkill = 'JavaScript';

person2.setScore = 1;
person2.setSkill = 'Planning';
person2.setSkill = 'Managing';
person2.setSkill = 'Organizing';

console.log(person1.score);
console.log(person2.score);

console.log(person1.skills);
console.log(person2.skills);



// 2
// 2
// [ 'HTML', 'CSS', 'JavaScript' ]
// [ 'Planning', 'Managing', 'Organizing' ]