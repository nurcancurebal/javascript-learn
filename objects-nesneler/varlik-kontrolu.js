// Bir objedeki her özellik erişilebilirdir. Eğer o özellik olmasa bile hata vemez!!! Olmayan bir özelliğe ulaşmaya
// çalıştığınızda undefined değeri döner. Bu da kolayca o özelliğin olup olmadığını kontrol etmenizi sağlar.

let kullanici = {};

console.log(kullanici.olmayanOzellik === undefined); // true "böyle bir özellik yok" demektir.

// Ayrıca bunu kontrol için "in" operatörü de kullanılabilir.
// Yazımı: "anahtar" in obje


let kullaniciTwo = { isim: "Nurcan", yas: 27 };

console.log("yas" in kullaniciTwo); // true, kullanici.yas özelliği mevcut.
console.log("blabla" in kullaniciTwo); // false, kullanici.blabla namevcut.

// Yazıma dikkat ederseniz in in sol tarafında özellik ismi tırnak içinde yazılır.
// Eğer tırnağı unutursanız bu durumda değişkenin değerini obje içinde arar. Halbuki bizim amacımız değişkenin isminin obje
// içinde aramaktır.

let kullaniciThree = { yasTwo: 1 };

let anahtar = "yasTwo";

console.log(anahtar in kullaniciThree); // true, değişkenden değerini alır ve kontrol eder.


//* Eğer özellik undefined döndürüyorsa nasıl kontrol edilmelidir?
// Genelde sıkı karşılaştırma "=== undefined" doğru çalışır. Fakat burada özel bir durum mevcuttur ve sıkı karşılaştırma da
// başarısız olur. Bu durumda bile "in" doğru çalışır.
// Bu olay objenin özelliğinin var olduğu fakat undefined döndürdüğü durumlarda meydana gelir.

let obj = {
    test: undefined
};

console.log(obj.test); // undefined - yani böyle bir özellik yok mu?

console.log("test" in obj); // true, özellik mevcut!

// Yukarıdaki örnekte obj.test teknik olarak mevcut. Bundan dolayı in operatörü doğru bir şekilde çalışır.
// Bu türde olaylar çok nadir yaşanır, çünkü bir özelliğe neredeyse kimse undefined atamaz. Genelde bilinmeyen için null
// veya boş değer kullanılır. Bundan dolayı in operatörü kodda yabancı görünür.