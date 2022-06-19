// conditions
// if
// else if
// else if else if
// switch
// ternary operators( tek satırlık koşul)


// if else


let myAge = 29;
let yourAge = 92;

if (myAge > yourAge) {

    console.log('I am ' + (myAge - yourAge) + ' years older than you');

} else {

    console.log('You are ' + (yourAge - myAge) + ' years older than me.');
};



let a = 56;
let b = 97;

if (a > b) {

    console.log(a + ' is greater than ' + b);

} else {
    console.log(b + ' is greater than ' + a);
};


// ternary


let age = 27;
let ageTwo = 13;

console.log(age > 18 ? 'You are old enough to drive.' : 'You are left with ' + (18 - age) + ' years to drive.');
console.log(ageTwo > 18 ? ' You are old enough to drive.' : 'You are left with ' + (18 - ageTwo) + ' years to drive.');



let one = 9;
let two = 45;

console.log(one > two ? one + ' büyüktür ' + two : two + ' büyüktür ' + one);



let first = 25;
let second = 30;

let conclusionFirst = first % 2 == 0;
let conclusionSecond = second % 2 == 0;

console.log(conclusionFirst ? first + 'is an even number' : first + ' is an odd number.');
console.log(conclusionSecond ? second + ' is an even number' : second + ' is is an odd number.');