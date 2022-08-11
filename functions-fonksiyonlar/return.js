// return fonksiyon içerisinde her yerde kullanılabilir. Kod return satırına eriştiğinde fonksiyon durur ve değer fonksiyonun
// çağırıldığı yere geri gönderilir.

function yasKontrolu(yas) {

    if (yas > 18) {

        return true;

    } else {

        return console.log('Ebevenylerinin izni var mı?');
    }
};

let yas = 17;

if (yasKontrolu(yas)) {

    console.log('İzin verildi');

} else {

    console.log('Reddedildi');
}

// return değer döndürmek zorunda değildir. Bu fonksiyondan anında çıkmayı sağlar.