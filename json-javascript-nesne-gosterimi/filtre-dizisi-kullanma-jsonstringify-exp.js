const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
};

const studentJson = JSON.stringify(student, ["firstName", "lastName", "skills"], 3);

console.log(studentJson);

// {
//     "firstName": "Asabeneh",
//     "lastName": "Yetayehe",
//     "skills": [
//        "HTML",
//        "CSS",
//        "JS",
//        "React",
//        "Node",
//        "Python"
//     ]
//  }