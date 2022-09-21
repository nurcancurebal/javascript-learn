/* Tıpkı gerçek nesneler gibi, sınıflar da alıcılar/ayarlayıcılar, oluşturucular, hesaplanmış özellikler vb. içerebilir.

İşte get/set kullanılarak uygulanan user.name için bir örnek: */

class User {

    constructor(name) {
        // setterı(ayarlayıcıyı) çağırır
        this.name = name;
    }

    get name() {

        return this._name;
    }

    set name(value) {

        if (value.length < 4) {

            console.log("Name is too short."); // Name is too short.

            return;
        }

        this._name = value;
    }
}

let user = new User("John");

console.log(user.name); // John

let user2 = new User("");

// Sınıf bildirimi, User.prototype'da aşağıdaki gibi alıcılar ve ayarlayıcılar oluşturur:

Object.defineProperties(User.prototype, { // Object.defineProperties(obj, descriptors) metodu birçok metodun tek bir seferde tanımlanmasını sağlar.
    name: {

        get() {

            return this._name
        },

        set(name) {
            // ...
        }
    }
});

// Hesaplanmış özelliklere sahip bir örnek:

function f() { return "sayHi"; }

class User {

    [f()]() {

        console.log("Hello");
    }
}

new User().sayHi();

// Bir üreteç yöntemi için benzer şekilde başına * ekleyin.