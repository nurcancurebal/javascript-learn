/* -> Daha kapsamlı bir örnek: fetch
Ön-yüz programla içinde promise çoğunlukla ağ üzerinde yapılan isteklerde kullanılır. Bunu gerçekleştiren bir örnekle devam edelim.

Burada fetch metodunu uzak bir sağlayıcıdan veri almak için kullanacağız. Bu metod birçok parametreye sahip fakat basitçe kullanımı aşağıdaki gibi: */

let promise = fetch(url);

/* Bu, verilmiş olan url adresine bir istek yollar ve Promise döner. Promise, uzaktaki sağlayıcıdan istenen veriyi aldığında bir response objesi olarak çözümlenir.

Tüm dönütü elde edebilmek için response.text() metodunu çağırmamız gerekir. Bu çağrı, uzak sunucudan tüm içerik alındıktan sonra çözümlenecek olan bir Promise döner.

Aşağıdaki örnekte user.json dosyasına çağrı yapılmakta ve dönüt console.log fonksiyonu ile gösterilmekte: */

fetch('/article/promise-chaining/user.json')
    // uzak sunucudan cevap geldiğinde aşağıdaki `.then` çalışır
    .then(function (response) {
        // response.text() tüm içeriği çözümleyecek olan promise' i döner
        // sonrasında içeriği indirir
        return response.text();
    })
    .then(function (text) {
        // ...ve uzak sunucudan gelen içerik
        console.log(text); // {"name": "nurcan", isAdmin: true}
    });

/* Ayrıca response.json() metodu gelen veriyi doğruca JSON formatına çözümler. Örnekteki senaryoya daha uygun olduğundan kodda bu kısmı değiştirelim.

Arrow fonksiyon kullanarak da daha sade bir biçime ulaşabilmek için kodu tekrar düzenleyelim. */

// yukarıdan farklı olarak response.json() kullanıyoruz
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => console.log(user.name)); // nurcan

/* Şimdi de elde ettiğimiz kullanıcı verisiyle bir şeyler yapalım.

Örneğin, Github sayfasına da bir istekte bulunarak kullanıcı profilini ve avatarını elde edebiliriz. */

// user.json dosyasına istek yolla
fetch('/article/promise-chaining/user.json')

    // json formatına dönüştür
    .then(response => response.json())

    // GitHub sayfasına isteği yolla
    .then(user => fetch(`https://api.github.com/users/${user.name}`))

    // dönütü json formatına dönüştür
    .then(response => response.json())

    // kullanıcı avatar resmini (githubUser.avatar_url) 3 saniye boyunca göster
    .then(githubUser => {

        let img = document.createElement('img');

        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img); // append() sonsuz sayıda yeni elemanı parametre olarak alabilir.

        setTimeout(() => img.remove(), 3000); // (*) remove(), belgeden bir öğeyi (veya düğümü) kaldırır.
    });

/* Yukarıdaki kod bloğu istediğimiz şekilde çalışmakta fakat burada potansiyel bir sorun da mevcut.

(*) işaretli satıra bakıcak olursak, gösterdiğimiz avatar resmi DOM üzerinden silindikten sonra herhangi bir şey yapmak istiyorsak bunu nasıl yapabiliriz? Örneğin sayfa üzerde bu kullanıcının verilerini düzenlemek için bir form göstermek istiyor olalım. Mevcut durumda bunu yapamayız, çünkü son .then işleyicisi herhangi bir değer döndürmemekte. Bundan dolayı, tekrar .then fonksiyonu çağırılamaz.

Mevcut zinciri genişletmek için bu işlem sonucunda bir promise döndürmemiz gerekir. */

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function (resolve, reject) {

        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img); // append() sonsuz sayıda yeni elemanı parametre olarak alabilir.

        setTimeout(() => {
            img.remove(); // remove(), belgeden bir öğeyi (veya düğümü) kaldırır.
            resolve(githubUser);
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => console.log(`Finished showing ${githubUser.name}`));

/* Yapılan değişiklikten sonra img.remove() metodu ayn şekilde 3 saniye sonra çalışacak. Fakat, sonrasında resolve(githubUser) ile kullanıcı bilgilerini bir sonraki zincirde kullanılabilmesi için çözümleyecek.

Genel bir kural olarak, asenkron eylemler her zaman bir promise döndürmelidir.

Bu, asenkron eylemlerden sonra gerçekleştirilecek işlemler için olanak sağlamaktadır. Şu anda, zincirin son işleyicisinden sonra herhangi bir genişlemeye ihtiyaç duymuyor olsak dahi, ileriye dönük olarak buna ihtiyacımız olabileceğini göz önüne almamız gerekir.

Nihayetinde, kodu daha yönetilebilir parçalara ayrıştırarak tekrar kullanılabilir fonksiyonlarımızı yazıyoruz: */

function loadJson(url) {

    return fetch(url)
        .then(response => response.json());
}

function loadGithubUser(name) {

    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {

    return new Promise(function (resolve, reject) {

        let img = document.createElement('img');

        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img); // append() sonsuz sayıda yeni elemanı parametre olarak alabilir.

        setTimeout(() => {

            img.remove(); //remove(), belgeden bir öğeyi (veya düğümü) kaldırır. 3 sn sonra img kaldırılır
            resolve(githubUser); // promise ın resolve çıktısı vermesi yani, then ile devam edebilmesi için

        }, 3000);
    });
}

// fonksiyonları kullanıyoruz:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => console.log(`Finished showing ${githubUser.name}`));
  // ...