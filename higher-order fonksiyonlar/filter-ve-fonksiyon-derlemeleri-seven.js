// Filtre: Filtreleme koşullarını tam olarak dolduran ve yeni bir dizi döndüren öğeleri filtreleyin.Fonksiyonlar ile kullanılır.

//! Birinci derlemede okunan ya da kenara kayıt edilen fonksiyonlar 1. Daha hızlı çalışır bilgisayar kod çalışmadan önce
//! fonksiyonun ne olduğunu bilir. 2. Her yerden ( fonksiyonun üntündende ) çağırabiliriz.
//! İkinci derlemede okunan fonksiyon : ikinci derlemede kodlar çalışmaya başladığında okunmaya başlar ikinci derlemede kodlar yukardan aşağı çalışır.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const filterNum = numbers.filter(function (number) {

    return number > 3 && number < 8;
});

console.log(filterNum);




const filterNumber = function (number) { // ikinci derlemede çalışır

    return number > 3 && number < 8;
};

console.log(numbers.filter(filterNumber));




console.log(numbers.filter(aaa));

function aaa(number) {  // Birinci derlemede okunan fonksiyon 

    return number > 3 && number < 8;
};




console.log(numbers.filter(number => number > 3 && number < 8)); // ikinci derlemede çalışır





console.log(numbers.filter(function (number) {   // ikinci derlemede çalışır.

    return number > 3 && number < 8;
}));





console.log(a());

function a() {        // Birinci derlemede okunur

    return numbers.filter(function (number) {

        return number > 3 && number < 8;
    });
};