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