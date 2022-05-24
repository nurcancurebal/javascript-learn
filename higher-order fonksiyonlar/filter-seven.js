// Filtre: Filtreleme koşullarını tam olarak dolduran ve yeni bir dizi döndüren öğeleri filtreleyin.Fonksiyonlar ile kullanılır.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterNumber = function (number) { // Bu fonksiyon tiplemesi ikinci derlemede kodlar çalışmaya başladığımda okunmaya başlar ikinci derlemede kodlar yukardan aşağı çalışır.

    return number > 3 && number < 8;
};

console.log(numbers.filter(aaa));

function aaa(number) { // Birinci derlemede okunan fonksiyon daha hızlı çalısılır bilgisayar kod çalışmadan önce fonksiyonun ne olduğunu bilir.

    return number > 3 && number < 8;
};

console.log(numbers.filter(number => number > 3 && number < 8)); // numbers değişmedi, ikinci derlemede çalışır

console.log(numbers.filter(function (number) { // ikinci derlemede çalışır.

    return number > 3 && number < 8;
}));

console.log(numbers.filter(filterNumber));

function a() {

    return numbers.filter(function (number) { // Birinci derlemede kenara kayıt edilir. Bu kod daha hızlı çalışır.

        return number > 3 && number < 8;
    });
};