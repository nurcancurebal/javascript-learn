const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 27,
    title: 'developer',
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


const formatter = new Intl.ListFormat('tr', {  // tr yazdığımız için türkçeye metni çevirdi(dili seçebilirsin)
    style: 'long',
    type: 'conjunction'
});


person.getPersonInfo = function () {

    let skills = formatter.format(this.skills);

    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`; // ve' yi kendi eklediği için türkçe oldu ama diğerlerini elimizle yazdığımız için değişmedi
    return statement;
};

console.log(person.getPersonInfo());

//TODO