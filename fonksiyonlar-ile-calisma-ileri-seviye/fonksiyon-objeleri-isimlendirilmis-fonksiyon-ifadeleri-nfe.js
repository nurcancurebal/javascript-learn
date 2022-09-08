/* -> İsimlendirilmiş Fonksiyon İfadeleri ( Named Function Expression – NFE )
İsimlendirilmiş fonksiyon ifadeleri , NFE, daha önce kullandığımız Fonksiyon İfadelerinin isimlendirilmiş halidir.

Örneğin, sıradan bir Fonksiyon İfadesi incelenecek olursa: */

let selamVer1 = function (kim) {

    console.log(`Selam, ${kim}`);
};

// … isimlendirilirse:

let selamVer2 = function func(kim) {

    console.log(`Merhaba, ${kim}`);
};

selamVer2("Erdinç"); // Selam, Erdinç

/* Ayrıca bir "func" eklemenin ne anlamı var?

Hala bir Fonksiyon İfadeniz var. Fonksiyon ifadesine "function" 'dan sonra "func" eklemek bu fonksiyonu Fonksiyon Tanımı haline getirmez çünkü hala bir atama operasyonu ile tanımlanmıştır.

Böyle bir isim eklemek hiçbir soruna neden olmaz.

Fonksiyon hala selamVer() şeklinde kullanılabilir: */

/* func ismine ait iki tane özellik vardır:

1. Bu şekilde fonksiyonun kendisine içerisinden referans vermek mümkündür.
2. Fonksiyonun dışından erişilemez.

Örneğin, selamVer4 fonksiyonu eğer bir parametre olmadan çağırılırsa kendisini "Misafir" ile tekrardan çağırabilir. */

let selamVer4 = function func(kim) {

    if (kim) {

        console.log(`Selam, ${kim}`);

    } else {

        func("Misafir"); // kendisni yeniden çağırabilir.
    }
};

selamVer4(); // Selam, Misafir

// Fakat aşağıdaki çalışmayacaktır:
func(); // func tanımlı değildir. ( Fonksiyonun dışından erişilemez.)

/* Peki neden func kullanıyoruz? Sadece selamVer kullansak olmaz mı?

Aslında çoğu durumda olur: */

let selamVer5 = function (kim) {

    if (kim) {

        console.log(`Selam, ${kim}`);

    } else {

        selamVer5("Misafir");
    }
};

// Buradaki problem selamVer'in değeri değişebilir. Fonksiyon diğer bir değişkene gidebilir ardından hatalar vermeye başlar.

let selamVer6 = function (kim) {

    if (kim) {

        console.log(`Selam, ${kim}`);

    } else {

        selamVer6("Misafir");
    }
};

let hosGeldin6 = selamVer6;

selamVer6 = null;

hosGeldin6(); //Artık selamVer6 çağırılamaz.

/* Bunun olmasının nedeni fonksiyonun selamVer'i dış ortamdan alıyor olmasıdır. Yerel bir selamVer bulunmadığından dıştaki değişken kullanılmaktadır. O anda da dışta bulunan selamVer6 null'dur.

Opsiyonel olarak konulan isim tam olarak Fonksiyon İfadesinin bu problemini çözer.

Bunu kullanarak kod şu şekilde düzeltilebilir: */

let selamVer7 = function func(kim) {

    if (kim) {

        console.log(`Selam, ${kim}`);

    } else {

        func("Misafir"); // Şimdi hepsi doğru şekilde çalışır.
    }
};

let hosGeldin7 = selamVer7;

selamVer7 = null;

hosGeldin7(); // Selam, Misafir (iç çağrı çalışır)

/* Şimdi çalışır, bunun nedeni "func"'in lokal fonksiyon olmasındandır. Dışarıdan alınmaz ( dışarıdan görünmez de ). Bu şekilde yazıldığında var olan fonksiyonu referans vereceği garantidir.

Dışta bulunan kod hala selamVer7 veya hosGeldin7 değişkenlerine sahiptir. Dıştaki değişkenlere bir şey olsa bile func“iç fonksiyon ismi”'dir. Kendisini gizli biçimde çağırabilir. */


/* -> Fonksiyon Tanımı diye bir şey yoktur.
“içsel isim” olarak tanımlanan özellik sadece Fonksiyon İfadeleri için geçerlidir. Fonksiyon Tanımlarında çalışmaz. Fonksiyon tanımları için “içsel” bir isim ekleme yöntemi yoktur.

Bazen güvenli bir isme ihtiyaç duyulduğunda Fonksiyon Tanımı tekrardan İsimlendirilmiş Fonksiyon İfadesi şekline getirilir. */