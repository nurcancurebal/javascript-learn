const student = ['Nurcan', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const obj = {};

student.forEach(function (item, index) {

    if (index === 0) {

        obj.name = item;

    } else if (index === 1) {

        obj.skills = item;

    } else if (index === 2) {

        obj.htmlScore = item[0];
        obj.cssScore = item[1];
        obj.jsScore = item[2];
        obj.reactScore = item[3];
    }
});

console.log(obj.name, obj.skills, obj.reactScore);  // Nurcan [ 'HTML', 'CSS', 'JS', 'React' ] 95