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

/* 1. HTTP Hatalarını diğer hata türlerinden ayırt etmek için özel bir sınıf oluşturuyoruz. responseAyrıca, yeni sınıfın nesneyi kabul eden ve onu hataya kaydeden bir yapıcısı vardır . Böylece hata işleme kodu cevaba erişebilecek.

2. Ardından, istekte bulunan ve hata işleme kodunu bir araya getirerek, 200 olmayan herhangi bir durumu bir hata olarak değerlendiren url bir işleve yerleştiririz . Bu uygun, çünkü genellikle böyle bir mantığa ihtiyacımız var.

3. Şimdi console.logdaha yararlı açıklayıcı bir mesaj gösteriyor.

Hatalar için kendi sınıfımıza sahip olmanın harika yanı, bunu kullanarak hata işleme kodunda kolayca kontrol edebilmemizdir instanceof.

Örneğin, bir istekte bulunabiliriz ve sonra 404 alırsak - kullanıcıdan bilgileri değiştirmesini isteyin.

Aşağıdaki kod, GitHub'dan verilen ada sahip bir kullanıcıyı yükler. Böyle bir kullanıcı yoksa, doğru adı ister: */

function demoGithubUser() {

    let name ="iliakan";

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