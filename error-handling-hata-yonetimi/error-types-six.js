// ReferenceError: Geçersiz bir referans meydana geldi. Bildirilmemiş bir değişken kullanırsak bir ReferenceError atılır.

let firstName = 'Nurcan';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// ReferenceError: lastName is not defined


// SyntaxError: Bir sözdizimi hatası oluştu

let square = 2 x 2;

console.log(square);

console.log('Hello, world");

// let square = 2 x 2;
//                ^
// SyntaxError: Unexpected identifier(Beklenmeyen tanımlayıcı)


// TypeError: Bir tür hatası oluştu

let num = 10;

console.log(num.toLowerCase());

// TypeError: num.toLowerCase is not a function