/* -> Yapıcı metodu ezmek.
Yapıcı metodlar ile yapılan şeyler biraz çetrefillidir.

Şimdiye kadar Rabbit kendisine ait yapıcı'ya sahipti.

Şartname’ye göre eğer bir sınıf diğer başka bir sınıftan türer ve constructor'a sahip değil ise aşağıdaki yapıcı otomatik olarak oluşturulur. */

class Rabbit1 extends Animal1 {
    // yapıcısı olmayan ve türetilen sınıf için oluşturulur.
    constructor(...args) {
        super(...args);
    }
}

/* Gördüğünüz gibi aslında üst sınıfın yapıcı'sını tüm argümanları göndererek çağırır. Eğer kendimiz bir yapıcı yazmazsak bu meydana gelir.

Özel olarak uyarlanmış bir yapıcı oluşturalım. Bu isim ile birlikte earLength'i de tanımlasın: */

class Animal2 {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit2 extends Animal2 {

    constructor(name, earLength) {

        this.speed = 0;
        this.name = name;
        this.earLength = earLength;
    }
    // ...
}

// Çalışmaz!
let rabbit2 = new Rabbit2("White Rabbit", 10); // Error: this is not defined.

/* Nasıl ya! Hata aldık. Şimdi de rabbit oluşturamıyoruz. Neden peki?

Kısa cevap: Türemiş sınıftaki yapıcı kesinlikle super(...) i çağırmalıdır. Bu this'den önce olmalıdır. Peki neden?

JavaScript’te “türeyen sınıfın yapıcı fonksiyonu” ve diğerleri arasında farklılıklar mevcuttur. Türemiş sınıflarda eş yapcı fonksiyonlar içsel olarak [[ConstructorKind]]:"derived" şeklinde etiketlenir.

Farklılık:

. Normal yapıcı çalıştığında boş bir objeyi this olarak yaratır ve bunun ile devam eder.
. Fakat türemiş sınıfın yapıcısı çalıştığında bunu yapmaz. Üst fonksiyonun yapıcısının bunu yapmasını bekler.

Eğer kendimiz bir yapıcı yazarsak bundan dolayı super i çağırmamız gerekmektedir. Aksi halde this referansı oluşturulmaz ve biz de hata alırız.

Rabbit'in çalışabilmesi için this'den önce super() çağırılmalıdır. */

class Animal3 {

    constructor(name) {

        this.speed = 0;
        this.name = name;
    }
    // ...
}

class Rabbit3 extends Animal3 {

    constructor(name, earLength) {

        super(name);
        this.earLength = earLength;
    }
    // ...
}

// Şimdi düzgün bir şekilde çalışır.
let rabbit3 = new Rabbit3("White Rabbit", 10);

console.log(rabbit3.name); // White Rabbit
console.log(rabbit3.earLength); // 10