/* -> Hata yönetimi
Bir söz normal olarak çözülürse await promise, sonucu döndürür. throw Ancak red durumunda sanki o satırda bir ifade varmış gibi error veriyor.

Bu kod: */

async function f() {

    await Promise.reject(new Error("Whoops!"));
}

// …Şununla aynı mı:

async function f() {

    throw new Error("Whoops!");
}

/* Gerçek durumlarda, sözün reddedilmesi biraz zaman alabilir. Yani await bekleyecek ve sonra bir hata atacak.

try..catch Bu hatayı normal ile aynı şekilde kullanarak yakalayabiliriz throw: */

async function f() {

    try {

        let response = await fetch('http://no-such-url');

    } catch (err) {

        console.log(err); // TypeError: failed to fetch
    }
}

f();

// Bir hata durumunda kontrol catch bloğa atlar. Birden çok satırı da sarabiliriz:

async function f() {

    try {

        let response = await fetch('/no-user-here');
        let user = await response.json();

    } catch (err) {

        // hem fetch hem de response.json'daki hataları yakalar
        console.log(err);
    }
}

f();

/* Eğer try..catch sahip değilsek, zaman uyumsuz işlevin çağrısı tarafından oluşturulan söz f() reddedilir. Bunu işlemek için .catch ekleyebiliriz : */

async function f() {

    let response = await fetch('http://no-such-url');
}

// f() reddedilen bir söz haline gelir

f().catch(console.log); // TypeError: failed to fetch // (*)

/* Oraya .catch eklemeyi unutursak, işlenmeyen bir söz verme hatası alırız (konsolda görüntülenebilir). Bu tür hataları, Sözlerle hata işleme bölümünde açıklandığı gibi global bir olay işleyici kullanarak yakalayabiliriz . */


/* -> async/await ve promise.then/catch

async/await kullandığımızda, .then nadiren ihtiyacımız olur, çünkü await bizi bekleyen işi halleder. try..catch Ve bunun yerine bir normal kullanabiliriz .catch. Bu genellikle (her zaman değil) daha uygundur.

Ancak kodun en üst düzeyinde, herhangi bir işlevin dışındayken, async sözdizimsel olarak kullanamayız , bu nedenle nihai sonucu veya düşme hatalarını işlemek await için ..then/catch eklemek normal bir uygulamadır

(*)Yukarıdaki örneğin satırında olduğu gibi. */


/* -> async/await ile iyi çalışır Promise.all
Birden fazla söz beklememiz gerektiğinde, onları sarabiliriz Promise.all ve sonra await: */

// sonuç dizisini bekleyin
let results = await Promise.all([
    fetch(url1),
    fetch(url2),
    //...
]);

/* Bir hata olması durumunda, her zamanki gibi yayılır: başarısız sözden öğesine ve ardından çağrı etrafında Promise.all kullanarak yakalayabileceğimiz bir istisna haline gelir .try..catch */