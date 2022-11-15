// Biz insanlar, belirli bir zamanda bir faaliyette bulunma sözü veririz veya alırız. Sözümüzü tutarsak başkalarını mutlu
// ederiz ama sözümüzü tutmazsak bu durum hoşnutsuzluklara yol açabilir. JavaScript'te söz vermenin yukarıdaki örneklerle
// ortak bir yanı vardır.

// Bir Söz, JavaScript'te eşzamansız işlemleri işlemenin bir yoludur. Eşzamansız bir eylemin nihai başarı değeri veya
// başarısızlık nedeni ile işleyicilere izin verir. Bu, eşzamansız yöntemlerin eşzamanlı yöntemler gibi değerler
// döndürmesine izin verir: eşzamansız yöntem, nihai değeri hemen döndürmek yerine, değeri gelecekte bir noktada sağlama
// sözü verir.

// Bir Söz(promise) şu durumlardan birindedir:
// -> beklemede(pending): ilk durum, ne yerine getirildi ne de reddedildi.
// -> tamamlandı(fulfilled): işlemin başarıyla tamamlandığı anlamına gelir.
// -> reddedildi(rejected): işlemin başarısız olduğu anlamına gelir.

// Bekleyen bir söz ya bir değerle yerine getirilebilir ya da bir sebeple (hata) reddedilebilir. Bu seçeneklerden herhangi
// biri gerçekleştiğinde, bir sözün o zaman yöntemiyle sıraya alınan ilişkili işleyiciler çağrılır. (Karşılık gelen bir
// işleyici eklendiğinde söz zaten yerine getirilmiş veya reddedilmişse, işleyici çağrılır, bu nedenle eşzamansız bir
// işlemin tamamlanması ile işleyicilerinin eklenmesi arasında bir yarış koşulu yoktur.)

// Promise.prototype.then() ve Promise.prototype.catch() yöntemleri vaatleri döndürdüğü(geri verdiği) için zincirlenebilirler.


// async fonksiyonlarda await kullanılır

main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        setTimeout(() => {

            resolve(15);   // resolve bekletme sonucunda 15 vermiş, await' i b ye atadığımız için b' ye 15 verdi

        }, 2000);
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// PROMISE BASLANGIC
// burada 2 sn bekler
// PROMISE BITIS
// 45