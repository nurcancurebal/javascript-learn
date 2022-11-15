/* -> Await (Bekliyor)
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

/* İşlev yürütme satırda "duraklar" (*)  ve söz yerine getirildiğinde result sonuç olarak devam eder. Yani yukarıdaki kod "bitti!" bir saniyede.

Vurgulayalım: await JavaScript'i kelimenin tam anlamıyla söz verilene kadar bekletir ve ardından sonuca devam eder. Bu, herhangi bir CPU kaynağına mal olmaz, çünkü motor bu arada başka işler de yapabilir: diğer komut dosyalarını yürütün, olayları yönetin vb. 

Bu, vaad edilen sonucu almanın, promise.then okuması ve yazması daha kolay olandan daha zarif bir sözdizimidir. */


/* -> await Normal işlevlerde kullanılamaz
await Eşzamansız olmayan bir işlevde kullanmaya çalışırsak , bir sözdizimi hatası olur: */

function f() {

    let promise = Promise.resolve(1);

    // let result = await promise; // Syntax error
}

/* async Bir fonksiyonun önüne koymazsak bu hatayı alacağız . Söylendiği gibi, await yalnızca bir async function.

Promise Zinciri showAvatar() bölümünden bir örnek alalım ve async/await kullanarak yeniden yazalım :

1. .then Çağrıları ile await değiştirmemiz gerekecek.
2. Ayrıca onların çalışması için async fonksiyon yapmalıyız. */

async function showAvatar() {

    // JSON'umuzu okuyun
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();

    // github kullanıcısını oku
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // avatarı göster
    let img = document.createElement('img');

    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // 3 saniye bekle
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();

    return githubUser;
}

showAvatar();

// Oldukça temiz ve okunması kolay, değil mi? Eskisinden çok daha iyi.


/* -> await üst düzey kodda çalışmayacak
Yeni kullanmaya başlayan kişiler, üst düzey kodlarda await kullanamayacağımızı unutmaya meyillidir . await Örneğin, bu işe yaramaz: */

// üst düzey kodda sözdizimi hatası
let response = await fetch('/article/promise-chaining/user.json');

let user = await response.json();

// Bunu, aşağıdaki gibi anonim bir zaman uyumsuz işleve sarabiliriz:

(async () => {

    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
    // ...
})();


/* -> await "o halde" kabul eder
Gibi promise.then, await uygulanabilir nesnelerin (çağrılabilir bir then yöntemi olanlar) kullanılmasına izin verir. Fikir şu ki, bir 3. taraf nesnesi bir söz olmayabilir, ancak sözle uyumlu olabilir: öğesini destekliyorsa .then, bu, ile kullanmak için yeterlidir await.

İşte bir demo Thenable sınıfı, await aşağıda örneklerini kabul ediyor: */

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

/* await İle söz vermeyen bir nesne alırsa , bağımsız değişkenler olarak .then yerel işlevler sağlayan bu yöntemi çağırır. Sonra bunlardan biri çağrılana kadar bekler (yukarıdaki örnekte satırda olur ) ve ardından sonuçla devam eder.resolve reject await(*) */


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