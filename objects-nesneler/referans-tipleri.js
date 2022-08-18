/* Dahili Özellikler: Referans Tipleri
Girift metod çağrıları this kelimesini kaybedebilir, örneğin: */

let kullanici = {
    isim: "Nurcan",
    selamVer() { console.log(this.isim); },
    yolcuEt() { console.log("Güle Güle"); }
};

kullanici.selamVer(); //Nurcan,  Basit metod beklendiği gibi çalışır

// Şimdi isme göre selamVersin veya yolcuEt'sin.

(kullanici.isim == "Nurcan" ? kullanici.selamVer : kullanici.yolcuEt)(); // undefined, Hata!

/* Son satırda kullanıcı ismine göre kullanici.selamVer veya kullanici.yolcuEt cagrilir.kullanici.selamVer ile çağrıldığında çalışmaz.
Bunun nedeni çağrı içerisinde this'in undefined olmasıdır.
Aşağıdaki çalışır: */

kullanici.selamVer(); // Nurcan

// Aşağıdaki kod metodu çalıştırmaz:

(kullanici.isim == "Nurcan" ? kullanici.selamVer : kullanici.yolcuEt)(); // undefined, Hata!

/* Neden ? Eğer bunun derinliklerine inmek isterseniz öncelikle bakmanız gereken yer obj.method() çağrısı olmalıdır.
Peki bu obj.method() cümlesi ne yapar:
1- '.' özelliği alır
2- () bu özelliği çalıştırır.
Peki this ilk bölümden ikincisine nasıl geçer ?
Eğer bu olayı iki farklı satırda gösterecek olursak, this bu durumda kaybolacaktır: */

let kullanici2 = {
    isim: "Erdinç",
    selamVer() { console.log(this.isim); }
}

// metodu alma ve çağırma iki satırda gösterilecek olursa

let selamVer = kullanici2.selamVer;
selamVer(); // undefined, hata!, tanımsız

/* Burada selamVer = kullanici2.selamVer fonksiyonu değişkene atar, sonra son satırdaki yapılan ise tamamen ilkinden farklıdır.Bundan dolayı this bulunmamaktadır.
kullanici2.selamVer() çağrısının çalışabilmesi için bir çözüm bulunmaktadır. '.' fonksiyon değil[Referans Tipi]döndürmektedir.(https://tc39.github.io/ecma262/#sec-reference-specification-type)
Referans Tipi “şartname tipidi”. Doğrudan kullanılamaz, dil kendince kullanabilir bu tipleri.
Referans Tipi üç değerin birleşmesi ile oluşur(base, name, strict): base objedir. name özelliktir.
strict eğer use strict kullanılmışsa true olur.
kullanici2.selamVer erişimi fonksiyon değil Referans Tipi döndürür.Sıkı mod kullanıldığında kullanici2.selamVer aşağıdaki gibi döner: */

// Referans Tipi değeri

(kullanici2, "selamVer", true);

/* Referans Tipinde() çağrıldığında obje ve onun metodu hakkında tüm bilgileri alınır ve this(bizim durumumuzda kullanici2) belirlenir.
Atama gibi işlemler selamVer = kullanici2.selamVer referans tipini tamamen iptal eder, kullanici2.selamVer(fonksiyon) değerini alır ve bunu paslar.Bu şekilde de this tanımsız kalır.
Bundan dolayı this in çalışabilmesi için metodun doğrudan obj.metod() şeklinde veya obj[metod]() şeklinde çalıştırılması gerekmektedir. */