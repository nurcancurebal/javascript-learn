/* Nesneyi JSON olarak değiştirmek istediğimizde JSON.stringify() kullanırız.
stringify yöntemi, bir gerekli parametre ve iki isteğe bağlı parametre alır.
Değiştirici(Yedek) filtre olarak kullanılır ve boşluk bir girintidir. Nesnedeki anahtarlardan herhangi birini filtrelemek istemiyorsak, tanımsız(undefined) olarak geçebiliriz. */

// JSON.stringify(obj, replacer, space);
// json veya metin, veri
// reviver, isteğe bağlı bir geri arama işlevidir

// Aşağıdaki nesneyi stringe çevirelim. Önce tüm anahtarları kullanalım ve ayrıca 4 boşluk girintisi yapalım.


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
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
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
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};

const txt = JSON.stringify(users, undefined, 1);

console.log(txt);



// yukarıdaki boşluk girintisi 1 olursa

// {
//     "Alex": {
//      "email": "alex@alex.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript"
//      ],
//      "age": 20,
//      "isLoggedIn": false,
//      "points": 30
//     },
//     "Asab": {
//      "email": "asab@asab.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node"
//      ],
//      "age": 25,
//      "isLoggedIn": false,
//      "points": 50
//     },
//     "Brook": {
//      "email": "daniel@daniel.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Redux"
//      ],
//      "age": 30,
//      "isLoggedIn": true,
//      "points": 50
//     },
//     "Daniel": {
//      "email": "daniel@alex.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Python"
//      ],
//      "age": 20,
//      "isLoggedIn": false,
//      "points": 40
//     },
//     "John": {
//      "email": "john@john.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React",
//       "Redux",
//       "Node.js"
//      ],
//      "age": 20,
//      "isLoggedIn": true,
//      "points": 50
//     },
//     "Thomas": {
//      "email": "thomas@thomas.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "React"
//      ],
//      "age": 20,
//      "isLoggedIn": false,
//      "points": 40
//     },
//     "Paul": {
//      "email": "paul@paul.com",
//      "skills": [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node"
//      ],
//      "age": 20,
//      "isLoggedIn": false,
//      "points": 40
//     }
//    }


// yukarıdaki boşluk girintisi 1 olursa

// {
//     "Alex": {
//               "email": "alex@alex.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript"
//               ],
//               "age": 20,
//               "isLoggedIn": false,
//               "points": 30
//     },
//     "Asab": {
//               "email": "asab@asab.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "Redux",
//                         "MongoDB",
//                         "Express",
//                         "React",
//                         "Node"
//               ],
//               "age": 25,
//               "isLoggedIn": false,
//               "points": 50
//     },
//     "Brook": {
//               "email": "daniel@daniel.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "React",
//                         "Redux"
//               ],
//               "age": 30,
//               "isLoggedIn": true,
//               "points": 50
//     },
//     "Daniel": {
//               "email": "daniel@alex.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "Python"
//               ],
//               "age": 20,
//               "isLoggedIn": false,
//               "points": 40
//     },
//     "John": {
//               "email": "john@john.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "React",
//                         "Redux",
//                         "Node.js"
//               ],
//               "age": 20,
//               "isLoggedIn": true,
//               "points": 50
//     },
//     "Thomas": {
//               "email": "thomas@thomas.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "React"
//               ],
//               "age": 20,
//               "isLoggedIn": false,
//               "points": 40
//     },
//     "Paul": {
//               "email": "paul@paul.com",
//               "skills": [
//                         "HTML",
//                         "CSS",
//                         "JavaScript",
//                         "MongoDB",
//                         "Express",
//                         "React",
//                         "Node"
//               ],
//               "age": 20,
//               "isLoggedIn": false,
//               "points": 40
//     }
// }