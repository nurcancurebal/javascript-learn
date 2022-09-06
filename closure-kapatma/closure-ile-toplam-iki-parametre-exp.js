/* Closure ile toplam

topla adında bir fonksiyon yaz ve şu şekilde çalışsın topla(a)(b) = a+b

Evet aynen bu şekilde, iki tane parantez ile

sum(1)(2) = 3
sum(5)(-1) = 4

İkincisinin çalışabilmesi için ilkinin fonksiyon döndürmesi gerekmektedir. */


function topla(a) {

  return function (b) {

    return a + b; // dıştaki Sözcüksel Ortamdan "a" değişkenini almakta.
  };

}

console.log(topla(1)(2)); // 3
console.log(topla(5)(-1)); // 4