/* > Mixinler
JavaScript sadece bir objeden kalıtım yapmaya izin verir. Bir obje için sadece bir tane [[Prototype]] olabilir. Ayrıca bir sınıf sadece bir sınıfı genişletebilir.

Bu bizi sınırlandırabilir. Örneğin, StreetSweeper ve Bycicle adında iki tane sınıfınız var ve bunlardan StreetSweepingBycicle adında bir sınıf yaratmak istiyorsunuz.

Veya programlama hakkında konuşacak olursak, Rendereradında şablonu uygulayan ve EventEmitter adında olayları işleyen bir sınıfımız olsun, ve bu fonksiyonaliteyi birlikte Page adında bir sınıfta kullanmak istiyoruz. Böylece page hem şabloları kullanabiliecek hemde hemde olayları yayacak(emit).

Burada bize mixin konsepti yardımcı olabilir.

Wikipedia’da şu şekilde tanımlanmıştır: mixin sınıfı diğer sınıflar tarafından kullanılacak metodları olan ve bunun için bir üst sınıfa ihtiyaç duymayan yapıdır.

Diğer bir deyişle mixin belirli davranışları uygulayan metodları sağlar, fakat bunu tek başına kullanmayız, bunu diğer sınıflara başka davranışlar eklemek için kullanırız. */


/* -> Mixin örneği
JavaScript mixini yapmak için en kolay yol kullanışlı metodlarla donatılmış bir objedir. Böylece kolayca birleştirebilir ve herhangi bir sınıfın prototipine koyabiliriz.

Örneğin aşağoda sayHiMixin, User için “speech” metodunu ekler: */

// mixin
let sayHiMixin1 = {

    sayHi() {

        console.log("Hello " + this.name); // Hello Dude
    },

    sayBye() {

        console.log("Bye " + this.name);
    }
};

// usage:
class User1 {

    constructor(name) {

        this.name = name;
    }
}

// copy the methods
Object.assign(User1.prototype, sayHiMixin1); // Object.assign(), bir nesneyi klonlamak için kullanılır ya da aynı özelliklere sahip nesneyi birleştirmek için kullanılır. Object.assign(hedef nesne, kaynak nesne)

// Artık User1 sayHi metodunu çağırabilir
new User1("Dude").sayHi();

/* Burada gördüğünüz gibi kalıtım yoktur. Yapılan sadece basit metod kopyalamadır. User1 diğer sınıfları genişletebilir, hatta bu sınıflar da kendi içerilerinde mixin’lere sahip olabilirler. Örnek vermek gerekirse: */

class User2 extends Person2 {
    // ...
}

Object.assign(User2.prototype, sayHiMixin1);

/* Mixinler kendi içlerinde kalıtım benzeri yapılar oluşturabilirler.

Örneğin sayHiMixin3, sayMixin3'ten kalıtılmıştır: */

let sayMixin3 = {

    say(phrase) {

        console.log(phrase);
    }
};

let sayHiMixin3 = {

    __proto__: sayMixin3, // (veya Object.create ile de prototipi ayarlayabilirdik)

    sayHi() {

        super.say("Hello " + this.name); // super: ebeveyn yöntemini çağır(sayMixin3 ü çağırmak için)
    },

    sayBye() {

        super.say("Bye " + this.name);
    }
};

class User3 {

    constructor(name) {

        this.name = name;
    }
}

// metodları kopyala
Object.assign(User3.prototype, sayHiMixin3);

// artık kullanıcı sayHi'yi çağırabilir.
new User3("Dude").sayHi(); // Hello Dude!

/* Dikkat ederseniz sayHiMixin3 içinde `super.say() çağırıldığında o mixin’in prototipindeki metoduna bakar, sınıfın değil.

Çünkü sayHiMixin3 metodları [[HomeObject]]'e ayarlanmıştır. Bundan dolayı super aslında User3.__proto__ değil de sayHiMixin3.__proto__ anlamına gelir. */