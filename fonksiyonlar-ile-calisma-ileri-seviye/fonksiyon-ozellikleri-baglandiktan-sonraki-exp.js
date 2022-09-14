/* Bağlandıktan sonraki fonksiyon özellikleri.

Fonksiyonun özelliğinde bir değer var. Bu değer bind edildikten sonra değişir mi? Neden? */

function sayHi() {

    console.log(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({ name: "John" });

console.log(bound.test); // çıktısı ne olacak? neden?

/* Cevap: undefined.

bind'ın sonucu başka bir objedir. Bu objenin test özelliği bulunmamaktadır. */