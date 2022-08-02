// JavaScript, bir dış fonksiyon içinde fonksiyon yazmaya izin verir. İstediğimiz kadar çok sayıda iç fonksiyon yazabiliriz.
// İç fonksiyon, dış fonksiyonun değişkenlerine erişiyorsa, buna kapatma denir.


function outerFunction() {

    let count = 0;

    function innerFunction() {

        count++;

        return count;
    };

    return innerFunction;
};

const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());