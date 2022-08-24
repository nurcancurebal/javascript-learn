let obj, metod;

obj = {
    selamVer: function () { console.log(this); }
};

obj.selamVer();               // (1) [object Object], Normal metod çağrısı yapılmaktadır.

(obj.selamVer)();             // (2) [object Object], Aynı şekilde çağrı yapılmaktadır. Tek fark parantez ve bu parantez
// sadece sıralama için kullanılmaktadır. Bir anlam ifade etmez.

(metod = obj.selamVer)();    // (3) undefined, Daha karmaşık bir çağrı, (ifade).metod(). Eğer bu metod iki satıra ayrılırsa
// çalışır:

let f = obj.selamVer; // ifadeyi hesapla
f();        // çağır

// Burada f() fonksiyon olarak this ifadesi olmadan çalıştırılmıştır.

(obj.selamVer || obj.yolcuEt)(); // (4) undefined , Aynı şekilde . nın sol tarafında bir ifade bulunmaktadır.

// (3) ve (4) ün davranışını açıklamak için dönen referans tipini tekrar çalıştırmak gereklidir.
// Metod çağrısı haricinde her işlem( atama = veya ||) bu fonksiyonu normal değere döndürür. Bundan dolayı da this'in
// tanımsız kalmasına yol açar.