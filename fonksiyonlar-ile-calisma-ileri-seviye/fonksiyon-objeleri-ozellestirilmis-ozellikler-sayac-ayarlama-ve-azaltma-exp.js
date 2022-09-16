/* Sayaç ayarlama ve azaltma

sayacUret() kodunu değiştirerek sayacın azaltılabilir ve ayarlanabilir olmasını sağlayınız:

sayac() bir sonraki sayıyı döndürmelidir(eskisinde olduğu gibi)
sayac.set(deger) sayac degerini degere eşlemelidir.
sayac.azalt(deger) sayac degerini bir azaltmalıdır.
İzole edilmiş koda bakarak tamamen nasıl kullanıldığını görebilirsiniz

Not: Closure veya fonksiyon özelliği kullanabilirsiniz. Her iki şekilde yazsanız daha iyi olur tabi.

Çözüm: sayac yerel değişkenini kullanmaktadır, buna ek olarak metodlar doğrudan sayac'in icerisine yazılmıştır. Aynı dış ortamı paylaştıklarından dolayı var olan sayac değişkenine erişebilirler. */

// Closure 

function sayacUret() {

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

console.log(closureWay());

closureWay.azalt()

console.log(closureWay());

for (let index = 0; index < 3; index++) {
    closureWay.azalt();
}

console.log(closureWay());


function toplam() {
    return toplam.counter
}

function artirici() {
    toplam.counter++
}

function azaltici() {
    toplam.counter--
}

toplam.counter = 0;

artirici()
artirici()
artirici()
artirici()
artirici()
artirici()

azaltici()
azaltici()

console.log(toplam());


// TODO çalış