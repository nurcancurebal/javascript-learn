/* -> Non-configurable ( Ayarlanamaz )
configurable:false bayrağı bazen varsayılan objeler ve özellikler için standart olarak gelir.

Bir ayarlanamayan özellik silinemez veya defineProperty ile değiştirilemez. Örneğin, MATH.PI hem sadece okunabilir, hem döngü içinde görünmez (non-enumerable) hem de değiştirilemez: */

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(JSON.stringify(descriptor, null, 2));
/*
{
  "value": 3.141592653589793,
  "writable": false,
  "enumerable": false,
  "configurable": false
}
*/

// Öyleyse, Math.PI hem değiştirilemez hem de üzerine yazılamaz.

Math.PI = 3; // Hatta

// delete Math.PI 'de çalışmayacaktır.

/* Bir özelliği değiştirilemez yapmak tek yönlü bir yoldur. Bunu geri çeviremeyiz çünkü defineProperty ayarlanamaz özellikler üzerinde çalışmaz.

Burada user.name tamamen mühürlü bir sabit yapılmaktadır: */

let user = {};

Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
});

// user.name veya bayrağı değiştirilemez.
// hiçbiri çalışmayacaktır:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", ...)
Object.defineProperty(user, "name", { writable: true }); // Error


/* -> Hatalar sadece use strict ile görünür.
Sıkı olmayan modda, sadece okunabilir özelliklerin üzerine yazarsanız bir hata görmezsiniz. Fakat yine de işleminiz başarılı olmaz. Yapmamanız gereken bir aksiyonda sadece görmezden gelinir. */