/* Sayaç ayarlama ve azaltma

sayacUret() kodunu değiştirerek sayacın azaltılabilir ve ayarlanabilir olmasını sağlayınız:

sayac() bir sonraki sayıyı döndürmelidir(eskisinde olduğu gibi)
sayac.set(deger) sayac degerini degere eşlemelidir.
sayac.azalt(deger) sayac degerini bir azaltmalıdır.
İzole edilmiş koda bakarak tamamen nasıl kullanıldığını görebilirsiniz

Not: Closure veya fonksiyon özelliği kullanabilirsiniz. Her iki şekilde yazsanız daha iyi olur tabi.

Çözüm: sayac yerel değişkenini kullanmaktadır, buna ek olarak metodlar doğrudan sayac'in icerisine yazılmıştır. Aynı dış ortamı paylaştıklarından dolayı var olan sayac değişkenine erişebilirler. */

// Closure 

/* function sayacUret() {

    let say = 0;

    function sayac() {
        return say;
    }

    sayac.set = deger => say = deger;

    sayac.azalt = () => --say;
    sayac.artir = () => ++say;

    return sayac;
}

const closureWay = sayacUret();

closureWay.set(5)

console.log(closureWay()); // 5

closureWay.azalt()

console.log(closureWay()); // 4

for (let index = 0; index < 3; index++) {

    closureWay.azalt();
}

console.log(closureWay()); // 1 */


// fonksiyon özelliği

function toplam() {

    // let counter = 0;
    // return counter; bu şekilde olmadı çünkü diğer fonksiyonlar fonksiyonun içindeki değişkene erişemezler

    return toplam.counter; // TODO burada return counter neden çalışmıyor?
}

function artirici() {
    toplam.counter++;
}

function azaltici() {
    toplam.counter--;
}

toplam.counter = 0; // TODO bu fonksiyonun içerisine counter: 0 ekle demek değil mi?

artirici();
artirici();
artirici();

azaltici();
azaltici();

console.log(toplam()); // 1