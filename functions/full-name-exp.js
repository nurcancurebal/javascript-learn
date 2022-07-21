// 1.yol

function printFullName(firstName, lastName) { // dışarıdan değer alır, işlemi değişkene atar

    let space = ' '

    let fullname = firstName + space + lastName;

    return fullname;
};
console.log(printFullName('Nurcan', 'Cürebal'));



// 2.yol

function printFullNameTwo(name, surname) {  // dışarıdan değer alır, işlemi returnda yapar

    return `${name} ${surname}`;

};
console.log(printFullNameTwo('Aynur', 'Çeliköz'));



// 3.yol

function printFullNameThree() { // dışarıdan değer almadan, işlemi değişkene atarak

    let name = 'Erdinç';
    let surname = 'Cürebal';
    let spaceTwo = ' ';
    let fullNameTwo = name + spaceTwo + surname;
    
    return fullNameTwo;
};

console.log(printFullNameThree());


// 4.yol



function printFullNameFour() {  // dışarıdan değer almadan, işlemi console.logda yaptık

    console.log('Bal' + ' ' + 'Cürebal');
};

printFullNameFour();