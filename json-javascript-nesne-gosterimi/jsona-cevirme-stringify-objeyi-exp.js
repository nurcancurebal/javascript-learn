const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
};


const objJson = JSON.stringify(student, undefined, 1);

console.log(objJson);


// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "age": 250,
//     "isMarried": true,
//     "skills": [
//      "HTML",
//      "CSS",
//      "JS",
//      "React",
//      "Node",
//      "Python"
//     ]
//    }