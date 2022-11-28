/* -> Symbol.iterator'ı jeneratöre dönüştürme
Bir jeneratör sağlayarak her iki dünyadan da en iyisini elde edebiliriz Symbol.iterator: */

let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() { //[Symbol.iterator] için bir kısaltma: function*()

        for (let value = this.from; value <= this.to; value++) {

            yield value;
        }
    }
};

console.log([...range]); // [ 1, 2, 3, 4, 5 ]

/* Nesne range artık yinelenebilir.

Bu oldukça iyi çalışıyor, çünkü ne zaman range[Symbol.iterator] çağrıldığında:

. bir nesne döndürür (şimdi bir jeneratör)
. yöntemi var .next()(evet, bir jeneratör var)
. bu, formdaki değerleri döndürür {value: ..., done: true/false}(jeneratörün tam olarak ne yaptığını kontrol edin).

Bu bir tesadüf değil elbette. Jeneratörler yinelenebilirleri kolaylaştırmayı amaçlar, böylece bunu görebiliriz.

Jeneratörlü son değişken, orijinal yinelenebilir koddan çok daha özlüdür ve aynı işlevselliği korur. */


/* -> Jeneratörler sonsuza kadar devam edebilir
Yukarıdaki örneklerde sonlu diziler oluşturduk, ancak değerleri sonsuza kadar veren bir üreteç de yapabiliriz. Örneğin, bitmeyen bir sözde rasgele sayılar dizisi.

Bu kesinlikle bir break in gerektirir for..of, aksi takdirde döngü sonsuza kadar tekrar eder ve askıda kalır. */