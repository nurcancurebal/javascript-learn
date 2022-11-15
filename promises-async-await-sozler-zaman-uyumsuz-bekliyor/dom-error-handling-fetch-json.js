/* -> Sözlerle hata işleme
Zaman uyumsuz eylemler bazen başarısız olabilir: bir hata durumunda ilgili taahhüt reddedilir. Örneğin fetch, uzak sunucu mevcut değilse başarısız olur. .catchHataları (redleri) işlemek için kullanabiliriz .

Söz zincirleme bu açıdan harika. Bir söz reddedildiğinde, kontrol zincirdeki en yakın reddetme işleyicisine atlar. Bu pratikte çok uygun.

Örneğin, aşağıdaki kodda URL yanlıştır (böyle bir site yok) ve .catch hatayı işler: */

fetch('https://no-such-server.blabla') // rejects(reddeder)
    .then(response => response.json())
    .catch(err => console.log(err)) // TypeError: getirilemedi (metin farklılık gösterebilir)

// Ya da belki sitede her şey yolundadır, ancak yanıt geçerli JSON değildir:

fetch('/') // getirme şimdi iyi çalışıyor, sunucu HTML sayfasıyla yanıt veriyor
    .then(response => response.json()) // reddeder: sayfa HTML, geçerli bir json değil
    .catch(err => console.log(err)) // SyntaxError: Unexpected token < in JSON at position 0

// Tüm hataları yakalamanın en kolay yolu .catch, zincirin sonuna eklemektir:

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise((resolve, reject) => {

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);

        setTimeout(() => {
            img.remove(); // remove: bir veya daha fazla öğeyi Html belgesinden kaldırabiliriz (body nin içindeki image silinir 3 sn sonra.)
            resolve(githubUser); // promise remove olarak çalışacak ve en son githubUser ne çıktı verdiyse o şekilde bitecek( burada githubUser son settimeout işlemi)
        }, 3000);
    }))
    .catch(error => console.log(error.message));

/* Normalde .catch hiç tetiklenmez çünkü hata yoktur. Ancak yukarıdaki vaatlerden herhangi biri reddedilirse (bir ağ sorunu veya geçersiz json veya her neyse), o zaman onu yakalayacaktır.*/