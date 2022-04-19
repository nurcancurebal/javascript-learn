// 1.yol

function printFullName(firstName, lastName) {

    let space = ' '
    let fullname = firstName + space + lastName;

    return fullname;
};
console.log(printFullName('Nurcan', 'Cürebal'));



// 2.yol

function printFullNameFour(name, surname) {

    return `${name} ${surname}`;

};
console.log(printFullNameFour('Aynur', 'Çeliköz'));



// 3.yol

function printFullNameTwo() { // dışarıdan değer almadan

    let name = 'Erdinç';
    let surname = 'Cürebal';
    let spaceTwo = ' ';
    let fullNameTwo = name + spaceTwo + surname;
    return fullNameTwo;
};

console.log(printFullNameTwo());


// 4.yol



function printFullNameThree() {  // dışarıdan değer almadan

    console.log('Bal' + ' ' + 'Cürebal');
};

printFullNameThree();