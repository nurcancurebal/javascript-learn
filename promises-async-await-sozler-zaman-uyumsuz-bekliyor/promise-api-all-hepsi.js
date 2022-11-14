/* -> Promise.all (söz.hepsi)
Paralel olarak yürütülmek için birçok söz vermek isteriz ve hepsinin hazır olmasını bekleriz.

Örneğin, paralel olarak birkaç URL’yi indirin ve hepsi bittiğinde içeriği işleyin.

Bunun için Promise.all.

Söz dizimi: */

let promise = Promise.all([/* ...promises... */]);

/* Yeni bir söz alır ve bir dizi söz alır (Teknik olarak herhangi bir yinelenebilir nesne, ama çoğunlukla bir array.)

Yeni söz, listelenen tüm sözlerin yerine getirildiği ve sonuçların bir dizisine sahip olduğunda karar verir.

Örneğin, aşağıdaki Promise.all 3 saniye sonra yerleşir ve sonucu [1, 2, 3] dizisidir: */

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3

]).then(console.log); // 1,2,3 sözler hazır olduğunda: her söz bir dizi üyesine katkıda bulunur

/* Lütfen göreli siparişin aynı olduğunu unutmayın. İlk sözün sözülmesi uzun sürse bile sonuçta ilk sırada yer almaktadır.

Yayın bir hile, bir dizi iş verisini bir dizi sözle eşleştirmek ve ardından bunu Promise.all içine kaydırmaktır.

Örneğin, eğer bir dizi URL’miz varsa hepsini şöyle getirebiliriz: */

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

// Her URL'yi getirme sözüyle eşleyin
let requests1 = urls.map(url => fetch(url));

// Tüm işler çözülene kadar Promise.all bekler
Promise.all(requests1)
    .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));

/* Bir dizi github kullanıcısı için kullanıcı bilgilerini adlarına göre almakla ilgili daha büyük bir örnek (veya bir mal dizisini kimlikleriyle alabiliriz. Mantık aynıdır): */

let names = ['iliakan', 'remy', 'jeresig'];

let requests2 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests2)
    .then(responses => {
        // Tüm cevaplar hazır. HTTP durum kodlarını gösterebiliriz
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`); // Her URL için 200 gösterir
        }

        return responses;
    })
    // Yanıt dizisini, içeriğini okumak için response.json() dizisine eşleyin
    .then(responses => Promise.all(responses.map(r => r.json())))

    // Tüm JSON cevapları ayrıştırılır: "users" bunların dizisidir.
    .then(users => users.forEach(user => console.log(user.name)));


// ~Eğer sözlerden herhangi biri ret edildiyse Promise.all bu hatayı hemen ret eder

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log); // Error: Whoops!

/* İşte ikinci söz iki saniye içinde reddediyor. Bu Promise.all un hemen reddedilmesine yol açar, bu yüzden .catch çalıştırır: reddedilme hatası tüm Promise.all un sonucudur. */


/* -> Bir hata durumunda, diğer taahhütler dikkate alınmaz
Eğer bir söz reddederse, Promise.all derhal reddeder. Listedeki diğerlerini tamamen unutur. Onların sonuçları göz ardı edilir.

Örneğin, yukarıdaki örnekte olduğu gibi birden fazla fetch çağrısı varsa ve biri başarısız olursa diğeri hala yürütülmeye devam eder. Ancak Promise.all artık onları izlememektedir. Muhtemelen yerleşecekler ancak sonuç göz ardı edilecektir.

Promise.all sözlerinde “iptal” kavramı olmadığı için onları iptal edecek hiçbir şey yapmaz. Başka bir bölümde bu konuda yardımcı olmayı amaçlayan AbortControllerı ele alacağız. Ancak bu Promise API’sinin bir parçası değil. */


/* -> Promise.all(...)taahhüt dışı öğelere izin verir iterable
Normalde, Promise.all(...) sözlerin yenilenebilir (çoğu durumda bir dizi) kabul eder. Ancak bu nesnelerden herhangi biri bir söz değilse Promise.respove içine sarılır.

Örneğin burada `[1, 2, 3]` döner: */

// ```js run
Promise.all([
    new Promise((resolve, reject) => {

        setTimeout(() => resolve(1), 1000)
    }),
    2, // Promise.resolve(2) olarak kabul edildi.
    3  // Promise.resolve(3) olarak kabul edildi.
]).then(console.log); // 1, 2, 3

// Bu yüzden uygun olmayan durumlarda Promise.all a söz etmeyen değerleri aktarabiliriz.