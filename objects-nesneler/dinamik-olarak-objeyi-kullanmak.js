// objelerde köşeli parantez üç şey için kullanılır

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


let keyName = 'skills';

console.log(person[keyName]);   // dinamik olarak kullanmak için(değişken sahip olduğu değeri yazdık içine)

// [
//     'HTML',       'CSS',
//     'JavaScript', 'React',
//     'Node',       'MongoDB',
//     'Python',     'D3.js'
//   ]



// obje içinde obje çağırmak için

const obj2 = { name: 'Nurcan' };

const obj = { [obj2]: "Merhaba Dünya" };

console.log(obj);   // { '[object Object]': 'Merhaba Dünya' }