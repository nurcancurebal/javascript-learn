// objelerde köşeli parantez iki şey için kullanılır


const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function () {
        return `${this.firstName}${this.lastName}`;
    },
    'phone number': '+3584545454545'
};

console.log(person['phone number']);    // boşluklu değişken çağırmak için


let keyName= 'skills';

console.log(person[keyName]);   // dinamik olarak kullanmak için