/* Verilen değere kadar olan tüm sayıları toplayan fonksiyon

topla(n) fonksiyonu 1+2+....+n şeklinde toplama işlemi yapar.

topla(1) = 1
topla(2) = 2 + 1 = 3
topla(3) = 3 + 2 + 1 = 6
topla(4) = 4 + 3 + 2 + 1 = 10
...
topla(100) = 100 + 99 + ... + 2 + 1 = 5050
3 farklı şekilde yapınız:

Döngü kullanarak
Özçağrı kullanarak, topla(n) = n + topla(n-1) her n > 1 için.
Aritmetik işlem kullanarak
Sonuc:

function topla(n) { ... kodunuz ... }

console.log( topla(100) ); // 5050

Not: Hangi yöntem daha hızlıdır? Hangisi yavaştır? Neden?

Not2: Özçağrı ile topla(100000) çalıştırılabilir mi?

çözüm */

// Döngü kullanarak çözümü:

function topla(n) {

    let toplam = 0;

    for (let i = 1; i <= n; i++) {

        toplam += i;
    }

    return toplam;
}

console.log(topla(100)); // 5050, 2. hızlı

// Özçağrı kullanarak toplama:

function topla(n) {

    if (n == 1) return 1;

    return n + topla(n - 1);
}

console.log(topla(100)); // 5050, en yavaş

// Aritmetik işlemler ile toplama: topla(n) = n*(n+1)/2:

function topla(n) {

    return n * (n + 1) / 2;
}

console.log(topla(100)); // 5050, en hızlı

/* Not: Doğal olarak formül en hızlı olanırıd. n'in her değeri için 3 defa operasyon yapmaktadır.

Döngü hız bakımından ikinci sırada yer alır. Döngüde ve özçağrıda aynı sayılar toplanır. Fakat özçağrı iç içe çağrılar kullanarak çalışıtırma yığını yönetimi gerektirir. Bu da ayrıca bir kaynak demektir, bundan dolayı yavaştır.

Not2: Eğer özçağrının son fonksiyonunda ise ( topla gibi ) dıştaki fonksiyon çalışmayı devam ettirmez ve çalıştırma kaynağının bilinmesine gerek yoktur. Bundan dolayı topla(100000) hesaplanabilirdir. Fakat JavaScript motoru bunu desteklemiyor ise bu durumda maksimum yığın geçildi hatası verecektir. Bunun nedeni yığının belirli bir sınırının olmasıdır. */