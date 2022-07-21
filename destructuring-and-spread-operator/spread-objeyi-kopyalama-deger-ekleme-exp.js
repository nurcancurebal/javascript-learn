// orijinali değiştirmeden 

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
};


const newStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [
            ...student.skills.frontEnd,
            { skill: 'BootStrap', level: 8 }
        ],
        backEnd: [
            ...student.skills.backEnd,
            { skill: 'Express', level: 9 }
        ],
        dataBase: [
            ...student.skills.dataBase,
            { skill: 'SQL', level: 8 }
        ],
        dataScience: [
            ...student.skills.dataScience,
            'SQL'
        ]
    }
};

console.log(student);

console.log(newStudent);
// dataScience: 'SQL'