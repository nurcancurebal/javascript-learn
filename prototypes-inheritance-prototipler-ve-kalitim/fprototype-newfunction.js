/* -> F.prototype
Modern JavaScript’te protitip’i __proto__ kullanarak ( bir önceki bölümde anlatıldığı gibi ) ayarlayabiliriz. Fakat bu daha öncesinde böyle değildi.

JavaScript başlangıcından beri kalıtıma sahipti. Bu dilin çekirdek özelliklerinden biriydi.

Fakat bunu ayarlamak için sadece bir yol vardı ve bu yol yapıcıda(constructor)'da "prototype" kullanmaktı. Hala birçok kodda bu şekilde kullanılmaktadır. */


/* -> “Prototip” özelliği
Bildiğiniz gibi, new F() yeni bir obje oluşturur.

new F() ile yeni bir obje yaratıldığında, obje’nin [[Prototype]]'ı F.prototype a ayarlanır.

Diğer bir deyişle, eğer F prototype özelliğine sahip ve bu da obje tipine ayarlanmışsa, new operatörü bunu [[Prototype]] ayarlamak için kullanır.

Aklınızda bulunsun F.prototype burada F'in sahip olduğu sıradan bir "prototype" objesidir. “prototype” terimine çok benzese de aslında burada gerçekten kullanılan sıradan bir objedir. */

let animal = {

    eats: true
};

function Rabbit(name) {

    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

/* Rabbit.prototype = animal sözcük anlamıyla: “Eğer yeni bir Rabbit yaratılırsa new Rabbit, bunun [[Prototype]]ını animal'a ata” */

// "prototip" yataydaki oktur, sıranda bir özelliktir. [[Prototype]] ise dikeydir ve rabbit'in animal'dan miras aldığını ifade eder.