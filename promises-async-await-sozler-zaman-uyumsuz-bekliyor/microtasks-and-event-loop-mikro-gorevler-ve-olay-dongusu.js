/* -> Mikro görevler ve olay döngüsü
Söz işleyicileri .then// .catch .finally her zaman eşzamansızdır.

Bir Söz hemen çözüldüğünde bile, // aşağıdaki satırlardaki kod bu işleyicilerden önce yürütülecektir..then.catch.finally

İşte demo: */

let promise = Promise.resolve();

promise.then(() => console.log("promise done"));

console.log("code finished"); // this console.log shows first

/* Çalıştırırsanız, önce görürsünüz code finishedve sonra promise done.

Bu garip, çünkü söz kesinlikle baştan yapılıyor.

Tetik neden .thendaha sonra oldu? Neler oluyor? */


/* -> mikro görevler
Asenkron görevlerin uygun şekilde yönetilmesi gerekir. Bunun için standart PromiseJobs, daha çok "mikro görev kuyruğu" (v8 terimi) olarak adlandırılan bir dahili kuyruk belirtir.

Spesifikasyonda belirtildiği gibi :

. Sıra ilk giren ilk çıkar: ilk sıraya alınan görevler önce çalıştırılır.
. Bir görevin yürütülmesi, yalnızca başka hiçbir şey çalışmadığında başlatılır.

Ya da basitçe söylemek gerekirse, bir söz hazır olduğunda, onun .then/catch/finallyişleyicileri kuyruğa alınır. Henüz idam edilmediler. JavaScript motoru kuyruktan bir görev alır ve mevcut koddan kurtulduğunda onu yürütür.

Bu yüzden yukarıdaki örnekte “kod bitti” ilk olarak gösteriliyor.


Söz işleyicileri her zaman bu dahili kuyruktan geçer.

Birden çok zincir varsa .then/catch/finally, bunların her biri eşzamansız olarak yürütülür. Yani, önce kuyruğa alınır ve mevcut kod tamamlandığında ve önceden kuyruğa alınmış işleyiciler bittiğinde yürütülür.

~ Ya sipariş bizim için önemliyse? Sonrasında nasıl code finishediş yapabiliriz promise done?

Kolay, sadece şununla sıraya koyun .then: */

Promise.resolve()
    .then(() => console.log("promise done!"))
    .then(() => console.log("code finished"));

// Şimdi düzen istendiği gibi.


/* -> Olay döngüsü
Tarayıcı içi JavaScript yürütme akışı ve Node.js, bir olay döngüsüne dayanır .

"Olay döngüsü", motorun uyuduğu ve olayları beklediği bir süreçtir. Ortaya çıktıklarında - onları idare eder ve tekrar uyur.

Olaylar, kullanıcı eylemleri gibi harici kaynaklardan veya dahili bir görevin bitiş sinyali olarak gelebilir.

Olay örnekleri:

. mousemove, bir kullanıcı faresini hareket ettirdi.
. setTimeoutişleyici çağrılacak.
. bir harici <script src="...">yüklendi, yürütülmeye hazır.
. bir ağ işlemi, örneğin fetchtamamlandı.
. …vb.

Bir şeyler olur – motor onları idare eder – ve daha fazlasının olmasını bekler (uyurken ve sıfıra yakın CPU tüketirken).


Gördüğünüz gibi burada da bir kuyruk var. Sözde "makro görev kuyruğu" (v8 terimi).

Motor meşgulken bir olay meydana geldiğinde, işlenmesi sıraya alınır.

Örneğin, motor bir ağı işlemekle meşgulken fetch, bir kullanıcı faresini hareket ettirebilir ve yukarıdaki resimde gösterildiği gibi neden olabilir mousemoveve bunun nedeni olabilir.setTimeout

Makro görev kuyruğundaki olaylar, "ilk gelene ilk hizmet" esasına göre işlenir. Motor tarayıcısı ile bittiğinde , olayı, ardından işleyiciyi vb. fetchişler .mousemovesetTimeout

Buraya kadar oldukça basit, değil mi? Motor meşgul, bu nedenle diğer görevler sıraya giriyor.

Şimdi önemli şeyler.

~ Mikro görev kuyruğu, makro görev kuyruğundan daha yüksek önceliğe sahiptir.

Başka bir deyişle, motor önce tüm mikro görevleri yürütür ve ardından bir makro görev alır. Söz verme işlemi her zaman önceliğe sahiptir.

Örneğin, bir göz atın: */

setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

console.log("code");

/* Sıra ne?

1. code önce gösterilir, çünkü bu normal bir eşzamanlı çağrıdır.
2. promise ikinciyi gösterir, çünkü .thenmikro görev kuyruğundan geçer ve geçerli koddan sonra çalışır.
3. timeout en son gösterir, çünkü bu bir makro görevdir.

Bir makro görevi işlerken yeni vaatler oluşturulabilir.

Ya da tam tersi, bir mikro görev bir makro görevi zamanlar (örn setTimeout. ).

Örneğin, burada .thenbir programlar setTimeout: */

Promise.resolve()
    .then(() => {

        setTimeout(() => console.log("timeout"), 0);
    })
    .then(() => {

        console.log("promise");
    });

/* Doğal olarak, promiseönce görünür, çünkü setTimeoutmakro görev daha az öncelikli makro görev kuyruğunda bekler.

Mantıklı bir sonuç olarak, makro görevler yalnızca vaatler motora "boş zaman" verdiğinde gerçekleştirilir. Bu nedenle, hiçbir şey için beklemeyen bir söz işleyiciler zincirimiz varsa, birbiri ardına yürütün, o zaman bir setTimeout(veya bir kullanıcı eylemi işleyicisi) bunların arasında asla çalışamaz. */