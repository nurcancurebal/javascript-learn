/* -> Kuralların Okuması/Yazılması.
Prototip sadece özelliklerin okunması için kullanılır.

Veri özelliklerinin yazılma/silinme ( alıcı/ayarlayıcı değil) işi doğrudan obje üzerinden yapılır.

Aşağıdaki örnekte rabbit'e kendi walk metodu atanmıştır: */

let animal = {

    eats: true,

    walk() {
        // Bu metod rabbit tarafından kullanılmayacaktır.
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

    set fullNameGet(value) {

        [this.name, this.surname] = value.split(" "); // TODO set neden get ile aynı ismi almayınca çalışmıyor?
    },

    get fullNameGet() { // Get ve set aynı isim olmayınca çalışmıyor(get çağırmaya yarıyor)

        return `${this.name} ${this.surname}`;
    }
};

let admin = {

    __proto__: user,

    isAdmin: true
};

console.log(admin.fullNameGet); // John Smith (*) , get ile alıyor çıktıyı , set olmadanda çalışıyor

// Ayarlayıcılar uyarıldı!
admin.fullName = "Alice Cooper"; // (**)

/* (*) satırında admin.fullName özelliği user prototipinde alıcıya sahiptir. Bundan dolayı çağırılır. (**) satırında ise ayarlayıcıya sahip olduğundan bu da çağırılır. */


/* -> “this”'in değeri
Aklınıza şöyle bir soru gelebilir. set fullName(value) içerisinde this'in değeri nedir? this.name ve this.surname yazılan yerlerde admin mi yoksa user mı kullanılır?

Cevap basittir: this prototip tarafından hiçbir şekilde etkilenmez.

Metodun bulunduğu yerin önemi olmaksızın, metod çağrısında this her zaman noktadan önceki bölümdür.

Öyleyese aslında ayarlayıcı admin'i this olarak kullanır. user'ı değil. */