/* Sayaç ayarlama ve azaltma

sayacUret() kodunu değiştirerek sayacın azaltılabilir ve ayarlanabilir olmasını sağlayınız:

sayac() bir sonraki sayıyı döndürmelidir(eskisinde olduğu gibi)
sayac.set(deger) sayac degerini degere eşlemelidir.
sayac.azalt(deger) sayac degerini bir azaltmalıdır.
İzole edilmiş koda bakarak tamamen nasıl kullanıldığını görebilirsiniz

Not: Closure veya fonksiyon özelliği kullanabilirsiniz. Her iki şekilde yazsanız daha iyi olur tabi.

Çözüm sayac yerel değişkenini kullanmaktadır, buna ek olarak metodlar doğrudan sayac'in icerisine yazılmıştır. Aynı dış ortamı paylaştıklarından dolayı var olan sayac değişkenine erişebilirler. */

function sayacUret() {

    let sayac = 0;

    function sayac() {

        return sayac++;
    }

    sayac.set = deger => sayac = deger;

    sayac.azalt = () => sayac--;

    return sayac;
}

console.log(sayacUret()); // TODO hata verdi çalışmadı?