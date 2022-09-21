/* -> `dictionary` objesine toString'i ekleyin

Object.create(null) olarak yaratılan ve her türlü anahtar/değer ikilisini tutan dictionary adında bir obje bulunmaktadır.

Buna dictionary.toString() metodu ekleyin, bu anahtarların virgül ile ayrılmış halini dönsün. Ama toString metodu for..in ile objenin keylerini dönerken görünmemelidir.

Şu şekilde çalışmalıdır: */

let dictionary1 = Object.create(null);

//  dictionary1.toString metodunu ekleyeceğiniz yer

// biraz veri ekleyin
dictionary1.apple = "Apple";
dictionary1.__proto__ = "test"; // __proto__ burada normal özellik olarak kullanılmıştır

// sadece apple ve __proto__ yazmalı
for (let key in dictionary1) {

    console.log(key); // apple, sonra __proto__
}

// Artık sizin yazacağınız toString metodu burada çalışmalıdır.
console.log(dictionary1); // apple,__proto__ olmalı

// çözüm
/* Metod tüm dönülebilir anahtarlını Object.keys ile alır ve listesini döner.

toString'i dönülemez yapmak için, özellik tanımlayıcı ile tanımlamak gereklidir. Bunun yazımı Object.create ile olur ve bu ikinci argüman olarak özellik tanımlayıcı alır. */

let dictionary = Object.create(null, {

    toString: { // toString özelliğini tanımla.

        value() { // Değeri bir fonksiyondur.

            return Object.keys(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

// apple ve __proto__ döngüde yer alır
for (let key in dictionary) {

    console.log(key); // apple , __proto__
}

// listenin virgül ile ayrılmış versiyonu döner.
console.log(dictionary); // "apple,__proto__"

/* Tanımlayıcı ile özellik yarattığımızda bunun bayrakları varsayılan olarak false olur. Bundan dolayı yukarıdaki dictionary.toString dönülemezdir. */