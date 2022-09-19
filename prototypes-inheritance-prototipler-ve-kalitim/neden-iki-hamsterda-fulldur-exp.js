/* Neden iki hamster da full'dür?

speedy1 ve lazy1 diye hamster1'objesinden türemiş iki tane objemiz olsun.

Biz bir tanesini beslediğimizde, diğeri de full oluyor. Bunun nedeni nedir, nasıl düzeltilir? */

let hamster1 = {

    stomach: [],

    eat(food) {

        this.stomach.push(food);
    }
};

let speedy1 = {

    __proto__: hamster1
};

let lazy1 = {

    __proto__: hamster1
};

// Bu yemeği buldu
speedy1.eat("apple");
console.log(speedy1.stomach); // [ 'apple' ]

// Bu neden buldu peki?
console.log(lazy1.stomach); // [ 'apple' ]

/* çözüm
speedy1.eat("apple") çağrısında ne oluyor isterseniz daha yakından inceleyelim

(=hamster) protitipinde speedy1.eat bulunur, sonra this=speedy1 olacak şekilde çalıştırılır. ( .dan önceki obje )

Sonra this.stomach.push() stomach özelliğini bulmalı ve push'u çağırmalı. this içinde stomch'(=speedy) i araştırır fakat bulamaz.

Sonra prototip bağını takip ederek hamster içinde stomach'i bulur.

Bunun içindeki push u çalıştırır. Böylece prototip’in stomach'i çalışmış olur

Böylece tüm hamsterlar’ın bir tane stomach'i oluyor.

Her defasında prototip’ten stomach alındığında ve sonra stomach.push ile olduğu yerde modifiye eder.

Aklınızda bulunsun basit bir atamada this.stomach= gibi basit atamada gerçekleşmez. */

let hamster2 = {

    stomach: [],

    eat(food) {
        // this.stomach.push yerine this.stomach'i ata.
        this.stomach = [food];
    }
};

let speedy2 = {

    __proto__: hamster2
};

let lazy2 = {

    __proto__: hamster2
};

speedy2.eat("apple");
console.log(speedy2.stomach); // [ 'apple' ]
console.log(lazy2.stomach); // []

/* Şimdi her şey yolunda gidiyor, çünkü this.stomach= stomach araması yapmıyor. Değer doğrudan bu nesneye yazılır.

Ayrıca her hamsterın kendi stomach ine sahip olduğundan emin olarak problemden tamamen kurtulabiliriz: */

let hamster = {

    stomach: [],

    eat(food) {

        this.stomach.push(food);
    }
};

let speedy = {

    __proto__: hamster,
    stomach: []
};

let lazy = {

    __proto__: hamster,
    stomach: []
};

speedy.eat("apple");
console.log(speedy.stomach); // [ 'apple' ]
console.log(lazy.stomach); // []

/* Genel bir çözüm olarak, yukarıdaki mide gibi belirli bir nesnenin durumunu tanımlayan tüm özellikler genellikle o nesneye yazılır. Bu, bu tür sorunları önler. */