// değerlere iki şekilde erişilebilir
// 1. eğer anahtar isim (key-name) tek bir kelime ise noktadan sonra key-namein adını yazarak erişebiliyoruz(.followed)
// 2. köşeli parantez ve bir alıntı kullanarak

//! NOT: objelerde boşlukla değişken tanımlanabilir ama tırnak içine alınmalı örn: {'phone number':+325456715526}


//!arrow functionları object methodu olarak kullanamayız. çünkü arrow functionda this windowu referans alır. Objenin kendisini referans almak yerine

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
        return `${this.firstName} ${this.lastName}`;
    },

    'phone number': '+3584545454545',

    function() {

        this.age + 5;
        console.log(`${this.city}' de yaşıyor`);
    },

    getAge: function () {
        return this.age + 11;
    }
};


console.log(person.firstName);
console.log(person.lastName);
console.log(person.age); // 250
console.log(person.location);   // undefined
console.log(person.skills); // (8) ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js']
console.log(person.skills[1]);  // CSS

console.log(person['phone number']);    //+3584545454545 //! boşluklu olduğu için bu şekilde eriştik birde dinamik olarak kullanmak için köşeli parantez kullanılır

console.log(person['skills']);

console.log(person.getFullName()) // Nurcan Cürebal
console.log(person.getFullName) // [Function: getFullName]

// console.log(person)
// getFullName: [Function: getFullName],
// 'phone number': '+3584545454545',
// function: [Function: function]

console.log(person.getAge()) // 261