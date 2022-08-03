// Önceki zorluklarda if, if else, if else if else, switch ve üçlü operatörleri söylüyoruz.

// söz dizimi
if (condition) {

    // kodun bu kısmı doğru koşul için çalıştırılır

} else {

    // kodun bu kısmı yanlış koşul için çalıştırılır

};


// if else

let num = 3;

if (num > 0) {

    console.log(`${num} is a positive number`);

} else {

    console.log(`${num} is a negative number`);

}
//  3 is a positive number



// if else if else if else

let a = 0

if (a > 0) {

    console.log(`${a} is a positive number`);

} else if (a < 0) {

    console.log(`${a} is a negative number`);

} else if (a == 0) {

    console.log(`${a} is zero`);

} else {

    console.log(`${a} is not a number`);
}



// Switch More Examples

let dayUserInput = prompt('What day is today ?');

let day = dayUserInput.toLowerCase();

switch (day) {

    case 'monday':
        console.log('Today is Monday');

        break;

    case 'tuesday':
        console.log('Today is Tuesday');

        break;

    case 'wednesday':

        console.log('Today is Wednesday');

        break;

    case 'thursday':
        console.log('Today is Thursday');

        break;

    case 'friday':
        console.log('Today is Friday');

        break;

    case 'saturday':
        console.log('Today is Saturday');

        break;

    case 'sunday':
        console.log('Today is Sunday');

        break;

    default:
        console.log('It is not a week day.');
};



// ternary

let isRaining = true;

isRaining
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.');