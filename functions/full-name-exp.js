// 1.yol

function printFullName(firstName, lastName) {

    let space = ' '
    let fullname = firstName + space + lastName;

    return fullname;
};
console.log(printFullName('Nurcan', 'Cürebal'));


// 2.yol


function printFullNameTwo() {

    let name = 'Erdinç';
    let surname = 'Cürebal';
    let spaceTwo = ' ';
    let fullNameTwo = name + spaceTwo + surname;
    return fullNameTwo;
};

console.log(printFullNameTwo());


// 3.yol



function printFullNameThree() {

    console.log('Bal'+' '+'Cürebal');
};

printFullNameThree();


// 4.yol



function printFullNameFour(name, surname){

    return `${name} ${surname}`;
    
};
console.log(printFullNameFour('Aynur','Çeliköz'));