// objemiz değiştirilebilir(mutable) bir kez tanımlandıktan sonra onu değiştirebiliriz

const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 27,
    country: 'Canada',
    city: 'Ottava',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'],
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

person.nationality = 'Ethiopian';
person.country = 'Finland'; // countryi değiştirdik yeni değeri
person.title = 'teacher'; // person objesine eklendi
person.skills.push('Meteor'); // skills array olduğu için sondan ekledik push ile
person.skills.push('SasS')
person.isMarried = true; // person objesine eklendi
//! person objesine eklenenler sondan eklenmez, person objesinin içi a dan z ye kadar sıralanır, eklenenlerde bu sıraya göre eklenir.


// function ekleme

person.getPersonInfo = function () {

    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)  //TODO burada skillsin içini boşaltıyor nasıl oluyor anlamadım
        .join(', ');
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;

    let fullName = this.getFullName(); // objenin içindeki fullname functionunu çağırmış
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
    return statement;
};

console.log(person); // {firstName: 'Nurcan', lastName: 'Cürebal', age: 27, country: 'Finland', city: 'Ottava', …}

console.log(person.getPersonInfo());
// Nurcan Cürebal is a teacher.
// He lives in Finland.
// He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and sasS.