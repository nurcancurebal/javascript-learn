/* Soru `this`'i kaybediyor.

askPassword1() çağrısı şifreyi kontrol etmeli ve buna göre user1.loginOk veya user1.loginFail'i çağırmalıdır.

Fakat bu bir hataya neden oluyor. Neden?

Sadece (*) olan satırda değişiklik yaparak her şeyin doğru çalışmasını sağlayınız. */

function askPassword1(ok, fail) {

    let password = '';

    if (password == "rockstar") ok();

    else fail();
}

let user1 = {

    name: 'John',

    loginOk() {

        console.log(`${this.name} logged in`);
    },

    loginFail() {

        console.log(`${this.name} failed to log in`); // undefined failed to log in
    },
};

askPassword1(user1.loginOk, user1.loginFail); // (*)

/* Nedeni ask'ın loginOk/loginFail fonksiyonlarını obje olmadan almasıdır.

Bunları çağırdığında doğal olarak this=undefined olarak çalışacaktır.

Kaynağı bağlar isek: */

function askPassword(ok, fail) {

    let password = '';

    if (password == "rockstar") ok();

    else fail();
}

let user = {

    name: 'John',

    loginOk() {

        console.log(`${this.name} logged in`);
    },

    loginFail() {

        console.log(`${this.name} failed to log in`); // John failed to log in, John failed to log in
    },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// Alternatif çözüm şu şekilde olabilir:

askPassword(() => user.loginOk(), () => user.loginFail());

// Genelde bu da çalışır. Fakat daha karmaşık durumlarda user'ın soru ve () => user.loginOk() arasında üzerine yazılabilir.