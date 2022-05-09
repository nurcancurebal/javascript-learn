// değerlere iki şekilde erişilebilir
// 1. eğer anahtar isim (key-name) tek bir kelime ise noktadan sonra key-namin adını yazarak erişebiliyoruz(.followed)
// 2. köşeli parantez ve bir alıntı kullanarak

//! NOT: objelerde boşlukla değişken tanımlanabilir ama tırnak içine alınmalı örn: {'phone number':+325456715526}

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
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


console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);