let str = "Merhaba";

str.test = 5; // (*)

console.log(str.test); // undefined


/* İki türlü cevap verilebilir:

1. undefined
2. Hata
Neden? Ne olduğuna (*) satırından bakarsanız:

str nin bir özelliğine erişildiğinde, “obje kabı” yaratılır.
Bundan dolayı obje test özelliğini alır.
“obje kabı” kaybolur ve işlem tamamlanır.
Öyleyse str nin son satırında özelliğe ait hiçbir iz yoktur. İlkel tipin üzerinde yapılan değişiklik için yeni obje kabı
üretilir.

Bazı tarayıcılar ilkel tiplere yeni özellik tanımlanmasına izin vermezler. Bundan dolayı (*) bölümünde undefined değil de
hata da görebilirsiniz. Bu aslında özelliklerin dışında bir uygulamadır.

Bu örnekten de gördüğünüz gibi ilkel tipler kesinlikle obje değillerdir.

Geçici metodlar oluşturarak obje gibi davranırlar. Yukarıdaki örnekte olduğu gibi bunları fazla tutamazlar. */