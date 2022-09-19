/* -> Objeleri globalde kilitlemek
Özellik tanımları tekil özellikler seviyesinde çalışır.

Bunun ile birlikte tüm objeyi limitleyen metodlar bulunmaktadır:

~ Object.preventExtensions(obj)
Objeye özelliklerin eklenmesini engeller.

~ Object.seal(obj)
Özellikleri ekleme ve silmeyi engeller. Var olan tüm özellikler için configurable: false olarak ayarlar.

~ Object.freeze(obj)
Özellikerin eklenmesini, silinmesini ve değiştirilmesini engeller, var olan tüm özellikler için configurable:false, writable:false ayarlanır.

Bunlar için testsler vardır:

~ Object.isExtensible(obj)
Eğer özellik engellenmiş ise false aksi halde true dönderilir.

~ Object.isSealed(obj)
Eğer özellik ekleme/silme engellenmiş ise true, tüm var olan özellikler configurable: false'e sahipse.

~ Object.isFrozen(obj)
Eğer özellik ekleme/silme/değiştirme engellenmiş ve tüm özellikler configurable:false, writable:false ise true döndür.

Bu metodlar pratikte çok az kullanılır. */