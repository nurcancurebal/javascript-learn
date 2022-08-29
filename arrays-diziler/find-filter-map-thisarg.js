/* Çoğu metod “thisArg”'ı destekler
Fonksiyonları çağıran neredeyse tüm dizi metodları – find, filter, map gibi sort hariç, ayrıca opsiyonel thisArg parametresini kabul eder.

Yukarıdaki bölümde bu parametreden bahsedilmedi, bunun sebebi çok nadir olarak kullanılmasından dolayıdır. Fakat bütünlüğün sağlanmasından dolayı üstünden geçmekte fayda var.

Bu metodlarla “thisArg”'ın yazımı aşağıdaki gibidir: */

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg isteğe bağlı olarak kullanılan bir argümandır.

/* thisArg değeri func için this olmaktadır.

Örneğin, aşağıda objenin metodu filtre olarak kullanılmaktadır ve thisArg bu durumda oldukça kullanışlıdır: */

let kullanici = {
    yas: 18,
    dahaGenc(digerKullanici) {  // filtre olarak kullanılmaktadır

        return digerKullanici.yas < this.yas;
    }
};

let kullanicilar = [
    { yas: 12 },
    { yas: 16 },
    { yas: 32 }
];

// kullanıcıdan daha genç kullanıcıları bulunuz
let dahaGencKullanicilar = kullanicilar.filter(kullanici.dahaGenc, kullanici);

console.log(dahaGencKullanicilar); // [ { yas: 12 }, { yas: 16 } ]

/* Yukarıdaki çağrıda kullanici.dahaGenc filtre olarak kullanılmaktadır. Ayrıca kullanici bu fonksiyona gönderilmektedir. Eğer kullanici.filter(kullanici.dahaGenc)'i vermezseniz, kullanici.dahaGenc this=undefined olarak çağrılır. Bu da anında hata verir. */