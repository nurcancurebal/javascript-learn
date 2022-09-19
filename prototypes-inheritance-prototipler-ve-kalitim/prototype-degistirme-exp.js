/* -> "prototype"'i değiştirme

Aşağıdaki kodda new Rabbitile yeni bir Rabbit oluşturulmuş sonra prototype’ı değiştirilmeye çalışılmıştır.

Başlangıçta aşağıdaki koda sahibiz: */

function Rabbit1() { }

Rabbit1.prototype = {

    eats: true
};

let rabbit1 = new Rabbit1();

console.log(rabbit1.eats); // true

// Bir tane daha karakter dizisi ekledik, console.log ne gösterir?

function Rabbit2() { }

Rabbit2.prototype = {

    eats: true
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype = {};

console.log(rabbit2.eats); // ? (true)

// …Eğer kod aşağıdaki gibi değiştirilirse ne olur ( bir satır değiştirildi )?

function Rabbit3() { }

Rabbit3.prototype = {

    eats: true
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype.eats = false;

console.log(rabbit3.eats); // ? (false)

// Ya böyle ? ( bir satır değiştirildi )

function Rabbit4() { }

Rabbit4.prototype = {

    eats: true
};

let rabbit4 = new Rabbit4();

delete rabbit4.eats;

console.log(rabbit4.eats); // ? (true)

// Son şekli:

function Rabbit5() { }

Rabbit5.prototype = {

    eats: true
};

let rabbit5 = new Rabbit5();

delete Rabbit5.prototype.eats;

console.log(rabbit5.eats); // ? (undefined)

/* Cevaplar:

true.

Rabbit.prototype ataması [[Prototype]]'I ayarlasada bu yeni objelerde etki eder. Var olanlarda bir değişikliğe neden olmaz.

false.

Objeler referanslar ile atanır. Rabbit.prototype'tan alınan obje kopya değildir, hala hem Rabbit.prototype hem de rabbit'in [[Prototype]]'ı tarafından referans edilir.

Bundan dolayı referans edilen herhangi bir yerden içeriik değişirse bu diğerini de etkiler.

true.

Tüm delete operasyonları objeye doğrudan etki eder. Mesela delete rabbit.eats rabbit'ten eats özelliğini silmeye çalışır fakat yapaz. Bundan dolayı bu operasyonun hiçbir etkisi olayacaktır.

undefined.

eats prototip’ten silindiğinden dolayı artık bir etkisi olmayacaktır. */