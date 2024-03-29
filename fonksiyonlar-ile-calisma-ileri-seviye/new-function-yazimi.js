/* -> "new Function" yazımı
Çok az kullanılsa da bazen alternatifsizdirler. */

/* -> Yazım
Fonksiyon yaratmak için: */

let func1 = new Function('a', 'b', 'return a + b');

// new Function'ın tüm argümanları karakter dizisidir. Önce parametreler, en son olarak çalışacak kodun içeriği yazılır.

let sum = new Function('arg1', 'arg2', 'return arg1 + arg2');

console.log(sum(1, 2)); // 3

// Eğer argüman yok ise, sadece gövde ile fonksiyon yaratılır:

let selamVer = new Function('console.log("Selam")');

selamVer(); // Selam

/* Diğer yöntemlere göre en büyük farklılık – fonksiyon gerçektende sadece karakter dizisinden oluşuyor, bu çalışma anında gerçekleşiyor.

Diğer tüm tanımlamalar programcıların kod yazmasını gerektirir.

! Fakat new Function herhangi bir metini fonksiyona çevirebilir. Örneğin sunucudan metin olarak bir fonksiyon alıp bunu çalıştırmak mümkündür. */

let str = 'serverdan_dinamik_olarak_gelen_metin';

let func2 = new Function(console.log(str));

func2();
// aşağıdakiler yaratılır
// (function anonymous() { undefined })
// length: 0 (yani argüman yok demek)
// name: 'anonymouns'

/* Tabi bunlar çok özel haller, örneğin sunucudan bir metini alıp çalıştırmak, veya temadan dinamik olarak derleme. Bunun gibi ihtiyaçlar genelde geliştirmenin ileriki safhalarında karşılaşılır. */


/* -> Closure
Fonksiyon genelde doğduğu yeri hatırlar [[Ortam]]. Bulunduğu Sözcüksel Ortama yaratıldığı yerden referans verir.

Bir fonksiyon new Function ile yaratıldığında [[Ortam]] referansı o anki bulunduğu ortamı değil de evrensel ortama referans verir. */

function FonkAl() {

    let deger = "test";

    let func = new Function('console.log(deger)');

    return func;
}

FonkAl()(); // hata: deger tanımlı değildir.

// Normal davranış şu şekildedir:

function FonkAl() {

    let deger = "test";

    let func = function () { console.log(deger); };

    return func;
}

FonkAl()(); // test, test  --> "test", FonkAl'ın sözcüksel ortamından.

/* new Function özelliği biraz garip dursa da çok kullanışlı ve pratiktir.

Düşününkü gerçekten de karakter dizisinden fonksiyon yaratmanız gerekti. O fonksiyonun ne olduğu hangi kodları kapsadığı baştan belli olmayacaktı ( bundan dolayı normal fonksiyonlar kullanılamaz ), fakat çalışma anında fonksiyon yaratılacak.

Yeni fonksiyon ana kod akışı ile etkileşime geçme ihtiyacında olabilir.

Belki dışta bulunan yerel değişkene erişmek gerekmektedir.

Fakat burada şöyle bir problem var. JavaScript canlı ortama çıkmadan sıkıştırıcı (minifier) kullanılır ve böylece gereksiz boşluklar vs kaldırılır. Fakat daha da önemlisi, yerel değişkenler kısaltılarak işlenir.

Örneğin bir fonksiyon let kullaniciAdi diye bir fonksiyona sahip olsa, sıkıştırıcı bunu let k şeklinde veya bu değişken daha önce kullanılmışsa başka küçük bir değişken ile tutar. Bu aslında mantıklı olandır. Değişken zaten yerel bir değişkendir ve dışarıdan buna erişilemez. Bundan dolayı fonksiyonun içerisinde kullanılan her kullaniciAdi yeni değişken ismiyle değiştirilir. Sıkıştırıcılar kodu ve kod yapısını analiz ederler sadece bul ve değiştir işlemi yapmazlar.

Fakat new Function dıştaki değişkenlere erişebilir olsa isi bu defa kullaniciAdi'nı bulamazdı.

Dış fonksiyonlara erişilme mümkün olsa bile new Function sıkıştırıcılar ile problem yaşardı

new Function'ın bir özelliği bizi hata yapmaktan kurtarır ve daha iyi kod yazmamıza yardımcı olur.

Eğer new Function ile yazılmış bir fonksiyona argüman göndermek istiyorsanız, bunu argümanları birer birer belirterek yapmanız gerekmektedir.

“topla” fonksiyonu aslında bunu doğru bir şekilde yapmaktadır: */

let topla = new Function('a', 'b', ' return a + b; ');

let a = 1, b = 2;

// Dış değerler argüman olarak gönderilmiştir.
console.log(topla(a, b)); // 3