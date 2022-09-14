/* Giriş işlemi için kısmi uygulama.

user objesi değiştirildi. Şimdi loginOk/loginFail fonksiyonlarının yerine tek bir fonksiyon user.login(true/false) var.

Aşağıdaki askPassword'a ne iletilirse bu user.login(true)'u ok veya user.login(fail)'i fail olarak çağırır? */

function askPassword(ok, fail) {

    let password = '';

    if (password == "rockstar") ok();

    else fail(); // faili çalıştırabilmek için (*) buraya yönlendiriyor
}

let user = {

    name: 'John',

    login(result) {

        console.log(this.name + (result ? ' logged in' : ' failed to log in')); // John  failed to log in, John  failed to log in
    }
};

// askPassword(?, ?); // ?

// Sadece işaretlenmiş bölümde gerçekleştiriniz.

// Bir saklayıcı fonksiyon ile, daha net olmak gerekirse ok fonksiyonu ile:

askPassword(() => user.login(true), () => user.login(false)); // (*) buradada user.loginin içine false gönder diyor

/* Böylece user dış değişkenlerden alınır ve normal bir biçimde çalıştırılır.

Veya user.login'den bir kısmi fonksiyon üreterek; Bu fonksiyon kaynak olarak user kullanır ve doğru ilk argümana sahiptir. */

askPassword(user.login.bind(user, true), user.login.bind(user, false));