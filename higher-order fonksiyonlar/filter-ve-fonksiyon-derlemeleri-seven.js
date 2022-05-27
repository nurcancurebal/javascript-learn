// Filtre: Filtreleme koşullarını tam olarak dolduran ve yeni bir dizi döndüren öğeleri filtreleyin.Fonksiyonlar ile kullanılır.

//! Birinci derlemede okunan ya da kenara kayıt edilen fonksiyonlar 1. Daha hızlı çalışır bilgisayar kod çalışmadan önce
//! fonksiyonun ne olduğunu bilir. 2. Her yerden ( fonksiyonun üntündende ) çağırabiliriz.
//! İkinci derlemede okunan fonksiyon : ikinci derlemede kodlar çalışmaya başladığında okunmaya başlar ikinci derlemede kodlar yukardan aşağı çalışır.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



numbers.filter(function name(number) {  // ikinci derlemede çalışır

    console.log(number > 3 && number < 8);
});  // Bu işlemin sonucu yalnızca true false döner, istediğimiz sonucu yazdırmaz.



// 1.YOL
const filterNum = numbers.filter(function (number) {   // ikinci derlemede çalışır

    return number > 3 && number < 8;
});

console.log(filterNum);



// 2.YOL
const filterNumber = function (number) { // ikinci derlemede çalışır

    return number > 3 && number < 8;
};

console.log(numbers.filter(filterNumber));



// 3.YOL
console.log(numbers.filter(aaa));

function aaa(number) {  // Birinci derlemede okunur

    return number > 3 && number < 8;
};



// 4.YOL
console.log(numbers.filter(number => number > 3 && number < 8)); // ikinci derlemede çalışır



// 5.YOL
console.log(numbers.filter(function (number) {   // ikinci derlemede çalışır

    return number > 3 && number < 8;
}));



// 6.YOL
console.log(a());

function a() {        // Birinci derlemede okunur

    return numbers.filter(function (number) {

        return number > 3 && number < 8;
    });
};