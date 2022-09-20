/* -> Diğer gömülü prototipler
Array, Date, Function gibi diğer gömülü objeler metodlarını prototype üzerinde tutar.

Örneğin, [1,2,3] bir array yarattığınızda içte varsayılan new Array() yapıcısı kullanılır. Bundan dolayı dizi dizi objesi yeni bir objeye yazılır ve Array.prototype bunun prototipi olur ve metodlar sağlar. Bu hafızayı oldukça etkin kullanmaya yarar.

Tanım gereği, tüm gömülü prototipler üstünde Object.prototype'a sahip olmalıdır. Bazen “her şey objelerden kalıtım alır” sözünü duyarsınız. */

// Prototipleri inceleyecek olursak:

let arr = [1, 2, 3];

// Array.prototype'tan mı kalıtım alıyor?
console.log(arr.__proto__ === Array.prototype); // true

// peki ya Object.prototype'tan mı?
console.log(arr.__proto__.__proto__ === Object.prototype); // true

// Peki ya onun üzerine bir null.
console.log(arr.__proto__.__proto__.__proto__); // null

/* Bazı metodlar üst üste gelebilir, örneğin Array.prototype kendine ait bir toString metoduna sahiptir ve bu da elemanları arasına virgül koyarak çıktı vermesini sağlar: */

let arr2 = [1, 2, 3]

console.log(arr2); // [ 1, 2, 3 ] <--  Array.prototype.toString'in sonucu

/* Daha önce de gördüğümüz gibi, Object.prototype'ın toString metodu bulunmaktadır fakat Array.prototype bu zincirlemede daha yakındır ve bundan dolayı diziler bunu kullanır. */

/* Chrome Developer Tools konsolunda da bu kalıtımı ( console.dir kullanarak görebilirsiniz ) */

/* Diğer gömülü objeler de aynı şekilde çalışır, hatta fonksiyonlar bile. Bunlar gömülü Fonksiyon yapıcısının objeleridir, call/apply gibi metodları ve diğerleri Function.prototype'tan alınmıştır. Fonksiyonların kendine ait toString metdoları da bulunmaktadır. */

function f() { }

console.log(f.__proto__ == Function.prototype); // true

console.log(f.__proto__.__proto__ == Object.prototype); // true, objelerden kalıtım alır.