// Özellik değeri kısaltması
// Kod yazarken genelde var olan değişkenleri özelliklere isim olarak atarız.

function kullaniciOlustur(isim, yas) {

    return {
        isim: isim,
        yas: yas
    };
}

let kullanici = kullaniciOlustur("Nurcan", 27);

console.log(kullanici.isim); // Nurcan

// Yukarıdaki örnekte özellikler değişkenler ile aynı isme sahipler. Bu çeşit kullanım çok yaygındır, hatta bundan dolayı
// kısaltma bile yapılmıştır. isim:isim yazmak yerine sadece isim yazılabilir:

function kullaniciOlusturTwo(isimTwo, yasTwo) {

    return {
        isimTwo, //  isimTwo: isimTwo ile aynı
        yasTwo   // yasTwo: yasTwo ile aynı
    };
}

console.log(kullaniciOlusturTwo("Erdinç", 26)); // { isimTwo: 'Erdinç', yasTwo: 26 }

// Aynı obje içerisinde kısaltma ve normal versiyonu kullanılabilir:

let kullaniciTwo = {
    isimThree,  //! burada hata veriyor 
    yasThree: 30
};

console.log(kullaniciTwo);