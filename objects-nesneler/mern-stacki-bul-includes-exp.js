// Kullanıcılar nesnesinden MERN yığın geliştiricisi olan kişileri bulun.MongoDB, Express, React ve Node ‘in baş harflerinden oluşur.

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


const arrayUsers = Object.entries(users);

let mernMeter = 0;

for (let index = 0; index < arrayUsers.length; index++) {

    let mongoDb = arrayUsers[index][1].skills.includes('MongoDB');
    let expressJs = arrayUsers[index][1].skills.includes('Express');
    let reactJs = arrayUsers[index][1].skills.includes('React');
    let nodeJs = arrayUsers[index][1].skills.includes('Node');


    if (mongoDb == true && expressJs == true && reactJs == true && nodeJs == true) {

        console.log(`MERN yığın geliştiricisi ${arrayUsers[index][0]}`);

        mernMeter++;
    };
};

console.log(`MERN yığın geliştiricisi ${mernMeter} kişi var.`);
// MERN yığın geliştiricisi Asab
// MERN yığın geliştiricisi Paul
// MERN yığın geliştiricisi 2 kişi var.