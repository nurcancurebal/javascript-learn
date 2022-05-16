// Oturum açmış kullanıcıları sayın, aşağıdaki nesneden 50 puana eşit olan kullanıcıları sayın.

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

const keyValueUsers = Object.entries(users);

const number = [];

let meterOne = 0;
let meterTwo = 0;


for (let index = 0; index < keyValueUsers.length; index++) {

    if (keyValueUsers[index][1].isLoggedIn == true) {

        console.log(`Oturum açtı: ${keyValueUsers[index][0]}`);
        meterOne++;
    };

};

console.log(`Oturum açmış ${meterOne} kişi mevcut`);

for (let index = 0; index < keyValueUsers.length; index++) {

    if (keyValueUsers[index][1].points == 50) {

        console.log(`50 puan olan kullanıcılar ${keyValueUsers[index][0]}`);
        meterTwo++;
    };
};

console.log(`50 puan olan ${meterTwo} kişi mevcut`);