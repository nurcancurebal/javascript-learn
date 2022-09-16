/* Metodlarda this kullanımı
Obje metodlarının objelerde bulunan diğer bilgilere ulaşması çok büyük bir gerekliliktir. Örneğin kullanici.selamVer() kullanici ismine ihtiyaç duyar.
Objeye ulaşabilmek içim metod this kelimesine ihtiyaç duyar. */

// “noktadan önce” yazılan this o objeye referans verir. Örneğin:

let kullanici = {
    isim: "Nurcan",
    yas: 30,

    selamVer() {
        console.log(this.isim);
    }

};

kullanici.selamVer(); // Nurcan

/* Yukarıda kullanici.selamVer() fonksiyonu çalıştırılırken this kullanici olacaktır.
Teknik olarak this olmadan da objenin özelliklerine erişmek mümkündür. Bu dıştaki değişkene referans vererek yapılabilir: */

let kullanici2 = {
    isim: "Erdinç",
    yas: 30,

    selamVer() {
        console.log(kullanici2.isim); // "this" yerine "kullanici2" kullanılmıştır.
    }

};

/* … Fakat böyle bir koda güvenilmez. Diyelim ki kullanici2 objesini kopyaladınız ve yonetici = kullanici3 yaptınız. Sonra kullanici2 objesinin üzerine yazdınız bu durumda yanlış objeye erişmiş olacaksınız. Bir örnekle açıklamak gerekirse: */

/* let kullanici3 = {
    isim: "Bal",
    yas: 30,

    selamVer() {
        console.log(kullanici3.isim); // hataya neden olur
    }

};

let yonetici = kullanici3;
kullanici3 = null;

yonetici.selamVer(); */ // `selamVer()` içerisinde `kullanici3` kullanıldığından dolayı hata verecektir.

// Eğer kullanici3.isim yerine this.isim yazmış olsaydınız kod çalışacaktı. //TODO objeler referans değişken olduğu için kullanici3 değiştiği zaman her türlü yonetici de değişmez mi yani this de yazsak göstermemesi lazım?


/* “this” bağımsız bir şekilde kullanılabilir.
Diğer dillerden farklı olarak “this” kelimesi yer gözetmeksizin kullanılabilir. Her fonksiyonun içinde kullanılabilir.
Aşağıdaki kodda bir yazım hatası yoktur: */

function selamVer() {

    console.log(this.isim);
}

// this'in değeri çalışma anında değerlendirilir. Her şey olabilir.
// Örneğin this farklı objelerden çağırıldıklarında değerler alabilirler:

let kullanici4 = { isim: "Timur" };
let yonetici4 = { isim: "Figen" };

function selamVer() {

    console.log(this.isim);
}

// aynı fonksiyonu iki farklı objeye atandı.
kullanici4.f = selamVer;
yonetici4.f = selamVer;

// iki fonksiyon da farklı `this` e sahip.
// "noktadan" önceki "this" objeye referans verir.
kullanici4.f(); // Timur ,  (this == kullanici4)
yonetici4.f(); // Figen , (this == yonetici4)

yonetici4['f'](); // Figen , Köşeli parantez veya noktalı yazım farketmez, her ikisi de çalışır.