/* Belli olmayan parantez sayısını toplama

topla adında bir fonksiyon yazın ve aşağıdaki gibi çalışsın:

topla(1)(2) == 3; // 1 + 2
topla(1)(2)(3) == 6; // 1 + 2 + 3
topla(5)(-1)(2) == 6
topla(6)(-1)(-2)(-3) == 0
topla(0)(1)(2)(3)(4)(5) == 15
Not: İlkel tipe dönüştürmek için ayrıca özel bir obje yaratmanıza gerek yok.*/

/* çözüm
Tümünün çalışabilir olası için topla'nın fonksiyon olması lazım.
Bu fonksiyon çağrıları arasında hafızada değer tutabilmeli.
Göreve göre, fonksiyon == kullanıldığında sayı olmalıdır. Fonksiyonlar obje olduğundan dolayı dönüşümleri Objelerin ilkel çevirileri bölümünde anlatıldığı gibi çevrilirler, bu objenin sayı olarak dönebilmesi için kendi metodumuzu kullanabiliriz.
*/

function topla(a) {

    let anlikToplam = a; // 1. fonksiyon burada başlıyor

    function f(b) { // 4. console.log' dan f' in değerini alıyor ve içine giriyor

        anlikToplam += b; // 5.işlemi yapıyor, 7.

        return f; // 6. diğer değeri almaya gidiyor consol' a, 8. consol' a gidip alacağı var mı diye bakıyor
    }

    f.toString = function () { // 2. anlikToplam değerini aldıktan sonra buraya bakıyor

        return anlikToplam; // 9. son çıkışı buradan alıyor
    };

    return f; // 3. buraya geliyor f fonksiyonuna yönlendiriyor
}

console.log(topla(1)(2)); // 3
console.log(topla(5)(-1)(2)); // 6
console.log(topla(6)(-1)(-2)(-3)); // 0
console.log(topla(0)(1)(2)(3)(4)(5)); // 15

/* topla fonksiyonu sadece bir defa çalışır. f fonksiyonu döndürür.

Sonrasında her bir çağrı için f'i tekrar çağırır ve anlikToplam değerine kendisini ekler ve döndürür.

f’in son satırında recursion bulunmamakta

Recursion ( kendini çağırma ) aşağıdaki gibi görünmektedir: */

function f(b) {

    anlikToplam += b;

    return f(); // <-- kendini çağırıyor
}

// Bizim durumumuzda sadece çağırmadan kendisini döndürmektedir.

function f(b) {

    anlikToplam += b;

    return f; // <-- kendisni çağırmamakta, kendi değerini dönüyor.
}

/* f değeri bir sonraki çağrıda kullanılacaktır, ne kadar çağırılırsa o kadar kullanılır. Ne zaman ki sayı veya karakter dizisi olarak kullanılacak olursa – toString metodu anlikToplam değerini döner. Bunun yanında Symbol.toPrimitive veya valueOf da kullanılabilirdi. */