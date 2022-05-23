// JavaScript'te bazı aktiviteleri belirli bir zaman aralığında yürütebiliriz veya bazı aktiviteleri yürütmek
// için bir süre planlayabiliriz(bekleyebiliriz).

// setInterval= belli aralıklarla çalışacak olan fonksiyonumuz
// setTimeout= tek seferlik, ne kadar zaman sonra çalışacağını ayarlayabiliyoruz

//! 1000 milisaniye 1 saniyeye eşit


function sayHello() {
    
    console.log('Hello!');
};

setTimeout(sayHello,5000); // 5 saniye sonra çalıştı
setInterval(sayHello,2000); // 2 saniyede bir çalışır

//! clearInterval ile setInterval' i iptal edebiliriz
//! clearTimeout ile setTimeout' u iptal edebiliriz

