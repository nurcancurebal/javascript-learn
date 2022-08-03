// Bu zorluklarda birçok döngü türünü ele alıyoruz. Normal for döngüsü, while döngüsü, do while döngüsü, for of döngüsü,
// forEach döngüsü ve for in döngüsü. Bunları nasıl kullandığımızı görelim:


// dizi değişkeni bildirme
const names = ['Nurcan', 'Erdinç', 'Bal', 'Timur'];

// normal for döngüsü kullanarak bir diziyi yineleme
let len = names.length;

for (let i = 0; i < len; i++) {

    console.log(names[i].toUpperCase());
};

// for of kullanarak bir diziyi yineleme
for (const name of names) {

    console.log(name.toUpperCase());
};

// forEach kullanarak yinelenen dizi
names.forEach((name) => name.toUpperCase());



const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 27,
    country: 'Canada',
    city: 'Ottava',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
};

for (const key in person) {

    console.log(key);
};

// firstName
// lastName
// age
// country
// city
// skills
// isMarried