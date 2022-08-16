// Birkaç kelimeden oluşan özellik ismi yazabilirsiniz. Fakat bu durumda anahtar çift tırnak içine alınmalıdır:

let kullanici = {
    isim: "Nurcan",
    yas: 27,
    "Nemrudun Kızı": false  // birkaç kelimeden oluştuğunda görüldüğü üzere tırnak içine alınması gerekmektedir.
};

console.log(kullanici); // { isim: 'Nurcan', yas: 27, 'Nemrudun Kızı': false }


// Eğer özellik anahtarı birkaç kelimeden oluşuyorsa nokta ile bu özelliğe erişilemez:

// yazım hatası
// kullanici.Nemrudun Kızı = true
// Çünkü . aslında bir değişken ismi beklemektedir. Değişken tanımlarken boşluk ve başka sınırlamalar aynen . yazımı için
// de geçerlidir.

// Bunun yerine köşeli parantez yazımı ile bunu çözebilirsiniz:

let kullaniciTwo = {};

// değer ata
kullaniciTwo["Nemrudun Kızı"] = true;

// değer al
console.log(kullaniciTwo["Nemrudun Kızı"]); // true

// sil
delete kullaniciTwo["Nemrudun Kızı"];

console.log(kullaniciTwo); // {}


// Bunun yanında aşağıdaki gibi değişken üzerinden de gidilebilir:

let anahtar = "Nemrudun Kızı";

// kullaniciTwo["Nemrudun Kızı"] = true; //ile aynı
kullaniciTwo[anahtar] = true;