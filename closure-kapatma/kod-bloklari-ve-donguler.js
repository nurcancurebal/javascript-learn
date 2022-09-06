/* -> Kod blokları ve döngüler, IIFE
Yukarıdaki örnekler fonksiyonlara odaklanmıştır. Fakat Sözcüksel Ortam {...} süslü parantez içerisinde de geçerlidir.

Bir kod bloğu çalıştığında oluşturulur ve blok seviyesinde yerel değişkenleri tutar. Aşağıda bir kaç örneği bulunmaktadır.


-> If
Aşağıdaki örnekte işlem blok çalıştığında if bloğunun içine girer, yeni Sözcüksel Ortam “if-only” için yaratılmıştır:

Yeni sözcüksel ortam bilgileri dış çevreden alabilir, bundan dolayı ifade erişilebilirdir. Fakat if içerisindeki tüm değişkenler ve Fonksiyonel ifadeler kendi Sözcüksel Ortamdan erişilebilir, dışarıdan erişilemez.


-> For, while
Her bir döngü kendine ait Sözcüksel Ortama sahiptir. Eğer değişken for içerisinde tanımlanmışsa o sözcüksel ortama yereldir. */

/* for (let i = 0; i < 10; i++) {
     Her döngü kendisine ait sözcüksel ortama sahiptir.
     {i: deger}
}

console.log(i);  */// Hata, böyle bir değişken yoktur.

/* Bu aslında istisnadır, çünkü let i, görünürde {...} dışındadır. Fakat her döngü kendine ait sözcüksel ortamında i'nin o anki değerini içermektedir.

Döngüden sonra i görünmez olur.


-> Kod Blokları
“yalın” kod bloğu {...} ile değişkenler “yerel kapsama” tanımlanabilir.

Örneğin, bir tarayıcıda tüm kodlar evrensel alanları paylaşabilir. Eğer bir kod bloğu içerisinde evrensel alanda bir değişken yaratılırsa, kodun tamamında kullanılabilir. Fakat bu çatışmalara neden olabilir, örneğin aynı değişkenler farklı yerlerde yazılabilirler ve birbirlerinin bilgilerini silebilirler.
Bu değişken isimleri genel kullanılırsa ve kod yazan kişi diğer değişkenin kullanıldığını bilmiyor ise yaşanılacak bir olaydır.
Bunlardan kaçınmak için bir kod bloğu oluşturarak dışarıda bulunan evrensel ortamdan izole edilebilir: */

{
    // yerel değişkenler ile dışarıdaki değişkenlere etki etmeden istenilen şekilde izolasyon yapılabilir.
    let mesaj = "Merhaba";

    console.log(mesaj); // Merhaba
}

// console.log(mesaj); // Hata: mesaj tanımlı değildir.

// Bloğun dışındaki kod içerideki değişkeni göremez. Çünkü bir her kod bloğu kendine ait sözcüksel ortama sahiptir.