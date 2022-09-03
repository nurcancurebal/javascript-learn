/* -> Çalıştırma Yığını
Peki özçağrılar nasıl çalışır. Bunun için fonksiyonların içinde ne yaptıklarına bakmak gerekmektedir.

Çalışan fonksiyon hakkında bilgi çalıştırma kaynağında tutulur.

Çalıştırma Kaynağı – Execution Context fonksiyonun çalışması hakkında detayları tutan dahili bir veri yapısıdır: Kontrol akışı nerede, o anki değişkenlerin değeri, this neye denk gelir ve bunun gibi detaylar dahili detaylar tutar.

Her fonksiyon çağrısı kendine ait çalıştırma kaynağı tutar.

Eğer bir fonksiyon içeride başka bir çağrı yaparsa şunlar olur:

. O anki fonksiyon durur.
. Bu fonksiyon ile ilintili çalışma kaynağı çalışma kaynağı yığını veri yapısı şeklinde kaydedilir.
. Dallanılan çağrı çalıştırılır.
. Bu işlem bittikten sonra çalışma kaynağı yığınından daha önceki çalışmakta olan yer geri alınır, böylece fonksiyon kaldığı yerden görevini tamamlayabilir.

Aşağıda us(2,3)'ün çalışması gösterilmiştir.


-> us(2, 3)
us(2,3) çağrısının başlangıcında, çalışma kaynağı değişkenleri x=2,n=3 olacak şekilde tutar. Çalışma şu anda birinci satırdadır.

Bu aşağıdaki gibi gösterilebilir:

~ Çalışma kaynağı: { x: 2, n: 3, birinci satırda } us(2, 3)

Ardından fonksiyon çalışmaya başlar. n==1 şartı yanlıştır, bundan dolayı ikinci if'e geçer. */

function us(x, n) { // 1.satır

    if (n == 1) {

        return x;

    } else {

        return x * us(x, n - 1); // 5.satır
    }
}

console.log(us(2, 3)); // 8

/* Değişkenler aynı fakat satır değiştir, şimdiki kaynak şu şekilde:

~ Kaynak: { x: 2, n: 3, 5. satırda } us(2, 3)

x*us(x, n-1)'i hesaplayabilmek için us fonksiyonuna us(2,2) şeklinde yeni bir çağrı yapılmalıdır. */


/* -> us(2, 2)
Dallanma işleminin yapılabilmesi için JavaScript’in öncelikle o anki çalışma durumunu çalışma kaynağı yığınına atması gerekmektedir.

Burada us fonksiyonu çağrılmıştır. Bu herhangi bir fonksiyon da olabilirdi, aralarında bu yönden hiçbir farklılık bulunmamaktadır:

1. O anki kaynak yığının en üstüne “hatırlatılır”
2. Alt çağrı için yeni bir kaynak yaratılır.
3. Alt çağrılar bittiğinde – bir önceki kaynak yığından alınır ve çalışmasına devam eder.

Aşağıda us(2,2) altçağrısına girildiğinde kaynak yığınının durumu gösterilmektedir.

~ Kaynak: { x: 2, n: 2, 1. satırda } us(2, 2)
~ Kaynak: { x: 2, n: 3, 5. satırda } us(2, 3)

Üst tarafta o anda çalışan kaynak ( kalın harflerle ), alt tarafta ise “hatırlatılan” kaynak bulunmaktadır.

Altçağrı bittiğinde, daha önceki kalınan kaynaktan devam etmek kolaydır. Çünkü bu her iki değişkeni ve kaldığı satırı tutmaktadır. Burada “satır” denmesine rağmen aslında bunun daha net bir şey olduğu bilinmelidir. */


/* -> us(2, 1)
İşlem tekrar ediyor: 5. satırda yeni bir altçağrı yapılmaktadır, argümanlar ise x=2, n=1 şeklindedir.

Yeni çalışma yığını oluşturur, bir önceki yığının üstüne itelenir. A new execution context is created, the previous one is pushed on top of the stack:

~ Kaynak: { x: 2, n: 1, 1. satır } us(2, 1)
~ Kaynak: { x: 2, n: 2, 5. satır } us(2, 2)
~ Kaynak: { x: 2, n: 3, 5.satır } us(2, 3)

Şu anda 2 eski kaynak ve 1 tane çalışmakta olan kaynak bulunmaktadır us(2,1) */


/* -> Çıkış
us(2,1) çalışırken diğerlerinin aksine n==1 şartı sağlanır, bundan dolayı ilk defa birinci if çalışır. */

function us(x, n) {

    if (n == 1) {

        return x;

    } else {

        return x * us(x, n - 1);
    }
}

/* Daha fazla dallanan çağrı olmadığından dolayı fonksiyon sona erer ve değeri döner.

Fonksiyon bittiğinden dolayı, çalışma kaynağına gerek kalmamıştır ve dolayısıyla hafızadan silinir. Bir önceki yığından alınır:

~ Kaynak: { x: 2, n: 2, 5. satırda } us(2, 2)
~ Kaynak: { x: 2, n: 3, 5. satırda } us(2, 3)

us(2,2) nin çalışması devam etti. us(2,1)'in sonucuna sahip olduğundan x * us(x,n-1)'in sonucunu bulabilir, bu da 4'tür.

Ardından bir önceki kaynak geri yüklenir:

~ Kaynak: { x: 2, n: 3, 5. satırda } us(2, 3)

İşlemler bittiğinde, us(2,3) = 8 sonucu alınır.

Bu durumda özçağrı derinliği 3tür

Yukarıda da görüldüğü üzere, özçağrı derinliği yığındaki kaynak sayısı demektir. Bu drumda n'in üssü değiştirildiğinde daha fazla hafıza kullanacaktır.

Döngü bazlı algoritma daha az hafıza kullanacaktır: */

function us(x, n) {

    let sonuc = 1;

    for (let i = 0; i < n; i++) {

        sonuc *= x;
    }

    return sonuc;
}

/* Tekrar eden us fonksiyonu i ve sonuc kaynağını kullanır ve sürekli bunları değiştirir. Hafıza gereksinimleri oldukça azdır ve bu hafıza büyüklüğü n'e bağlı değildir.

* Tüm özçağrılar döngü olarak yazılabilir. Döngü versiyonu daha az kaynak gerektirecektir

… Bazen yeniden yazmak çok kolay değildir, özellikle fonksiyon alt çağrılarda özçağrı kullanıyorsa, bu çağrılar sonucunda daha karmaşık dallanmalar oluyor ise optimizasyon değmeyebilir.

Özçağrı fonksiyonun daha kısa kod ile yazılmasını sağlar, ayrıca anlaşılmayı da kolaylaştırır. Optimizasyon her yerde gerekli değildir, genelde iyi kod gereklidir, bunun için kullanılır. */