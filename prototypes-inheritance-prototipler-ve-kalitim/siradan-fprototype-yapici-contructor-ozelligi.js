/* -> Sıradan F.prototype, yapıcı (contructor) özelliği
Her fonksiyonun "prototype" özelliği bulunmaktadır. Siz belirtmeseniz bile bu geçerlidir.

Varsayılan "prototype" sadececontructor' özelliği olan olan ve bu da fonksiyonun kendisini gösteren bir objedir.

Şu şekilde: */

function Rabbit() { }

/* varsayılan prototip
Rabbit.prototype = { constructor: Rabbit };
*/

// Şu şekilde kontrol edebiliriz:

function Rabbit() { }
// varsayılan:
// Rabbit.prototype = { constructor: Rabbit }

console.log(Rabbit.prototype.constructor == Rabbit); // true

/* Eğer hiçbir şey yapmazsak doğal olarak contructor özelliği tüm rabbit objelerine [[Prototype]] vasıtasıyla iletilir. */

function Rabbit1() { }
// varsayılan:
// Rabbit1.prototype = { constructor: Rabbit1 }

let rabbit1 = new Rabbit1(); //  {constructor: Rabbit1}'dan miras alır.

console.log(rabbit1.constructor == Rabbit1); // true (prototype'tan gelir)

/* Eğer constructor özelliğini kullarak varolan yapıcı ile aynı şekilde bir obje yapabiliriz.

Şu şekilde: */

function Rabbit2(name) {

    this.name = name;
    console.log(name);
}

let rabbit2 = new Rabbit2("White Rabbit");

let rabbit3 = new rabbit2.constructor("Black Rabbit");

/* Bir obje var fakat bu objenin ( 3. parti kütüphanelerden gelebilir) hangi yapıcısının kullanıldığını bilmiyorsak ve aynısını yaratmak istiyorsak oldukça kullanışlıdır.

Muhtemelen "contructor" hakkındaki en önemli şey…

… JavaScript "contructor" değerinin doğru olduğuna garanti vermez.

Evet, varsayılan "prototype" da bulunur fakat hepsi budur, sonrasındaki her şey bize aittir.

Daha özelde, eğer prototip’i tamamen değiştirirsek, bu durumda içinde "contructor" olmayacaktır. */

function Rabbit4() { }

Rabbit4.prototype = {

    jumps: true
};

let rabbit4 = new Rabbit4();

console.log(rabbit4.constructor === Rabbit4); // false

/* Öyleyse doğru "contructor"'ı tutmak için varsayılan prototip’e özellik ekleme/çıkarma yoluna gidebiliriz. Tamamen üzerine yazarsak varsayılan obje kaybolur. */

function Rabbit5() { }

// Rabbit5.prototype üzerine doğrudan yazma!
// sadece ekle
Rabbit5.prototype.jumps = true

// varsayılan Rabbit5.prototype.contructor bu şekilde korunacaktır.

// Veya alternatif olarak, constructor özelliği tekrar yaratılabilir:

Rabbit5.prototype = {

    jumps: true,
    constructor: Rabbit5
};

// bu şekilde constructor doğru olur, çünkü bunu el ile belirtmekteyiz.