/* Özellik Sayısı

ozellikSayisi(obj) adında bir fonksiyon yazın ve bu fonksiyon objede bulunan özelliklerin sayısını dönsün. */

let kullanici = {
    adi: 'Ahmet',
    yasi: 30
};

// console.log(ozellikSayisi(kullanici)); // 2

/* Kodu olabildiğince kısa yazınız.

Not: Sembolik özellikleri pas geçin, sadece “gerçek” olanları hesaba katın.

çözüm */

let kullaniciOne = {
    adi: 'Nurcan',
    yasi: 30
};

function count(obj) {

    return Object.keys(obj).length;
}

console.log(count(kullaniciOne)); // 2