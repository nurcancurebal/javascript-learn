/* Görüldüğü üzere semboller her zaman, isimleri aynı olsa bile, birbirinden farklıdır. Bazen durumlarda aynı isimdeki sembolün aynı anlama gelmesi istenebilir.
Örneğin, uygulamnın bir yerinde "id" isminde bir sembol oluşturdunuz, başka bir yerinde ise aynı bu objeye erişmek istiyorsunuz. 
Bunu yapabilmek için global sembol kaydı kullanılabilir. Sembolleri bunun içinde yaratılabilir ve sonra kullanılabilir. Bu aynı isme sahip sembollerin aynı değeri döndereceğini garantiler.
Bu kayıt bölümünden sembolleri okumak için Symbol.for(anahtar) kullanılır. 
Bu global kayıt bölümünü kontrol eder. Eğer bir sembol anahtar olarak tanımlanmışsa bunu döndürür. Eğer böyle bir anahtar yok ise Symbol(anahtar) metodu çalışır ve bu yeni anahtar global sembol kaydı bölümüne kaydedilir. */

// Global kayıt bölümünden oku

let id = Symbol.for("id"); // Eğer bu sembol varsa getir yoksa kaydet!

// tekrar oku
let idAgain = Symbol.for("id");

// eskisi ile yenisi aynı mı?
console.log(id === idAgain); // true

/* Kayıt bölümündeki Sembollere global semboller denir. Eğer uygulamanın tamamında sembol kullanmak isterseniz bu bölüme kayıt edilmelidir. */

/* Ruby Gibi
Bazı programlama dillerinde , Ruby gibi, her bir isim için bir sembol bulunmaktadır. JavaScript’te ise gördüğünüz gibi bu global semboller için geçerlidir. */

/* Symbol.keyFor
Global semboller için Symbol.for(anahtar) sembolü ismiyle çağırır, bunun tam tersi de mümkündür: Symbol.keyFor(sym), global sembol ile sembolün ismini dönderir. */

let sym = Symbol.for("isim");
let sym2 = Symbol.for("id");

// sembolden ismi al
console.log(Symbol.keyFor(sym)); // isim
console.log(Symbol.keyFor(sym2)); // id

/* Symbol.keyFor sembol kayıt bölümünde bulunan sembolleri aramak için kullanılır. Bu da global olmayanlarda arama yapılamaz demektir. Eğer sembol global olarak tanımlanamaz ise undefined döndürür. */

console.log(Symbol.keyFor(Symbol.for("isim"))); // isim , global sembol

console.log(Symbol.keyFor(Symbol("isim2"))); // undefined , tanımsız bu argüman sembol kayıtlarında bulunamadı.

/* System sembolleri
JavaScript içinde tanımlı birçok “sistem” sembolü bulunmaktadır. Bunları farklı yönlerden objeler içinde kullanmak mümkündür. */

// Bu semboller Bilinen semboller tablosundan kontrol edilebilir:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
// …vs.

/* Örneğin Symbol.toPrimitive ilkel tiplere çevirirken objelerin nasıl davranması gerektiğini tanımlar. Bunlara yakında değinilecektir. */

// Diğer sembollere de kullanıldığı yerlerde değinildiğinde siz de kullanımına alışacaksınız.