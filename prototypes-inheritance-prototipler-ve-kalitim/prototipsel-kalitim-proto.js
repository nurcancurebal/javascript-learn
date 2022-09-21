/* -> Protitipsel Kalıtım
Programlarken genelde bir şeyi alır ve bunu genişletmek isteriz.

Örneğin, kullanici adında bir obje ve bunun özellikleri ve metodları olsun, bunu biraz düzenleyerek admin ve misafir gibi iki farklı obje oluşturmak isteriz. Yani kullanici objesini doğrudan kopyalamak veya metodlarını tekrardan uygulamak değil bunlar üzerinden yeni objeler yaratmak isteyebiliriz.

Prototip kalıtımı buna olanak sağlamaktadır. */


/* -> [[Prototype]]
Javascript objeleri gizli bir özellik olan [[Prototype]] özelliğine sahiptirler. Bu null olabilir veya başka objeye referans verebilir. Referans verilen obje “prototip” olarak adlandırılır.


[[Prototip]]'in “büyülü” bir anlamı bulunmaktadır. Objeden bir özellik okunmak istendiğinde, ve bu obje bulunamadığında JavaScript bunu otomatik olarak prototip’ten alır. Programlamada buna prototip kalıtımı denir. Birçok dil özelliği ve programlama tekniği bunun üzerine kuruludur.

[[Prototpe]] gizli bir özelliktir, fakat bunu ayarlamanın birçok yolu vardır.

Bunlardan biri __proto__ kullanmaktır: */

let animal1 = {

    eats: true
};

let rabbit1 = {

    jumps: true
};

rabbit1.__proto__ = animal1;

/* Aklınızda bulunsun __proto__ [[Prototype]] ile aynı değildir. Bunun için alıcı/ayarlayıcı ( getter/setter)'dır. Bunun hakkında ilerleyen bölümlerde daha fazla açıklama yapılacaktır fakat şimdilik __proto__ yeterlidir.

Örneğin rabbit1 adında bir özelliğe arasanız ve bu özellik yoksa, JavaScript bunu otomatik olarak animal'dan alır. */


let animal2 = {

    eats: true
};

let rabbit2 = {

    jumps: true
};

rabbit2.__proto__ = animal2; // (*)

// Artık her ikisini de rabbit2'de bulabilirsiniz.
console.log(rabbit2.eats); // true (**)
console.log(rabbit2.jumps); // true

/* (*) satırında animal2'ın rabbit2 in özleliği olması sağlanır

Sonrasında console.log rabbit2.eats (**)'i okur. Bu rabbit2'te olmadığından JavaScript [[Prototype]]'ı takip eder ve bunu animal2'in içerinde bulur.


Böylece “animal2” rabbit2'in prototip’i veya "rabbit2 prototipsel olarak animal2 kalıtımını almıştır" diyebiliriz.

Diyelim ki animal'ın birçok özelliği ve metodu olsun, bunları otomatik olarak rabbit2 de kullanabilir. Bu çeşit özelliklere kalıtılmış özellikler denir.

Eğer animal'da bir metodumuz varsa bu metod rabbit2 tarafından çağırılabilir olmaktadır. */

let animal3 = {

    eats: true,

    walk() {

        console.log("Animal walk"); // Animal walk
    }
};

let rabbit3 = {

    jumps: true,

    __proto__: animal3
};

// walk prototipten alınmıştır.
rabbit3.walk();


// Prototip zinciri daha da uzun olabilir:

let animal4 = {

    eats: true,

    walk() {

        console.log("Animal walk"); // Animal walk
    }
};

let rabbit4 = {

    jumps: true,

    __proto__: animal4
};

let longEar = {

    earLength: 10,

    __proto__: rabbit4
}

// walk prorotip zincirinden alınmıştır.
longEar.walk();

console.log(longEar.jumps); // true , (rabbit4'ten gelmekte)

/* Aslında iki tane kısıtlama bulunmaktadır:

1. Referanslar kapalı devre olamaz. Böyle bir duurmda hata verir.
2. __proto__'nun değeri ya obje olur ya da null Diğer türlüsü ( tüm ilkel veri tipleri ) görmezden gelinir.

Çok açık olsa da tekrar söylemekte yarar var. Bir obje sadece bir tane [[Prototype]]'a sahip olabilir. Bir objenin iki farklı objeden kalıtım alamaz. */