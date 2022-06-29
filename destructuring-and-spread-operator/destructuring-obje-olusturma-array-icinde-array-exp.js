// bir obje yarat 

const student = ['Nurcan', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// const benzeri = {
//     name: "Nurcan",
//     htmlScore: 98,
//     cssScore: 85,
//     jsScore: 90,
//     reactScore: 95,
//     skills: 'HTML CSS JS React'
// };

// console.log(benzeri.name, benzeri.skills, benzeri.jsScore, benzeri.reactScore);



const studentObject = {...student};

console.log(studentObject);

// 1.yol

/* const obj = {};

student.forEach(function (item,index) {
    
    if (index=== 0){

        obj.name = item;

    }else if(index===1){

        obj.skills = item;

    }else if(index===2){

        obj.htmlScore = item[0];
        obj.cssScore= item[1];
        obj.jsScore = item[2];
        obj.reactScore = item[3];
    }
});

console.log(obj); */


