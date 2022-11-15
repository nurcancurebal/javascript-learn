/* Varsayılan değerler
Dizide atamadaki değişkenlerden daha az değer varsa, hata olmayacaktır. Eksik değerler tanımsız olarak kabul edilir: */

let [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname); // undefined

// Eksik olanı değiştirmek için "varsayılan" bir değer istiyorsak, şunu kullanarak sağlayabiliriz =:

let [name2 = "Guest", surname2 = "Anonymous"] = ["Julius"];

console.log(name2);    // Julius
console.log(surname2); // Anonymous

/* Varsayılan değerler daha karmaşık ifadeler ve hatta işlev çağrıları olabilir. Yalnızca değer sağlanmadığında değerlendirilirler.

Örneğin, burada işlevi iki varsayılan için kullanıyoruz. Ancak yalnızca eksik olan için çalışacaktır: */

// runs only prompt for surname
let [name3, surname3 = 'Cürebal'] = ["Julius"];

console.log(name3);    // Julius
console.log(surname3); // Cürebal