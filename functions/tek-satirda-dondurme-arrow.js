// 1.yol

const fullName = (firstName, secondName) => {

    return `${firstName} ${secondName}`;
};

console.log(fullName('Nurcan', 'Cürebal'));

console.log(fullName('Erdinç', 'Cürebal'));


// 2.yol

const fullNameTwo = (first, last) => `${first} ${last}`;    // tek satırlık kod olduğu için süslü prantez ve return' e gerek duymadık

console.log(fullNameTwo('Bal', 'Cürebal'));