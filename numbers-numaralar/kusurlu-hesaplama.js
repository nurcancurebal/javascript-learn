/* Küsürlü hesaplama
JavaScript sayıları IEEE-754 ifade edilir, bunlardan 52’si basamakları tutar. 11 tanesi ise ondalık bölümleri tutar ( tam
sayılar için bu 11 bit sıfır olur) ve 1 bit işareti tutar.

Eğer sayı çok büyükse 64 bit alanın dışına çıkabilir bu da sonsuz döndürür. */

console.log(1e500); // Infinity, Sonsuz

/* Çok ta açık olmamakla birlikte çoğunlukla ola gelen bir problem ise küsür kaybıdır.
Aşağıdaki olayı test edin: */

console.log(0.1 + 0.2 == 0.3); // false

/* Doğru eğer 0.1 ile 0.2'nin toplamının 0.3 olduğunu sanıyorsanız yanılıyorsunuz.
Peki 0.3 değilse ne o zaman ? */

console.log(0.1 + 0.2); // 0.30000000000000004

/* Yok artık! Burada yanlış karşılaştırmanın sonuçlarını gördünüz. Düşünün bir e-ticaret sitesi yapıyorsunuz. Kullanıcı 
0.10₺ ve 0.20₺ lik iki tane çiklet ekledi sepetine. Sonuçta toplam $0.30000000000000004 oldu. Sitenize gelen kişinin kafası
karışacaktır.
Peki neden böyle bir şey oluyor?
Sayı hafızada binary formatta tutulur. Fakat ondalık bölümleri 0.1, 0.2 gibi desimal sistemde çok basit gibi duran sayılar
aslında bitmez bir binary forma sahiptir.
0.1 nedir? 1 in 10 bölümünden elde edilir. Onluk sistemde kolayca gösterilir. Fakat ondalık sistemde 1/3 sonsuza kadar
0.3333(3) şeklinde devam eder.
Öyleyse 10'a bölüm onluk sayılarda sorun yaratmazken 3'e bölüm sorun yaratmaktadır. Aynı neden dolayı, bu defa binary
sistem , aynı şekilde sonsuza kadar gider, 2'nin katları ile bölüm tam sonuç verecektir. Fakat 1/10 sonsuza kadar giden bir
binary değer verir.
Aslında 0.1 veya 0.2 tam olarak saklanamaz, tıpkı 1/3'ün tam olarak saklanamaması gibi.
IEEE-754 bunu en yakın değere yuvarlayarak çözmektedir. Bu kurallar bizim “küçük küsürleri” görmemizi engeller. */

console.log(0.1.toFixed(20)); // 0.10000000000000000555

// Toplandığında ise “küsür kayıpları” üst üste eklenir. Bundan dolayı 0.1 + 0.2 0.3 etmez.


/* -> Sadece JavaScript bu sorundan muzdarip değildir
Bu problemler diğer programlama dillerinde de mevcuttur.
PHP, Java, C, Perl, Ruby gibi diller de aslında aynı değeri verir. Çalıştıkları sistem aynı şekilde binary(ikili)
sistemdir. */

/* Bu problemden nasıl kurtulunur? Tabi bunun için bir kaç yöntem mevcuttur:

1. toFixed(n) metodu yardımı ile yuvarlayabilirsiniz: */

let toplam1 = 0.1 + 0.2;

console.log(toplam1.toFixed(2)); // 0.30

/* Unutmayın toFixed her zaman karakter dizisi döndürür. .'dan sonra 2 basamak alır. Eğer e-ticaret sistemi üzerinde
çalışıyorsanız bu gerçekten kullanışlıdır çünkü sonuç 0.30 olmalıdır. Diğer hallerde önüne + koyarak bunu sayıya
çevirebilirsiniz: */

let toplam2 = 0.1 + 0.2;

console.log(+toplam2.toFixed(2)); // 0.3

// 2. Geçici olarak sayılar tam sayıya çevrilip sonradan geri döndürülebilir. Aşağıdaki gibi çalışır:

console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

/* Aşağıdaki gibi çalışır 0.1 * 10 = 1 ve 0.2 * 10 = 2 sonrasında iki tam sayı hiçbir ondalık bölüm olmadan toplanır böylece
küsürat kaybı ortadan kalkar.
Eğer e-ticaret sitesi üzerinde çalışıyorsanız. En radikal çözüm tüm küsüratları kuruş olarak kaydedip hiç küsürat
kullanmamak olabilir. Fakat ya %30 indirip yapmak isterseniz? Pratikte bu kullanım çok nadirdir. Bundan dolayı yukarıdaki
iki şekilde problem çözülebilir. */


/* -> Tuhaf tarafı
Aşağıdaki kodu çalıştırın: */

// Merhaba ben kendi kendine artan sayıyım.!
console.log(9999999999999999); // 10000000000000000

/* Bu da küsürat kaybından meydana gelir. Bir sayıda 64 bit bulunmaktadır. 52 tanesi basamak tutmaktadır. Fakat bu durumda bu
basamak yeterli değildir. Bundan dolayı en etkisiz basamak kaybolur.
JavaScript böyle bir durumda hata vermez. Belirli formata göre en iyi şekilde sayıyı yerleştirmeye çalışır. Fakat bu format
yeterli büyüklükte değil. */


/* -> Sıfırlar
Diğer bir komik olay ise 0 ve -0'ın varlığıdır.
İşaret bir bit ile tutulduğundan dolayı tüm sayıların - ve + lı değerleri bulunmaktadır.
Çoğu durumda bu ayrım soruna anlaşılamaz. Çünkü operatörler ikisine de aynı şekilde davranır. */