/* -> Tekrar atma (Rethrowing)
Yukarıdaki örnekte yanlış veri ile başa çıkmak için try..catch kullandık. Peki başka beklenmeyen hata varsa ne yapacağız? Mesela değişken tanımsız olabilir veya bilmediğimiz bir hata ile de karşılaşabiliriz. */

let json1 = '{ "age": 30 }'; // tamamlanmamış veri

try {

    user = JSON.parse(json1); // <-- user'dan önce "let" kullanmayı unuttuysak

    // ...
} catch (err) {

    console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
    // (hata aslında JSON ile alakalı değil)
}

/* Tabii ki her şey mümkün! Programcılar da hata yapar. Yıllardır milyonlarca kişinin kullandığı open-source projelerde bile hata vardır. Hatta öyle hatalar vardır ki bulunduğunda çok büyük belaya neden olabilir (ssh'ta bulunan hata)

Biz denemelerimizde try..catchi "doğru olmayan veri"yi yakalamak için kullandık. Fakat aslında catch try'da olabilecek tüm hataları alır.Yukarıdaki örnekte beklenmeyecen bir hata almasına rağmen bundan dolayı `“JSON Error” mesajı verir. Bu aslında kod ayıklamayı zorlaştıran bir şeydir ve yanlış kullanımdır.

Yine de ne hatası olduğunu name'den çıkarmak mümkündür. */

try {

    user = { /*...*/ };

} catch (e) {

    console.log(e.name); // "ReferenceError" tanımsız değişkene erişim hatası
}

/* Kural basit:

~ Catch sadece bildiği hataları işlemeli diğerlerini ise tekrar hata olarak atmalı

“tekrar atma” tekniği şu şekilde detaylandırılabilir:

1. Catch tüm mesajları alır
2. catch(err){...} bloğunda tüm error objesi analiz edilir.
3. Eğer beklemediğimiz bir hata ise bu throw err ile tekrar atılır.

Aşağıdaki kodda catch sadece SyntaxError'ü idare etmektedir: */

let json2 = '{ "age": 30 }'; // tamamlanmamış veri

try {

    let user = JSON.parse(json2);

    if (!user.name) {

        throw new SyntaxError("tamamlanmamış veri: isim yok");
    }

    blabla(); // beklenmeyen hata

    console.log(user.name);

} catch (e) {

    if (e.name == "SyntaxError") {

        console.log("JSON Hatası: " + e.message); // JSON Hatası: tamamlanmamış veri: isim yok

    } else {

        throw e; // tekrar at (*)
    }
}

/* try..catch içerisinde eğer (*) hata tekrar atılırsa bu, try..catch in dışına taşar. Bunun daha üstte bulunan başka bir try..catch tarafından yakalanması gerekmektedir. Böyle bir ihtimal yoksa kod burada sona ermelidir.

Böylece catch bloğu aslında sadece bildiği hataları idare eder ve diğerlerini hiç kontrol etmeden paslar diyebiliriz.

Aşağıdaki örnekte bu hatalar nasıl bir try..catch seviyesi daha eklenerek idare edilebilir bunu göreceğiz: */

function readData() {

    let json3 = '{ "age": 30 }';

    try {
        // ...
        blabla(); // error!

    } catch (e) {
        // ...
        if (e.name != 'SyntaxError') {

            throw e; // tekrar at! Nasıl idare edileceğini bilmiyor.
        }
    }
}

try {

    readData();

} catch (e) {

    console.log("External catch got: " + e); // External catch got: ReferenceError: blabla is not defined
}

/* Burada readData sadece SyntaxError ile nasıl başa çıkacağını biliyor. Bunun yanında dıştaki try..catch ise geri kalan her şeyi idare ediyor. */ // TODO