// bazen parametrelere varsayılan değerleri eklememiz gerekiyor çünkü: fonksiyonu çağırdığımızda eğer o parametreyi göndermediysek varsayılan değerler kullanıllır.
// atama operatörü kullanılır.


function multiply(num1, num2 = 3) { // eğer num2 ye değer vermezsek num2 yi 23 kabul eder

    return num1 * num2;
};
console.log(multiply(10));
console.log(multiply(20, 5))


function fullName(firstName = 'nurcan', lastName = 'cürebal') {

    let space = ' ';
    let print = firstName + space + lastName;

    return print;
};

console.log(fullName());
console.log(fullName('erdinç', 'cürebaly'));