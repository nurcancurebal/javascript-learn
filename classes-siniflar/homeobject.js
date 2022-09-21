/* -> [[HomeObject]]
Buna bir çözüm sağlamak için, JavaScript fonksiyonlar için bir tane dahili özellik eklemiştir: [[HomeObject]]

Bir fonksiyon sınıf veya obje metodu olarak tanımlandığında, bunun [[HomeObject]]'i kendisi olur

Bu aslında bağımsız fonksiyonlar fikrini bozmaktadır, çünkü metodlar kendi objelerini hatırlamaktadır. Ayrıca [[HomeObject]] değiştirilemez, yani bu bağ sonsuza kadardır. Aslında bu dilde yapılan oldukça büyük bir değişiklik.

Fakat bu değişiklik güvenlidir. [[HomeObject]] sadece üst sınıfın metodlarını super'de çağırmaya yarar. Bundan dolayı uyumluluğu bozmaz.

Şimdi super ile nasıl çalışıyor bunu inceleyelim --tekrardan, sade objeleri kullanalım: */

let animal1 = {

    name: "Animal1",

    eat() {         // [[HomeObject]] == animal1

        console.log(this.name + " eats."); // Long Ear eats.
    }
};

let rabbit1 = {

    __proto__: animal1,

    name: "Rabbit1",

    eat() {         // [[HomeObject]] == rabbit1

        super.eat();
    }
};

let longEar = {

    __proto__: rabbit1,

    name: "Long Ear",

    eat() {         // [[HomeObject]] == longEar

        super.eat();
    }
};

longEar.eat();  // Long Ear eats.

/* Her metod kendi objesinin [[HomeObject]] özelliğini hatırlamakta. Sonra superbunu üst objenin prototipini çözerken kullanır.

[[HomeObject]] sınıflar veya sade objeler’de tanımlanan metodlar için tanımlanır. Fakat objeler için, metodlar aynen şu şekilde tanımlanmalıdır: method(), "method:function()" şeklinde değil.

Aşağıdaki örnekte karşılaştırma için metod-olmayan yazım kullanılmıştır. [[HomeObject]] özelliği tanımlanmadı bundan dolayı da kalıtım çalışmayacaktır. */

let animal2 = {

    eat: function () { // kısa yazım: eat() {...} olmalıdır.
        // ...
    }
};

let rabbit2 = {

    __proto__: animal2,

    eat: function () {

        super.eat();
    }
};

rabbit2.eat();  // super'i çalıştırırken hata oldu çünkü [[HomeObject]] bulunmamakta.

/* [[HomeObject]] mekaniği sayesinde amaçlandığı gibi çalışır. longEar.eat gibi bir yöntem, [[HomeObject]] öğesini bilir ve üst yöntemi prototipinden alır. Bunu kullanmadan. */


/* -> Yöntemler “özgür” değildir
Daha önce bildiğimiz gibi, işlevler genellikle "özgürdür", JavaScript'teki nesnelere bağlı değildir. Böylece nesneler arasında kopyalanabilirler ve başka bir this ile çağrılabilirler.

[[HomeObject]] öğesinin varlığı bu ilkeyi ihlal eder, çünkü yöntemler nesnelerini hatırlar. [[HomeObject]] değiştirilemez, dolayısıyla bu bağ sonsuza kadar sürer.

[[HomeObject]]'in kullanıldığı dilde tek yer – süper. Bu nedenle, bir yöntem super kullanmıyorsa, onu yine de özgür olarak kabul edebilir ve nesneler arasında kopyalayabiliriz. Ama süper şeyler ters gidebilir.

İşte yanlış bir süper aramanın demosu: */

let animal3 = {

    sayHi() {

        console.log(`I'm an animal3`);
    }
};

let rabbit3 = {

    __proto__: animal3,

    sayHi() {

        super.sayHi();
    }
};

let plant = {

    sayHi() {

        console.log("I'm a plant");
    }
};

let tree = {

    __proto__: plant,

    sayHi: rabbit3.sayHi // (*)
};

tree.sayHi();  // I'm an animal3 (?!?)

/* tree.sayHi() çağrısı "Ben bir hayvanım"ı gösterir. Kesinlikle yanlış.

Nedeni basit:

. (*) satırında tree.sayHi yöntemi tavşandan kopyalanmıştır. Belki sadece kod tekrarından kaçınmak istedik?
. Dolayısıyla [[HomeObject]] tavşanda yaratıldığı gibi tavşandır. [[HomeObject]]'i değiştirmenin bir yolu yok.
. tree.sayHi() kodunun içinde super.sayHi() vardır. Tavşandan yukarı çıkar ve yöntemi hayvandan alır. */


/* -> Yöntemler(Methodlar), fonksiyon özellikleri değil
[[HomeObject]] hem sınıflardaki hem de düz nesnelerdeki yöntemler için tanımlanır. Ancak nesneler için yöntemler, "method: function()" olarak değil, tam olarak method() olarak belirtilmelidir.

Fark bizim için önemsiz olabilir, ancak JavaScript için önemlidir.

Aşağıdaki örnekte, karşılaştırma için yöntem olmayan bir sözdizimi kullanılmıştır. [[HomeObject]] özelliği ayarlanmadı ve devralma çalışmıyor: */

let animal4 = {

    eat: function () { // kısa sözdizimi olmalı: eat() {...}
        // ...
    }
};

let rabbit4 = {

    __proto__: animal4,

    eat: function () {

        super.eat();
    }
};

rabbit4.eat();  // super çağrılırken hata oluştu (çünkü [[HomeObject]] yok) // TODO