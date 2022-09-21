/* -> Sınıf kalıtımı, super
Sınıflar başka sınıfları genişletebilirler. Bunun için prototip kalıtımı tabanlı güzel bir yazılışı bulunmaktadır.

Diğer bir sınıftan kalıtım sağlamak için "extends" ile belirtmek gerekmektedir.

Aşağıda Animal'dan kalıtım alan Rabbit sınıfı gösterilmektedir: */

class Animal {

    constructor(name) {

        this.speed = 0;
        this.name = name;
    }

    run(speed) {

        this.speed += speed;

        console.log(`${this.name} runs with speed ${this.speed}.`); // White rabbit runs with speed 5.
    }

    stop() {

        this.speed = 0;
        console.log(`${this.name} stopped.`);
    }

}

// Animal'dan Devral
class Rabbit extends Animal {

    hide() {

        console.log(`${this.name} hides!`); // White Rabbit hides!
    }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.hide();

/* extends kelimesi aslında Rabbit.prototype'dan referans alıp bunun [[Prototype]]'ını Animal.prototype'a ekler. Aynen daha önce de gördüğümüz gibi.

Artık rabbit hem kendi metodlarına hem de Animal metodlarına erişebilir. */


/* -> extends'ten sonra her türlü ifade kullanılabilir.
Extends'ten sonra sadece sınıf değil her türlü ifade kullanılabilir.

Örneğin, üst sınıfı yaratan yeni bir fonksiyon çağrısı: */

function f(phrase) {

    return class {

        sayHi() { console.log(phrase) } // Hello
    }
}

class User extends f("Hello") { } // üst sınıfı yaratan yeni bir fonksiyon çağrısı

new User().sayHi(); // Hello

/* Burada class User f("Hello")'nun sonucunu kalıtır.

Bu belki çok ileri teknik programlama kalıpları için kullanışlı olabilir. Böylece birçok koşula göre fonksiyonları kullanarak farklı sınıflar oluşturabilir ve bunlardan kalıtım alınabilir. */