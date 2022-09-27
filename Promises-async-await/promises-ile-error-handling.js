/* -> Sözlerle işlem hatası
Zaman uyumsuz eylemler bazen başarısız olabilir: bir hata durumunda ilgili taahhüt reddedilir. Örneğin fetch, uzak sunucu mevcut değilse başarısız olur. .catchHataları (redleri) işlemek için kullanabiliriz .

Söz zincirleme bu açıdan harika. Bir söz reddedildiğinde, kontrol zincirdeki en yakın reddetme işleyicisine atlar. Bu pratikte çok uygun.

Örneğin, aşağıdaki kodda URL yanlıştır (böyle bir site yok) ve .catchhatayı işler: */

fetch('https://no-such-server.blabla') // rejects
    .then(response => response.json())
    .catch(err => console.log(err)) // TypeError: failed to fetch (the text may vary)

// Ya da belki sitede her şey yolundadır, ancak yanıt geçerli JSON değildir:

fetch('/') // fetch works fine now, the server responds with the HTML page
    .then(response => response.json()) // rejects: the page is HTML, not a valid json
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
            img.remove();
            resolve(githubUser);
        }, 3000);
    }))
    .catch(error => console.log(error.message));

/* Normalde .catchhiç tetiklenmez çünkü hata yoktur. Ancak yukarıdaki vaatlerden herhangi biri reddedilirse (bir ağ sorunu veya geçersiz json veya her neyse), o zaman onu yakalayacaktır. */