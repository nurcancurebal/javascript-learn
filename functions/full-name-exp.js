function printFullName(firstName, lastName) {

    let space = ' '
    let fullname = firstName + space + lastName;

    return fullname;
};
console.log(printFullName('Nurcan', 'Cürebal'));


// ya da


function printFullNameTwo() {

    let name = 'Erdinç';
    let surname = 'Cürebal';
    let spaceTwo = ' ';
    let fullNameTwo = name + spaceTwo + surname;
    return fullNameTwo;
};

console.log(printFullNameTwo());


// ya da



function printFullNameThree() {

    console.log('Bal'+' '+'Cürebal');
};

printFullNameThree();