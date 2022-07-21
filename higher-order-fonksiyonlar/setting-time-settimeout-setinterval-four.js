// JavaScript'te bazı aktiviteleri belirli bir zaman aralığında yürütebiliriz veya bazı aktiviteleri yürütmek
// için bir süre planlayabiliriz(bekleyebiliriz).

// setInterval= belli aralıklarla çalışacak olan fonksiyonumuz
// setTimeout= tek seferlik, ne kadar zaman sonra çalışacağını ayarlayabiliyoruz

//! 1000 milisaniye 1 saniyeye eşit


function sayHello() {

    console.log('Hello!');
};

// setTimeout(sayHello,2000); // 2 saniye sonra çalıştı
// setInterval(sayHello,5000); // 5 saniyede bir çalışır

//! clearInterval ile setInterval' i iptal edebiliriz
//! clearTimeout ile setTimeout' u iptal edebiliriz

const interval = setInterval(sayHello, 1000);

const timeOut = setTimeout(() => {

    clearInterval(interval);

    console.log('interval işlemi iptal edildi');

}, 5000); // 5 saniye sonra interval işlemini iptal edecek

setTimeout(() => {

    clearTimeout(timeOut);
    
    console.log('time out işlemi iptal edildi, interval devam edecek');

}, 3000);