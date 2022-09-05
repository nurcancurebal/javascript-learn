/* Fibonacci Sayıları

Fibonacci sayıları’nın akışı şu formüle göredir:F(n-1)+ F(n-2)

0, 1, 0+1=1, 1+1=2, 2+1=3, 3+2=5, 5+3=8, 8+5=13 şeklinde devam eder: 1, 1, 2, 3, 5, 8, 13, 21...

Fibonacci sayıları Altın oran ile ilgilidir ve birçok doğal olay bunun etrafında gerçekleşir.

fib(n) fonksiyonu yazını ve bu fonksiyon n. fibonacci sayisini dönsün.

Örnek:

function fib(n) { kodunuz }

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

Not: Çözüm çok hızlı olmalıdır. fib(77) 1 saniyeden uzun sürmemelidir.

çözüm

İlk olarak özçağrı çözümü denenebilir.

Fibonacci sayıları tanım olarak özçağrıya uygundur: */

function fib(n) {

    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13

// fib(77); // aşırı derecede yavaş olacaktır!

/* … n'in büyük değerleri için oldukça yavaştır. Örneğin fib(77) JavaScript motorunun durmasına bile neden olabilir, tüm CPU kaynağını harcayabilir.

Bunun nedeni fonksiyonun çok fazla alt çağrı yapmasıdır. Aynı değerler defalarca hesaplanır ve hesaplanır.

Örneğin fib(5) şu şekilde hesaplanır: */

/* ...
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
...
Görüldüğü gibi burada fib(3), fib(4) ve fib(5) için gereklidir. Bundan dolayı fib(5) iki defa bir birinden bağımsız olarak çalışacaktır.

Gördüğünüz gibi fib(3) iki defa fib(2) ise üç defa çalıştırılır. Toplamda hesaplama n den daha hızlı bir şekilde büyür. n=77 için bu sayı çok büyük olur.

Bu daha önceden hesaplanmış değerleri hatırlayarak çözülebilir: Eğer fib(3) bir defa hesaplanırsa, bu gelecekteki hesaplamalar için tekrar kullanılabilir.

Diğer bir yöntem ise özçağrıyı hiç kullanmayıp döngü bazlı bir algoritma geliştirmektir.

n'den daha küçüğe giden sayılar yerine 1 den ve 2 den başlayıp bunları fib(3)ün değeri olarak tanımlamak mümkündür. Sonrasında fib(4) bir iki önceki değerin toplamı olur. Bu şekilde gerekli olan n değerine kadar gider. Her bir adımda sadece iki önceki değeri hatırlamak yeterli olacaktır.

Yeni algoritmanın basamakları aşağıdaki gibi olacaktır

Başlangıç: */

// a = fib(1), b = fib(2), bunlar 1'in tanımıdır.
let a = 1, b = 1;

//  c'yi al = fib(3) toplamı
let c = a + b;

/* şimdi fib(1), fib(2), fib(3)'e sahibiz.
a  b  c
1, 1, 2
*/
/* Eğer fib(4) istenirse bu fib(4) = fib(2) + fib(3)'tür.

Değişkenlere kaydırılırsa: a,b , fib(2),fib(3) alacaktır, c ise toplamı olacaktır: */

a = b; // şimdi a = fib(2)
b = c; // şimdi b = fib(3)
c = a + b; // c = fib(4)

/* akış şu şekildedir:
   a  b  c
1, 1, 2, 3
*/
// Bir sonraki adım, sıradaki sayıyı vermektir:

a = b; // şimdi a = fib(3)
b = c; // şimdi b = fib(4)
c = a + b; // c = fib(5)


/* şimdiki akış ( 1 sayı fazla ):
      a  b  c
1, 1, 2, 3, 5
*/
/* … Bu şekilde istenen sayıya kadar devam eder. Özçağrı’dan daha hızlıdır ve aynı işlemi tekrar yapmaz.

Kodun tamamı: */

function fib(n) {

    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {

        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

/* Döngü i=3 ile başlar çünkü birinci ve ikinci değerler a=1 ve b=1 şeklinde elle atanmıştır.

Bu yaklaşıma dinamik alttan yukarı programlama denir. */