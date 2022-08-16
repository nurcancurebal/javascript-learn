// Obje tanımında da köşeli parantez kullanabiliriz. Buna Hesaplanmış Özellikler ( Computed Properties ) denir.

let meyve = "elma";

let poset = {

    [meyve]: 5 // meyve değişkeninden objenin anahtarı alınıyor.

};

console.log(poset.elma); // eğer meyve "elma" girildiyse 5 değeri döner.

// Hesaplanmış özelliklerin anlamı basittir: [meyve], özellik isminin meyve değişkeninden alınması gerektiğini bildirir.
// Öyleyse eğer kullanıcı "elma" değerini girerse poset {elma:5} olacaktır.

// Aslında aşağıdaki ile aynı şekilde çalışacaktır:

let meyveTwo = "elma";
let posetTwo = {};

// meyvetwo değişkeninden objenin anahtarı alınıyor.
posetTwo[meyveTwo] = 10;
// …fakat biraz daha iyi görünür.

console.log(posetTwo.elma); // 10


// Köşeli parantez içerisinde daha karmaşık ifadeler de kullanabilirsiniz:

let meyveThree = 'elma';
let posetThree = {

    [meyveThree + 'Yedim']: 15
};

console.log(posetThree.elmaYedim = 15); // 15


// Köşeli parantez nokta yazımına göre çok daha güçlüdür. Her türlü özellik ismini ve değişkeni desteklerler. Fakat yazımı biraz gariptir. Eğer özellik isimleri tek kelime ise çoğunlukla nokta yazımı kullanılır. Eğer daha karmaşık ise bu durumda köşeli parantez kullanılır.