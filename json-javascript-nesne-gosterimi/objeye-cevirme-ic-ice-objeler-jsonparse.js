/* JSON.parse
JSON-karakterinin kodlamasını geri çevirmek için ( decode ), JSON.parse adında diğer bir metoda ihtiyaç vardır.

Yazımı:

let deger = JSON.parse(str[, alıcı]);

-> str
Çözülecek JSON metni.

-> alıcı
Opsiyonel function(anahtar,deger) ile her (anahtar,deger) çifti için çağrılacaktır. Bu değerler fonksiyon içerisinde değiştirilebilir.

Örneğin: */

// metne çevrilmiş dizi
let sayilar = "[0, 1, 2, 3]";

sayilar = JSON.parse(sayilar);

console.log(sayilar); // [ 0, 1, 2, 3 ]


// -> İç içe objeler için:

let kullanici = '{ "adi": "Ahmet", "yasi": 35, "admin": false, "arkadaslar": [0,1,2,3] }';

kullanici = JSON.parse(kullanici);

console.log(kullanici); // { adi: 'Ahmet', yasi: 35, admin: false, arkadaslar: [ 0, 1, 2, 3 ] }

/* JSON gerektiği kadar karmaşık olabilir, içerisinde objeler diziler ve bu objelerin içerisinde objeler diziler olabilir. Tek yapması gereken formata uymaktır.*/