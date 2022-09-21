/* -> Eski tarayıcılar bir polyfill(çoklu doldurma)'e ihtiyaç duyabilir
Sınıf düzeyindeki özellikler, dile yeni eklenen bir özelliktir. */

// Bir özellik ekleyelim:

class User {

    name = "Anonymous";

    sayHi() {

        console.log(`Hello, ${this.name}!`); // Hello, Anonymous!
    }
}

new User().sayHi();

/* Özellik, User.prototype içine yerleştirilmez. Bunun yerine new tarafından her nesne için ayrı ayrı oluşturulur. Bu nedenle, özellik hiçbir zaman aynı sınıfın farklı nesneleri arasında paylaşılmayacaktır. */