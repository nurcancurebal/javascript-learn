/* -> İleri Tımarlama Uygulamaları
Bu konuyu daha “derinlemesine” incelemek istiyorsanız aşağıda daha önceki yazdığımız kodun gelişmiş vesiyonunu bulabilirsiniz. */

function curry(func) {

    return function curried(...args) {

        if (args.length >= func.length) {

            return func.apply(this, args);

        } else {

            return function (...args2) {

                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function sum(a, b, c) {

    return a + b + c;
}

let curriedSum = curry(sum);

// normal şekilde çağırılabilir.
console.log(curriedSum(1, 2, 3)); // 6

// önce curried(1) ile kısmı fonksiyon alınır sonra diğer iki argüman ile çağırılır.
console.log(curriedSum(1)(2, 3)); // 6

// tamamı tımarlanmış hali.
console.log(curriedSum(1)(2)(3)); // 6

/* Yeni yazdığımız tımar fonksiyonu karmaşık görünebilir, fakat aslında anlaması oldukça kolay.

curr(func)'ın sonucu curried'ın saklayıcısıdır ve aşağıdaki gibi görünür: */

// func dönüştürülecek fonksiyondur.
function curried(...args) {

    if (args.length >= func.length) { // (1)

        return func.apply(this, args);

    } else {

        return function pass(...args2) { // (2)

            return curried.apply(this, args.concat(args2));
        }
    }
};

/* İki farklı şekilde çalışabilir:

1. Anlık çağrı: Eğer args sayısı orjinal fonksiyon tanımıyla aynıysa ( func.length ) veya uzunsa, sadece çağrıyı ilet.
2. Kısmi al: Diğer türlü, func henüz çağırılmamış olur. Bunun yerine pass döner. Bu tekrar bir önceki argümanları yeni fonksiyona iletirek tımarlama yapar. Yeni bir çağrıda yeniden (yeteri kadar argüman yoksa ) kısmı fonksiyon alır veya ( argüman tam ise ) sonucu alır.

sum(a, b, c) şeklinde üç argümanlı bir çağrı durumunda nasıl çalışacağına bakalım:

curried(1)(2)(3) çağrısı için:

1. İlk curried(1) çağrısı 1'i kendi sözcük çevresinde hatırlar ve pass adında bir saklayıcı döner.

2. pass saklayıcısı (2) ile çağırılır: bir önceki argüman ( 1)'i alır ve (2) ile birleştirir. Böylece çağrı curred(1,2) şeklini alır.

Argüman sayısı hala 3’den az olduğundan curry yine pass döndürür.

3. pass bu defa (3) ile tekrar çağırılır, bir sonraki çağrıda pass(3) bir önceki argümanları (1,2) alır ve bunlara 3 ekler. Böylece çağrı curried(1, 2, 3) şeklini alır. En sonunda 3 tane değişken oldu ve artık bu değerler orjinal fonksiyona gönderilir.

Eğer hala açık değil ise çağrıları bir kağıt üzerinde veya kafanızda sıralı şekilde takip edin. */


/* -> Sadece belirli uzunluktaki fonksiyonlar
Tımarlama için fonksiyonların belirli bir sayıda argümanı olması gerekir. */


/* -> Tımarlamanın biraz ötesi
Tanım olarak tımarlama sum(a, b, c) yi sum(a)(b)(c) şekline sokmalıdır.

Fakat tımarlamanın çoğu uygulaması daha önce anlatıldığı gibi ileri seviyedir: Fonksiyonların birkaç farklı argüman çeşidi ile çağırılabilir olması. */