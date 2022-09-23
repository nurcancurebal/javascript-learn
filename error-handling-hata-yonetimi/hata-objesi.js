/* Hata meydana geldiğinde, JavaScript bu hata ile ilgili bir obje yaratır. Sonrasında bu obje catch'e argüman olarak gönderilir: */

try {

    // ...

} catch (err) { // <-- "hata nesnesi", err yerine başka bir kelime kullanabilir

    // ...
}

/* Tüm varsayılan hatalar için, catch içerisinde hata objesi iki ana özelliği taşır:

~ isim (name)
Hata ismi. Tanımsız değerler için bu "ReferenceError"'dur.

~ mesaj (message)
Hatanın detayları hakkında anlaşılır bilgi verir.
Çoğu ortamda standart olmayan başka özellikler de bulunmaktadır. Bunlardan en fazla kullanılan ve desteklenen:

~ stack
O anki çağrı yığını: Hataya neden olan fonksiyon zincirini belirtir. Genelde hata ayıklama amacıyla kullanılır.
Örneğin: */

try {

    lalala; // hata, değişken tanımlı değil!

} catch (err) {

    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined (lalala tanımlı değil)
    console.log(err.stack); // ReferenceError: lalala is not defined (ReferenceError: lalala şurada tanımlanmadı ...)

    // ayrıca hatayı tümüyle göstermek de mümkündür.
    // hata karakter dizisine "name:message" gibi çevirildi.
    console.log(err); // ReferenceError: lalala tanımlı değil
}