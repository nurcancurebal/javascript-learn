/* -> Gerçek hayattan örnek
Şimdiye kadar, temel anlayışı kazanmak için basit örnekler gördük. Şimdi gerçek hayattaki bir kullanım örneğini gözden geçirelim.

Sayfalandırılmış veriler sağlayan birçok çevrimiçi API vardır. Örneğin, bir kullanıcı listesine ihtiyacımız olduğunda, onu sayfa sayfa getirebiliriz: bir istek önceden tanımlanmış bir sayı (örneğin 100 kullanıcı) döndürür ve sonraki sayfaya bir URL sağlar.

Kalıp çok yaygın, kullanıcılarla ilgili değil, hemen hemen her şeyle ilgili. Örneğin GitHub, taahhütleri aynı, sayfalandırılmış şekilde almaya izin verir:

. URL'ye formda bir istek yapmalıyız https://api.github.com/repos/<repo>/commits.
. 30 taahhütten oluşan bir JSON ile yanıt verir ve ayrıca Linkbaşlıktaki sonraki sayfaya bir bağlantı sağlar.
. Daha sonra bu bağlantıyı bir sonraki istek için, daha fazla taahhüt almak vb. için kullanabiliriz.

Sahip olmak istediğimiz daha basit bir API: taahhütleri olan yinelenebilir bir nesne, böylece bunları şu şekilde gözden geçirebiliriz: */

let repo = 'javascript-tutorial/en.javascript.info'; // Taahhüt almak için GitHub deposu

for await (let commit of fetchCommits(repo)) {

    // process commit(süreç taahhüdü)
}

/* fetchCommitsGerektiğinde istekte bulunarak bizim için taahhüt almak istiyoruz . Ve tüm sayfalama işlerini önemsemesine izin verin, bizim için basit bir for await..of.

Uygulaması oldukça kolay olan zaman uyumsuz oluşturucularla: */

async function* fetchCommits(repo) {

    let url = `https://api.github.com/repos/${repo}/commits`;

    while (url) {

        const response = await fetch(url, { // (1)

            headers: { 'User-Agent': 'Our script' }, // github, kullanıcı aracısı başlığı gerektirir
        });

        const body = await response.json(); // (2) yanıtı JSON (taahhüt dizisi) olarak ayrıştırır

        // (3) sonraki sayfanın URL'si başlıklardadır, ayıklayın
        let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);

        nextPage = nextPage && nextPage[1];

        url = nextPage;

        for (let commit of body) { // (4) verim sayfa bitene kadar birer birer taahhüt eder

            yield commit;
        }
    }
}

/* 1. fetch Uzak bir URL'den indirmek için tarayıcı yöntemini kullanıyoruz . Gerekirse yetkilendirme ve diğer başlıkların sağlanmasına izin verir, burada GitHub User-Agent.
2. Getirme sonucu, yine belirli bir fetchyöntem olan JSON olarak ayrıştırılır.
3. Bir sonraki sayfa URL'sini Linkyanıtın başlığından alabiliriz. Özel bir formatı var, bu yüzden bunun için bir normal ifade kullanıyoruz. Sonraki sayfa URL'si şöyle görünebilir: https://api.github.com/repositories/93253246/commits?page=2GitHub'ın kendisi tarafından oluşturulur.
4. Ardından, alınan tüm taahhütleri veririz ve bittiğinde - bir sonraki while(url)yineleme tetiklenir ve bir istek daha yapılır.

Bir kullanım örneği (konsoldaki taahhüt yazarlarını gösterir): */

(async () => {

    let count = 0;

    for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

        console.log(commit.author.login);

        if (++count == 100) { // 100 taahhütte duralım

            break;
        }
    }
})();

/* İstediğimiz buydu. Sayfalandırılmış isteklerin iç mekaniği dışarıdan görünmez. Bizim için sadece taahhütleri döndüren bir zaman uyumsuz jeneratör. */