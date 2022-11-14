/* -> yeniden atma
Daha önce fark ettiğimiz gibi, .catch gibi davranır try..catch. İstediğimiz kadar çok .thenişleyiciye sahip olabiliriz ve ardından .catchhepsinde hataları işlemek için sonunda bir tane kullanabiliriz.

Düzenli try..catcholarak hatayı analiz edebilir ve başa çıkamazsak belki yeniden gönderebiliriz. Aynı şey vaatler için de mümkündür.

throwİçeri girersek , .catchkontrol bir sonraki en yakın hata işleyicisine gider. Ve hatayı ele alır ve normal şekilde bitirirsek, en yakın başarılı .thenişleyiciye devam eder.

Aşağıdaki örnekte .catch, hatayı başarıyla işler:*/

// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) {

    console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));

/* Burada .catchblok normal şekilde biter. Böylece bir sonraki başarılı .thenişleyici çağrılır.

Aşağıdaki örnekte diğer durumu görüyoruz .catch. İşleyici (*)hatayı yakalar ve bununla başa çıkamaz (örneğin, yalnızca nasıl işleneceğini bilir URIError), bu nedenle tekrar atar: */

// the execution: catch -> catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) { // (*)

    if (error instanceof URIError) {
        // idare et
    } else {
        console.log("Can't handle such error");

        throw error; // bunu veya başka bir hatayı atmak bir sonraki yakalamaya atlar
    }

}).then(function () {

    /* burada asla koşmaz */
}).catch(error => { // (**)

    console.log(`The unknown error has occurred: ${error}`);
    // hiçbir şeyi iade etme => yürütme normal yoldan gider
});

// Ardından yürütme , zincir boyunca .catch (*)ilkinden diğerine atlar.(**)


/* -> Getirme hatası işleme örneği
Kullanıcı yükleme örneği için hata işlemeyi iyileştirelim.

Getirme tarafından döndürülen söz , istekte bulunmanın imkansız olduğu durumlarda reddedilir. Örneğin, bir uzak sunucu mevcut değil veya URL hatalı biçimlendirilmiş. Ancak uzak sunucu 404 hatasıyla veya hatta 500 hatasıyla yanıt verirse, geçerli bir yanıt olarak kabul edilir.

Sunucu, satırında 500 hatası olan JSON olmayan bir sayfa döndürürse ne olur (*)? Ya böyle bir kullanıcı yoksa ve GitHub, adresinde 404 hatası olan bir sayfa döndürürse (**)? */

fetch('no-such-user.json') // (*)
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`)) // (**)
    .then(response => response.json())
    .catch(console.log); // SyntaxError: Unexpected token < in JSON at position 0
// ...

/* Şu andan itibaren, kod ne olursa olsun yanıtı JSON olarak yüklemeye çalışır ve bir sözdizimi hatasıyla ölür. no-such-user.jsonDosya olmadığı için yukarıdaki örneği çalıştırarak bunu görebilirsiniz .

Bu iyi değil, çünkü hata, ayrıntılar olmadan zincire düşüyor: neyin başarısız olduğu ve nerede.

O halde bir adım daha ekleyelim: response.statusHTTP statüsüne sahip olan özelliği kontrol etmeliyiz ve eğer 200 değilse bir hata atmalıyız. */

class HttpError extends Error { // (1)

    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

function loadJson(url) { // (2)
    return fetch(url)
        .then(response => {

            if (response.status == 200) {

                return response.json();

            } else {
                
                throw new HttpError(response);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // HttpError: 404 for .../no-such-user.json

/* HTTP Hatalarını diğer hata türlerinden ayırt etmek için özel bir sınıf oluşturuyoruz. responseAyrıca, yeni sınıfın nesneyi kabul eden ve onu hataya kaydeden bir yapıcısı vardır . Böylece hata işleme kodu cevaba erişebilecek.
Ardından, istekte bulunan ve hata işleme kodunu bir araya getirerek, 200 olmayan herhangi bir durumu bir hata olarak değerlendiren url bir işleve yerleştiririz . Bu uygun, çünkü genellikle böyle bir mantığa ihtiyacımız var.
Şimdi console.logdaha yararlı açıklayıcı bir mesaj gösteriyor.
Hatalar için kendi sınıfımıza sahip olmanın harika yanı, bunu kullanarak hata işleme kodunda kolayca kontrol edebilmemizdir instanceof.

Örneğin, bir istekte bulunabiliriz ve sonra 404 alırsak - kullanıcıdan bilgileri değiştirmesini isteyin.

Aşağıdaki kod, GitHub'dan verilen ada sahip bir kullanıcıyı yükler. Böyle bir kullanıcı yoksa, doğru adı ister: */

function demoGithubUser() {

    let name = "nurcan";

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {
            console.log(`Full name: ${user.name}.`);
            return user;
        })
        .catch(err => {

            if (err instanceof HttpError && err.response.status == 404) {

                console.log("No such user, please reenter.");

                return demoGithubUser();

            } else {

                throw err; // (*)
            }
        });
}

demoGithubUser();

/* Lütfen dikkat: .catchburada tüm hataları yakalar, ancak yalnızca "nasıl ele alınacağını bilir" HttpError 404. Bu özel durumda, böyle bir kullanıcı olmadığı anlamına gelir ve .catchbu durumda yeniden dener.

Diğer hatalar için neyin yanlış gidebileceği hakkında hiçbir fikri yoktur. Belki bir programlama hatası veya başka bir şey. Bu yüzden sadece satırda yeniden atar (*). */