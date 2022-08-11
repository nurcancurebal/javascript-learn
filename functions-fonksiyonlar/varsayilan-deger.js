// Eğer fonksiyon argümanına bir değer gönderilmemişse fonksiyon içerisinde bu değişken undefined olur.

// Örneğin mesajGoster(gonderen,metin) fonksiyonu tek argüman ile de çağırılabilir.

// mesajGoster("Mahmut");
// Bu bir hata değildir. Fonksiyon eğer bu şekilde çağırılırsa, yani metin yoksa, metin == undefined varsayılır. Yukarıdaki
// fonksiyon çağırıldığında sonuç “Mahmut: undefined” olacaktır.

// Eğer “varsayılan” olarak metin değeri atamak istiyorsanız, = işareti ile tanımlamanız gerekmekte.


function mesajGoster(gonderen, metin = "metin gönderilmedi") {

    console.log(gonderen + ": " + metin);
};

mesajGoster("Nurcan"); // Nurcan: metin gönderilmedi


function mesajGosterTwo(gonderen, metin) {

    console.log(gonderen + ": " + metin);
};

mesajGosterTwo("Erdinç"); // Erdinç: undefined