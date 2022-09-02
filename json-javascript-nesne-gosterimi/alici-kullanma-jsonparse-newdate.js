/* -> Alıcı kullanma
Diyelimki sunucunuzda tanisma diye bir objeyi metin şeklinde tutuyorsunuz.

Aşağıdaki gibi görünecektir: */

// baslik: (tanisma basligi), tarih: (tanisma tarihi)
let str1 = '{"baslik":"Konferans","tarih":"2017-11-30T12:00:00.000Z"}';

/* … Şimdi bunun tekrar obje haline getirilmesi gerekmektedir. ( deserialize )

JSON.parse kullanarak yapıldığından: */

let str2 = '{"baslik":"Konferans","tarih":"2017-11-30T12:00:00.000Z"}';

let tanisma2 = JSON.parse(str2);

// console.log(tanisma2.date.getDate()); // Hata!

console.log(tanisma2); // { baslik: 'Konferans', tarih: '2017-11-30T12:00:00.000Z' }

/* HATA!

tanisma.tarih karakter dizisidir, tarih değil. JSON.parse bu karakter dizisini Date objesine çevireceğini nasıl bilebilir ?

Bunu Alıcı fonksiyon ile tüm değerler olduğu gibi alıp sadece tarih Date objesi olarak çevrilebilir. */

let str3 = '{"baslik":"Konferans","tarih":"2017-11-30T12:00:00.000Z"}';

let tanisma3 = JSON.parse(str3, function (anahtar, deger) {

    if (anahtar == 'tarih') return new Date(deger);

    return deger;
});

console.log(tanisma3.tarih.getDate()); // 30, Şimdi çalışıyor!

console.log(tanisma3.tarih); // 2017-11-30T12:00:00.000Z

// Bu iç içe objeler için de aynı şekilde çalışır:

let program = `{
  "tanismalar": [
    {"baslik":"Konferans","tarih":"2017-11-30T12:00:00.000Z"},
    {"baslik":"DogumGunu","tarih":"2017-04-18T12:00:00.000Z"}
  ]
}`;

program = JSON.parse(program, function (anahtar, deger) {

    if (anahtar == 'tarih') return new Date(deger);

    return deger;
});

console.log(program.tanismalar[1].tarih.getDate()); // 18, çalışır!