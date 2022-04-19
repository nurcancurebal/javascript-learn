// bir değer döndürmek için çağırılmak zorunda olmayan fonksiyonlar

(function (n) {

    console.log(n * n);

})(2);  // 4


let squaredNum = (function (n) {

    return n * n

})(10);
console.log(squaredNum); //100 // bu şekilde değişkenede atabiliyoruz