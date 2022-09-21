/* -> Super: dahililer, [[HomeObject]]
Artık super'in derinliklerine dalma vakti geldi. Altında yatan ilginç şeyler nelermiş bunları göreceğiz.

Öncelikle, şimdiye kadar öğrendiklerimizle super ile çalışmak mümkün değil.

Ever gerçekten, kendimize soralım, nasıl teknik olarak böyle bir şey çalışabilir? Bir obje metodu çalıştığında var olan objeyi this olarak alır. Eğer biz super.method()'u çağırırsak metod'u nasıl alabilir? Doğal olarak method'u var olan objenin prototipinden almak gerekmektedir. Peki teknik olarak bunu JavaScript motoru nasıl halledebilir?

Belki thisin [[Prototype]]'ını this.__proto__.method olarak alıyordur? Malesef böyle çalışmıyor.

Bunu test edelim. Sınıflar olmadan basit objelerle, fazladan karmaşıklaştırmadan deneyelim.

Aşağıda rabbit1.eat(), kendisinin üst metodu animal1.eat()'i çağırmalıdır: */

let animal1 = {

    name: "Animal1",

    eat() {

        console.log(this.name + " eats."); // Rabbit1 eats.
    }
};

let rabbit1 = {

    __proto__: animal1,

    name: "Rabbit1",

    eat() {
        // bizim tahminimze göre super.eat() bu şekilde çalışabilir.
        this.__proto__.eat.call(this); // (*)
    }
};

rabbit1.eat();

/* (*) satırında animal1 prototipinden eat'i almakta ve var olan obje kaynağından çağırmaktayız. Dikkat edin burada .call(this) oldukça önemlidir. Çünkü basit this.__proto__.eat() üst eat'i prototipin kaynağı ile çağırır, var olan objenin değil.

Yukarıdaki kod beklendiği gibi çalışmaktadır. Doğru console.log vermektedir.

Şimdi bu zincire bir tane daha obje ekleyelim. İşler nasıl bozuluyor görelim: */

let animal2 = {

    name: "Animal2",

    eat() {

        console.log(this.name + " eats.");
    }
};

let rabbit2 = {

    __proto__: animal2,

    eat() {
        // ...tavşan-stili ayla ve üst sınıfı çağır.
        this.__proto__.eat.call(this); // (*) maksimum çağrı yığını boyutu aşıldı
    }
};

let longEar = {

    __proto__: rabbit2,

    eat() {
        // ...uzun kulaklar ile bir şeyler yap ve üst sınıfı çağır.
        this.__proto__.eat.call(this); // (**)
    }
};

longEar.eat(); // Error: Maximum call stack size exceeded

/* Yazdığınız kod artık çalışmıyor! longEar.eat()'i çağırırken hata olduğunu görebilirsiniz.

Bu çok açık olmayabilir, fakat longEar.eat() in hata kodlarını takip ederseniz nedenini anlayabilirsiniz. (*) ve (**) satırlarında this var olan (longEar) objesidir. Hatırlayın: Tüm objeclerin metodları this olarak var olan objeyi alır, prototipini değil.

Öyleyse, (*),(**) ve this.__proto__ tamamen aynıdır: rabbit2. Hepsi rabbit2.eat'i sonsuz zincire çıkmadan çağırır.

1. longEar.eat() içerisinde (**) satırı rabbit2.eat'i this=longEar olarak çağırmakta. */

// longEar.eat() içerisinde this = longEar şeklinde kullanmaktayız.
this.__proto__.eat.call(this) // (**)
// olur
longEar.__proto__.eat.call(this)
// bu da
rabbit2.eat.call(this);

/* 2. Sonra rabbit2.eat'in (*) satırı içerisinde bu zinciri daha üstlere çıkarmaya çalışıyoruz, fakat this=longEar, yani this.__proto__.eat yine rabbit2.eat! */

// rabbit2.eat() içerisinde thiss= longEar bulunmakta
this.__proto__.eat.call(this) // (*)
// olur
longEar.__proto__.eat.call(this)
// veya (yine)
rabbit2.eat.call(this);

/* 3. … Artık rabbit2.eat 'in kendisini neden sonsuz defa çağırdığını görmüş olduk.

Problem sadece this kullanılarak çözülemez. */