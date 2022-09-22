/* -> Nesne oluşturuken hata oluyor.

Aşağıda Animal'ıdan miras alan bir Rabbit sınıfı bulunmakta.

Aşağıda bunu yapmaya çalıştık fakat başarılı olamadık. Problemi bulabilir misiniz? */

class Animal1 {

    constructor(name) {

        this.name = name;
    }
}

class Rabbit1 extends Animal1 {

    constructor(name) {

        this.name = name;

        this.created = Date.now();
    }
}

let rabbit1 = new Rabbit1("White Rabbit"); // Error: this is not defined

console.log(rabbit1.name);

// Çünkü Rabbit sınıfındaki yapıcı super’i yani ebeveny sınıfını çağırmalıdır. Düzeltilmiş kodu aşağıda görebilirsiniz:

class Animal {

    constructor(name) {

        this.name = name;
    }
}

class Rabbit extends Animal {

    constructor(name) {

        super(name);

        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.name); // White Rabbit