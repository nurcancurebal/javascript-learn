/* -> Bir metodu geçersiz kılma, üstüne yazma.
Şimdi biraz daha ileri gidelim ve metodun üstüne yazalım. Şimdiden sonra Rabbit1 stop metodunu kalıtım alır, bu metod this.speed=0'ı Animal sınıfında ayarlamaya yarar.

Eğer Rabbit1 içerisinde kendi stop metodunuzu yazarsanız buna üstüne yazma denir ve Animal'da yazılmış stop metodu kullanılmaz. */

class Rabbit1 extends Animal1 {

    stop() {
        // ... rabbit1.stop() için artık bu kullanılacak.
    }
}

/* …Fakat genelde üst metodun üzerine yazmak istenmez, bunun yerine küçük değişiklikler yapmak veya fonksiyonliteyi genişletmek daha fazla tercih edilen yöntemdir. Metodda birçeyler yapar ve genelde bundan önce/sonra veya işlerken üst metodu çağırırız.

Sınıflar bunun için "super" anahtar kelimesini sağlarlar.

. super.method(...) üst class’ın metodunu çağırmak için.

. super(...) üst metodun yapıcısını (constructor) çağırmak için kullanılır.

Örneğin, Rabbit otomatik olarak durduğunda gizlensin. */

class Animal2 {

    constructor(name) {

        this.speed = 0;
        this.name = name;
    }

    run(speed) {

        this.speed += speed;

        console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {

        this.speed = 0;

        console.log(`${this.name} stopped.`);
    }
}

class Rabbit2 extends Animal2 {

    hide() {

        console.log(`${this.name} hides!`);
    }

    stop() {

        super.stop(); // üst sınıfın stop metodunu çağır.
        this.hide(); // sonra gizle
    }
}

let rabbit = new Rabbit2("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!

// Artık Rabbit2, stop metodunda üst sınıfın super.stop()'unu çağırmaktadır.


/* -> Ok fonksiyonlarının super'i bulunmamaktadır.
Ok fonksiyonları bölümünde bahsedildiği gibi, ok fonksiyonlarının super'i bulunmamaktadır.

Eğer erişim olursa bu super dışarıdaki fonksiyonundur. Örneğin: */

class Rabbit3 extends Animal3 {

    stop() {

        setTimeout(() => super.stop(), 1000); // üst'ün stop'unu 1 sn sonra çağır.
    }
}

/* Ok fonksiyonu içerisindeki super ile stop() içerisine yazılan super aynıdır. Eğer “sıradan” bir fonksiyon tanımlarsak bu hataya neden olabilir: */

// Unexpected super
setTimeout(function () { super.stop() }, 1000);