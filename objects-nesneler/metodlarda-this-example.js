function kullaniciOlustur() {

    return {
        isim: "Nurcan",
        ref: this
    };
};

let kullanici = kullaniciOlustur();

console.log(kullanici.ref.isim); // Sonuç nedir?, undefined


/* Çünkü this'i tanımlayan kurallar obje tanımına bakmaz.
Kodda kullaniciOlustur() içindeki this undefined'dır. Çünkü bu fonksiyon olarak çağırıldı metod olarak değil!.
Ve object tanımının this'e doğrudan bir etkisi yoktur. this tüm fonksiyonu kapsar, kod bloğu veya obje tanımı bunu etkilemez.
Öyleyse, ref: this aslında fonksiyonun thsi değerini alır.
Şimdi tersi bir duruma bakalım: */

function kullaniciOlustur2() {

    return {
        isim: "Erdinç",
        ref() {
            return this;  // objenin içindeki fonksiyona metod denir
        }
    };
};

let kullanici2 = kullaniciOlustur2();

console.log(kullanici2.ref().isim); // Erdinç

// Şimdi çalışıyor çünkü kullanici2.ref() metod oldu. this'in değeri de . dan öncesi olarak tanımlandı.