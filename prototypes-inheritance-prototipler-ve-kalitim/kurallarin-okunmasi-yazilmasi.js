/* -> Kuralların Okuması/Yazılması.
Prototip sadece özelliklerin okunması için kullanılır.

Veri özelliklerinin yazılma/silinme ( alıcı/ayarlayıcı değil) işi doğrudan obje üzerinden yapılır.

Aşağıdaki örnekte rabbit'e kendi walk metodu atanmıştır: */

let animal = {

    eats: true,

    walk() {
        /* Bu metod rabbit tarafından kullanılmayacaktır. */
    }
};

let rabbit = {

    __proto__: animal
}

rabbit.walk = function () {

    console.log("Rabbit! Bounce-bounce!"); // Rabbit! Bounce-bounce!
};

rabbit.walk();

/* Artık rabbit.walk() metodu doğrudan kendi içerisinde bulur ve çalıştırır. Prototip kullanmaz:


Alıcı/Ayarlayıcı için ise eğer özellik okunursa bu doğrudan prototipte okunur ve uyarılır.

Örneğin aşağıdaki admin.fullName özelliğine bakın: */

let user = {

    name: "John",

    surname: "Smith",

    set fullName(value) {

        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {

        return `${this.name} ${this.surname}`;
    }
};

let admin = {

    __proto__: user,

    isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// Ayarlayıcılar uyarıldı!
admin.fullName = "Alice Cooper"; // (**)

/* (*) satırında admin.fullName özelliği user prototipinde alıcıya sahiptir. Bundan dolayı çağırılır. (**) satırında ise ayarlayıcıya sahip olduğundan bu da çağırılır. */