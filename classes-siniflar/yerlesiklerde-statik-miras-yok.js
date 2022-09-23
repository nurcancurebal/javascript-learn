/* -> Yerleşiklerde statik miras yok
Yerleşik nesnelerin kendi statik yöntemleri vardır, örneğin Object.keys, Array.isArrayvb.

Bildiğimiz gibi, yerel sınıflar birbirini genişletir. Örneğin, Array, Object'i genişletir.

Normalde, bir sınıf diğerini genişlettiğinde, hem statik hem de statik olmayan yöntemler miras alınır.

Öyleyse, eğer Rabbit extends Animalöyleyse:

Rabbit.methodsiçin çağrılabilir Animal.methods, çünkü Rabbit.[[Prototype]] = Animal.
new Rabbit().methodsde mevcuttur, çünkü Rabbit.prototype.[[Prototype]] = Animal.prototype.
Bu, Statik özellikler ve yöntemler bölümünde ayrıntılı olarak açıklanmıştır .

Ancak yerleşik sınıflar bir istisnadır. (1)Statiği birbirlerinden miras almazlar .

Örneğin, hem Array hem de Date, Object öğesinden devralır, bu nedenle örneklerinin Object.prototype öğesinden yöntemleri vardır.Ancak Array.[[Prototype]], Object'e işaret etmez.Yani Object.keys() var ama Array.keys() ve Date.keys() yok.

Not: Tarih ve Nesne arasında bir bağlantı yoktur. Hem Nesne hem de Tarih bağımsız olarak bulunur. Date.prototype, Object.prototype'dan miras alır, ancak hepsi bu kadar. */