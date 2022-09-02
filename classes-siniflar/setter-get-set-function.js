// Normal metot ile alıcı arasındaki fark sizi şaşırtmasın. Normal bir yöntem yapmayı biliyorsan, iyisindir. Person sınıfına
// getPersonInfo adındaki normal metodu ekleyelim.

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

    set setScore(setScore) {

        this.score += setScore;
    };

    set setSkill(skill) {   // Ana skills' i değiştiriyor(ekleme yapıyor)

        this.skills.push(skill);
    };

    getPersonInfo() {

        let fullName = this.getFullName();

        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +  //slice(0, this.skills.length - 1): 0'ıncı karakter dahil son karekter hariç, al
            ` and ${this.skills[this.skills.length - 1]}`;

        let formattedSkills = skills ? `He knows ${skills}` : '';

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;

        return info;
    };
};


const person1 = new Person('Nurcan', 'Cürebal', 27, 'Canada', 'Ottava');
const person2 = new Person('Erdinç', 'Cürebal', 27, 'Turkey', 'Istanbul');
const person3 = new Person('Bal', 'Cürebal', 1, 'Mars', 'Mars city');


person1.setScore = 5;
person1.setSkill = 'HTML';  // getSkills' i çağırdığımızda burada eklenenlerde geliyor
person1.setSkill = 'CSS';
person1.setSkill = 'JavaScript';


person2.setScore = 2;
person2.setSkill = 'Planning';
person2.setSkill = 'Managing';
person2.setSkill = 'Organizing';


console.log(person1.getScore);  // 5
console.log(person2.getScore);  // 2


console.log(person1.getSkills); // [ 'HTML', 'CSS', 'JavaScript' ]
console.log(person2.getSkills); // [ 'Planning', 'Managing', 'Organizing' ]
console.log(person3.getSkills); // []


console.log(person1.getPersonInfo());   // Nurcan Cürebal is 27. He lives Ottava, Canada. He knows HTML, CSS and JavaScript
console.log(person2.getPersonInfo());   // Erdinç Cürebal is 27. He lives Istanbul, Turkey. He knows Planning, Managing and Organizing
console.log(person3.getPersonInfo());   // Bal Cürebal is 1. He lives Mars city, Mars.