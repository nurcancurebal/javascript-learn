// -> Temel Sınıf sözdizimi

/* Wikipedia: Sınıf, nesne yönelimli programlama dillerinde nesnelerin özelliklerini, davranışlarını ve başlangıç durumlarını tanımlamak için kullanılan şablonlara verilen addır. */

/* Pratikte, aynı türden birçok nesne oluşturmamız gerekebilir, kullanıcılar veya malzemeler gibi.

Yapıcı, "new" operatörü, kısmından bildiğimiz gibi new(yeni) fonksiyonu bize bu konuda yardımcı olabilir.

Ancak modern Javascript’de bundan daha gelişmiş bir “sınıf” yapısı var. Bu yapı nesne tabanlı programlamaya yeni ve faydalı özellikler getiriyor. */


/* -> Sınıf sözdizimi
Temel sözdizimi: */

class MyClass {
    // class methods
    constructor() { /* ...  */ }
    method1() { /* ... */ }
    method2() {/*  ... */ }
    method3() { /* ... */ }
    /* ... */
}

/* Sonra new MyClass() bu metotlarla birlikte yeni bir nesne oluşturuyor.

constructor() metodu new tarafından otomatik olarak çağırılıyor. Bu sayede nesneyi orada tanımlayabiliyoruz. */

class User {

    constructor(name) {

        this.name = name;
    }

    sayHi() {

        console.log(this.name); // John
    }
}

// Usage:
let user = new User("John");

user.sayHi();

/* new User("John") çağırıldığında:

1. Yeni bir nesne oluşturuluyor.
2. constructor verilen argümanla çalışıyor ve buna this.name'i atıyor.
…Daha sonra user.sayHi gibi metodları çağırabiliriz. */


/* -> Sınıf metodları arasında virgül kullanılmaz
Acemi geliştiricilerin düştüğü bir hata da, sınıf metodları arasına virgül koymak. Bu da sözdimizi hatasına neden oluyor.

Buradaki notasyon nesne sabitleriyle karıştırılmamalı. Sınıf içinde virgüle ihtiyaç yok. */


/* -> Sınıf nedir?
Peki, class (sınıf) tam olarak nedir? Bu aslında tam olarak yeni bir dil seviyesi obje değil.

Hadi, sihri ortaya çıkaralım ve bir sınıfın tam olarak ne olduğunu görelim. Bu daha karmaşık konseptleri anlamamıza da yardımcı olacak.

Javascript’de sınıf aslında bir tür fonksiyondur. */

class User2 {

    constructor(name) { this.name = name; }

    sayHi() { console.log(this.name); }
}

// kanıt: User2 bir fonksiyondur
console.log(typeof User2); // function

/* class User2 {...} yapısının yaptığı şey aslında:

1. User2 adında, sınıfın tanımlayıcısın sonucu olacak, yeni bir fonksiyon oluşturur.
 . İşlev kodu, yapıcı yönteminden alınır (böyle bir yöntem yazmazsak boş olduğu varsayılır).

2. sayHi gibi tüm metotları User2.prototype içinde saklar.

Daha sonra yeni nesneler için bir metot çağırdığımızda, tıpkı F.prototype bölümünde anlatıldığı gibi, prototipten alınır. Böylece yeni Kullanıcı nesnesinin sınıf yöntemlerine erişimi olur. */

class User3 {

    constructor(name) { this.name = name; }

    sayHi() { console.log(this.name); }
}

// sınıf bir fonksiyondur
console.log(typeof User3); // function

// ...veya daha doğrusu yapıcı yöntemi
console.log(User3 === User3.prototype.constructor); // true

// Yöntemler User3.prototype'dadır, örneğin:
console.log(User3.prototype.sayHi); // [Function: sayHi]

// prototipte tam olarak iki yöntem vardır
console.log(Object.getOwnPropertyNames(User3.prototype)); // [ 'constructor', 'sayHi' ]