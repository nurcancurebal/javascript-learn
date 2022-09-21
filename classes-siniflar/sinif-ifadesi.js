/* Tıpkı fonksiyonlar gibi, sınıflar da başka bir ifadenin içinde tanımlanabilir, dolaşılabilir, döndürülebilir, atanabilir vb. */

let User1 = class {

    sayHi() {

        console.log("Hello");
    }
};

/* Adlandırılmış İşlev İfadelerine benzer şekilde, sınıf ifadelerinin bir adı olabilir veya olmayabilir.

Sınıf ifadesinin bir adı varsa, yalnızca sınıfın içinde görünür: */

// "Adlandırılmış Sınıf İfadesi" (spesifikasyonda böyle bir terim yok, ancak bu Adlandırılmış İşlev İfadesine benzer)
let User = class MyClass {

    sayHi() {

        console.log(MyClass); // MyClass yalnızca sınıfın içinde görünür
    }
};

new User().sayHi(); // çalışır, MyClass tanımını gösterir

console.log(MyClass); // error, MyClass sınıfın dışında görünmez

// Hatta sınıfları dinamik olarak "isteğe bağlı" hale getirebiliriz, şöyle:

function makeClass(phrase) {

    // bir sınıf ilan et ve geri ver
    return class {

        sayHi() {

            console.log(phrase);
        };
    };
}

// Yeni bir sınıf oluştur
let User2 = makeClass("Hello");

new User2().sayHi(); // Hello