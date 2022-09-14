/* Fonksiyonu metod olarak bağla.

Aşağıdaki kodun çıktısı nedir? */

function f() {

    console.log(this); // ?
}

let user = {

    g: f.bind(null)
};

user.g();

// Cevap: null.

/* Bağlanan fonksiyona doğrudan değer atanmıştır. Bundan dolayı değiştirilemez. Bundan dolayı user.g() yi çağırsanız bile orjinal fonksiyon this=null şeklinde çağırılacaktır. */