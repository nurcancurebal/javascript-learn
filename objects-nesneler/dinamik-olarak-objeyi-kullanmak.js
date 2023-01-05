// objelerde köşeli parantez dört şey için kullanılır

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

// boşluklu değişken çağırmak için

console.log(person['phone number']); // +3584545454545


// dinamik olarak kullanmak için(değişken sahip olduğu değeri yazdık içine)

let keyName = 'skills';

console.log(person[keyName]);
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


//! obje içine key:value şeklinde ekleme yapmak için

person["married"] = "evli";

console.log(person.married); // evli