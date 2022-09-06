/* -> Garbage Koleksiyonu
Sözcüksel Ortam objeleri aynı normal değerler gibi hafıza yönetimine konu olurlar.

Genelde, Sözcüksel Ortam fonksiyon çalıştıktan sonra temizlenir. Örneğin: */

function f1() {

    let deger1 = 123;
    let deger2 = 456;
}

f1();

/* Buradaki iki değer teknik olarak Sözcük Ortamının özellikleridir. Fakat f1() bittikten sonra bu Sözcük Ortamı erişilemez hale gelir, bundan dolayı hafızadan silinir.

… Fakat f den sonra hala iç içe fonksiyon var ise [[Environment]] dıştaki sözcük ortamını canlı tutar: */

function f2() {

    let deger = 123;

    function g2() { console.log(deger); }

    return g2;
}

let g2 = f2(); // g2 ulaşılabilir ise, dıştaki sözcük ortamı canlı kalır.

console.log(g2); // [Function: g2]

/* Eğer f() birçok defa çağırılırsa ve sonuçları kaydedilirse bu kaydedilen Sözcüksel Ortam objeleri de hafızada kalır. Aşağıdaki 3 farklı kodda daha açık bir şekilde gösterilmiştir. */

function f3() {

    let deger = Math.random();

    return function () { console.log(deger); };
}

// Dizideki 3 fonksiyon da kendine ait sözcüksel ortama sahiptirler.

let arr3 = [f3(), f3(), f3()];

console.log(arr3); // [[f], [f], [f]]

/* Sözcüksel Ortam objesi erişim olmayınca ölür. Bu iç içe fonksiyonların referansı kalmadığında meydana gelir. Aşağıdaki kodda g erişilemez olduğunda value'da hafızadan silinir. */

function f4() {

    let value = 123;

    function g4() { console.log(value); }

    return g4;
}

let g4 = f4(); // g4 canlı olursa ona karşılık gelen Sözcüksel Ortam'da hayatta kalır.

g4 = null; // şimdi hafıza temizlendi.

console.log(g4); // null

console.log(f4()); // [f: g4]


/* -> Gerçek-Hayat Optimizasyonu
Görüldüğü üzere, teoride bir fonksiyon hayatta olduğun sürece onun dışındaki ona bağlı değişkenler de hayatta kalır.

Pratikte ise, JavaScript motoru bunu optimize eder. Değişken kullanımını analiz eder ve eğer dışarıdaki fonksiyonun kullanılmadığı açık ise silinir.

Bunun V8 ( Chrome, Opera)'daki yan etkisi ise böyle değişkenlerin debugging sırasında da görünememesidir.

Aşağıdaki örneğin Chrome’da konsolu açarak test ediniz.

Durduğunda konsolda console.log(deger) komutunu yazınız. */

function f5() {

    let deger = Math.random();

    function g5() {

        debugger; // konsolda: console.log(deger) yazdırın; Böyle bir değişken bulunamamktadır.
    }

    return g5;
}

let g5 = f5();

g5();

/* Gördüğünüz gibi böyle bir değişken bulunamamaktadır. Teoride, erişilebilir olmalıdır fakat JavaScript motoru bunu optimize etmiştir.

Bu komik debug problemlerine neden olabilir. Bunlardan biri – beklenenin aksine aynı isme sahip dış değişkenin görülmesi: */

let deger6 = "Sürpriz!";

function f6() {

    let deger6 = "En yakın değer";

    function g6() {

        debugger; // in console: type console.log( deger6 ); Surprise!
    }

    return g6;
}

let g6 = f6();

g6();

/* V8’in bu özelliğini bilmekte fayda var. Eğer Chrome/Opera ile debugging yapıyorsanız, er ya da geç bu özellikle tanışacaksınız.

Bu bir debugger problemi değil, V8 motorunun bir özelliğidir. Belki ileride bu özellik değişebilir. Bu sayfayadaki örneği çalıştırarak her zaman bunu kontrol edebilirsiniz. */