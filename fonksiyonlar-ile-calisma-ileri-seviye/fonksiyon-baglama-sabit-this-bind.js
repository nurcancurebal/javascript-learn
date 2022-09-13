/* -> Fonksiyon bağlama
Obje metodları ile setTimeout kullanıldığında veya obje metodları iletilirken, this'in kaybolması bilinen bir problemdir.

Aniden, this kaybolur. Bu problem başlangıç seviyesi geliştiriciler için çok tipiktir, bazen deneyimli geliştiriceler de bu hataya düşerler.*/


/* -> “this”'i kaybetme
JavaScript’te this in ne kadar kolay bir şekilde kaybolduğunu zaten biliyorsunuz. Eğer bir metod objeden farklı bir yere iletilirse this kaybolur.

Bu setTimeout ile nasıl olur bakalım: */

let user1 = {

    firstName1: "John",

    sayHi1() {

        console.log(`Hello, ${this.firstName1}!`); // Hello, undefined!, Hello, undefined!
    }
};

setTimeout(user1.sayHi1, 1000);

/* Gördüğünüz gibi, çıktı “John”'u göstermedi bunun yerine undefined döndü!

Bunun nedeni setTimeout'un user1.sayHi1 fonksiyonunun objeden ayrı olmasıdır. Son satır şu şekilde yazılabilir: */

let f1 = user1.sayHi1;

setTimeout(f1, 1000); // lost kullanıcı kaynağı kayboldu

/* Tarayıcıda setTimeout kullanımı biraz özeldir: this = window olarak ayarlanır. ( Node.JS için this timer objesi olur, fakat burada pek de önemli değil.) Öyleyse this.firstName bu değeri window.firstName'den almaya çalışır, fakat böyle bir şey yok. Buna benzer durumlarda siz de göreceksiniz this genelde undefined olur.

Aslında yapmak istediğimiz çok basit obje metodunu çağrılan yere ( – ) iletmek istiyoruz ( burada – zamanlayıcıdır.) Bunun doğru kaynakta çağırıldığına nasıl emin olunabilir? */


/* -> Çözüm 1: saklayıcı
En basit çözüm bir saklayıcı ( wrapper ) fonksiyonu kullanmaktır: */

let user2 = {

    firstName2: "John",

    sayHi2() {

        console.log(`Hello, ${this.firstName2}!`); // Hello, John!, Hello, John!
    }
};

setTimeout(function () {

    user2.sayHi2();

}, 1000);

/* Çalışmasının nedeni user2'ı dış sözcük ortamından almasıdır, sonrasında metodu normal bir şekilde çalıştırır.
Aynısı, fakat biraz daha kısa hali: */

setTimeout(() => user2.sayHi2(), 1000);

/* Fena değil, fakat kod yapısal olarak biraz sorunlu görünüyor.

setTimeout çalışmadan önce ( 1 sn ara ile çalışıyor ) user2 değeri değişirse? Sonra aniden yanlış objeyi çağıracaktır. */

let user3 = {

    firstName3: "John",

    sayHi3() {

        console.log(`Hello, ${this.firstName3}!`);
    }
};

setTimeout(() => user3.sayHi3(), 1000);

// ...1 saniye içinde
user3 = { sayHi3() { console.log("Another user3 in setTimeout!"); } }; // Another user3 in setTimeout!

// Bir sonraki çözüm böyle bir şeyin olmasını engeller.


/* -> Çözüm 2: bağlama
Fonksiyonlar bind varsayılan fonksiyonu sağlarlar. Bu fonksiyon this'in sabitlenmesini olanak verir.

Basitçe yazımı şu şekildedir: */

// let boundFunc = func.bind(kaynak);

/* func.bind(kaynak)'ın sonucu özel bir fonksiyon benzeri “egzotik obje”'dir. Fonksiyon gibi çağırılabilir ve saydam bir şekilde çağrıyı func'a this=kaynak olacak şekilde iletir.

Diğer bir deyişle boundFunc aslında sabit this'e sahip func'dur.

Örneğin burada funcUser4 çağrıyı func4 fonksiyonuna this=user4 olacak şekilde iletir. */

let user4 = {

    firstName4: "John"
};

function func4() {

    console.log(this.firstName4); // John
}

let funcUser4 = func4.bind(user4);

funcUser4();

/* Burada func4.bind(user4) aslında func4'un this=user4 olarak “bağlanmış halidir”.

Tüm argümanlar orjinal func4'e olduğu gibi aktarılır, örneğin: */

let user5 = {

    firstName5: "John"
};

function func5(phrase) {

    console.log(phrase + ', ' + this.firstName5); // Hello, John
}

// this'i user5'a bağla.
let funcUser5 = func5.bind(user5);

funcUser5("Hello");

// Bunu obje metodu ile deneyecek olursak:

let user6 = {

    firstName6: "John",

    sayHi6() {

        console.log(`Hello, ${this.firstName6}!`);  // Hello, John!, Hello, John!
    }
};

let sayHi6 = user6.sayHi6.bind(user6); // (*)

sayHi6();

setTimeout(sayHi6, 1000);

/* (*) satırında user6.sayHi6 metodunu aıyoruz ve user6'a bağlıyoruz. sayHi6 bu durumda bağlanmış fonksiyon oluyor. Böylece tek başına çağrılabilir veya setTimeout içerisinde çağrılabilir. Nereden çağırıldığı çok da önemli değidlir. Kaynağı her zaman doğru olacaktır.

Gördüğünüz gibi tüm argümanlar “olduğu gibi” iletilir, sadece this bind tarafından sabitlenmiştir: */

let user7 = {

    firstName7: "John",

    say7(phrase) {

        console.log(`${phrase}, ${this.firstName7}!`); //Hello, John!, Bye, John!
    }
};

let say7 = user7.say7.bind(user7);

say7("Hello");
say7("Bye");


/* -> Kullanışlı metod: bindAll
Eğer bir objenin birçok metodu var ise bunu aktif olarak gerekli yerlere iletip, bunları bir döngü içerisine alabiliriz: */

for (let key in user7) {

    if (typeof user7[key] == 'function') {

        user7[key] = user7[key].bind(user7);
    }
}

/* Bu şekilde büyük bağlama olayları için bazı JavaScript kütüphanelerinden yardım alınabilir. Örneğin lodash ,_.bindAll(obj) fonksiyonuna sahiptir. */