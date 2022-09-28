/* -> bekle
Sözdizimi: */

// sadece zaman uyumsuz işlevler içinde çalışır
let value = await promise;

/* Anahtar kelime await, JavaScript'i bu söz yerine gelene kadar bekletir ve sonucunu döndürür.

İşte 1 saniyede çözülen bir söz içeren bir örnek: */

async function f() {

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // vaat çözülene kadar bekleyin (*)

    console.log(result); // "done!"
}

f();

/* İşlev yürütme satırda "duraklar" (*)ve söz yerine getirildiğinde resultsonuç olarak devam eder. Yani yukarıdaki kod "bitti!" bir saniyede.

Vurgulayalım: awaitJavaScript'i kelimenin tam anlamıyla söz verilene kadar bekletir ve ardından sonuca devam eder. Bu, herhangi bir CPU kaynağına mal olmaz, çünkü motor bu arada başka işler de yapabilir: diğer komut dosyalarını yürütün, olayları yönetin vb.

Bu, vaad edilen sonucu almanın, promise.thenokuması ve yazması daha kolay olandan daha zarif bir sözdizimidir. */


/* -> await Normal işlevlerde kullanılamaz
awaitEşzamansız olmayan bir işlevde kullanmaya çalışırsak , bir sözdizimi hatası olur: */

function f() {

    let promise = Promise.resolve(1);

    // let result = await promise; // Syntax error
}

/* asyncBir fonksiyonun önüne koymazsak bu hatayı alacağız . Söylendiği gibi, awaityalnızca bir async function.

Promise ZincirishowAvatar() bölümünden bir örnek alalım ve şunu kullanarak yeniden yazalım :async/await

1. .then ile aramaları değiştirmemiz gerekecek await.
2. Ayrıca onların çalışması için işlevi yapmalıyız async. */

async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // show the avatar
    let img = document.createElement('img');

    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();

// Oldukça temiz ve okunması kolay, değil mi? Eskisinden çok daha iyi.


/* -> await üst düzey kodda çalışmayacak
Yeni kullanmaya başlayan kişiler, üst düzey kodlarda awaitkullanamayacağımızı unutmaya meyillidir . awaitÖrneğin, bu işe yaramaz: */

// syntax error in top-level code
let response = await fetch('/article/promise-chaining/user.json');

let user = await response.json();

// Bunu, aşağıdaki gibi anonim bir zaman uyumsuz işleve sarabiliriz:

(async () => {

    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    // ...
})();


/* -> await"sonralanabilir" kabul eder
Gibi promise.then, awaitsonra yapılabilir nesneleri (çağrılabilir bir thenyöntemle olanlar) kullanmaya izin verir. Buradaki fikir, 3. taraf bir nesnenin bir söz vermeyebileceği, ancak sözle uyumlu olabileceğidir: destekliyorsa .then, ile kullanmak yeterlidir await.

İşte bir demo Thenablesınıfı, awaitaşağıda örneklerini kabul eder: */

class Thenable {

    constructor(num) {

        this.num = num;
    }

    then(resolve, reject) {

        console.log(resolve);

        // 1000ms sonra this.num*2 ile çözün
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
};

async function f() {

    // 1 saniye bekler, ardından sonuç 2 olur
    let result = await new Thenable(1);

    console.log(result);
}

f();

/* awaitile vaat edilmeyen bir nesne alırsa , yerel .thenişlevler sağlayan bu yöntemi argüman olarak çağırır. Sonra bunlardan biri çağrılana kadar bekler (yukarıdaki örnekte satırda olur ) ve sonuçla devam eder.resolverejectawait(*) */


/* -> zaman uyumsuz yöntemler
Bir zaman uyumsuz sınıf yöntemi bildirmek için başına şunu eklemeniz yeterlidir async: */

class Waiter {

    async wait() {

        return await Promise.resolve(1);
    }
}

new Waiter()
    .wait()
    .then(console.log); // 1

// Anlamı aynıdır: döndürülen değerin bir söz olmasını sağlar ve await.