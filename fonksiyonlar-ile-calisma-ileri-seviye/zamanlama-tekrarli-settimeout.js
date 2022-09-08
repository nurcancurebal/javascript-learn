/* -> Tekrarlı setTimeout
Bir kodu düzenli olarak çalıştırmanın iki yolu bulunmaktadır.

İlki setInterval diğeri ise aşağıdaki gibi kullanılan setTimeout: */

/** instead of:
let timerId = setInterval(() => console.log('tick'), 2000);
*/

let timerId1 = setTimeout(function tick() {

    console.log('tick');

    timerId1 = setTimeout(tick, 2000); // (*)

}, 2000);

/* setTimeout bir sonraki çağrıyı o anki çağrı bittiği ana planlar (*)

Kendini tekrar eden setInterval setTimeout'dan daha esnektir. Bu şekliyle kullanıldığında bir sonraki planlanan çağrı ana çağrının durumuna göre ötelebilir veya daha geriye alınabilir.

Örneğin, her 5 sn’de bir sunucudan veri isteyen bir servis yazmamız gerekmektedir. Fakat sunucuya fazladan yük binerse bunun 10,20,40 sn olarak değiştirilmesi gerekmektedir. */

let delay2 = 5000;

let timerId2 = setTimeout(function request() {

    // ...talep gönder...

    /* if ( sunucu yüklenmesinden dolayı eğer talep iptal olursa) {
         bir sonraki talep için gerekli süreyi uzat.
        delay2 *= 2;
    } */

    timerId2 = setTimeout(request, delay2);

}, delay2);

// Eğer CPU-aç görevleriniz varsa bu görevlerin süresini ölçüp buna göre bir çalışma planı oluşturmak mümkündür.

/* ~ Kendini tekrar eden setInterval iki çağrı arasındaki süreyi garanti eder fakat setTimeout bunu garanti etmez.

Aşağıdaki iki kod parçacığı karşılaştırılacak olursa: */

let i3 = 1;

setInterval(function () {

    func(i3);

}, 100);

// İkincisi tekrarlı setTimeout kullanmaktadır.

let i4 = 1;

setTimeout(function run() {

    func(i4);

    setTimeout(run, 100);

}, 100);

/* setInterval func(i) fonksiyonunu her 100ms’de bir çalıştırır.

~ func çağrıları arasındaki geçen süre koddan daha kısa.

Doğal olan bu aslında çünkü func çalıştığında bu aralığın bir kısmını harcar.

Hatta bu func çalışmasının bizim beklediğimiz 100ms'den fazla olması da mümkündür.

Bu durumda JS Motoru func fonksiyonunun bitmesini bekler, sonra planlayıcıyı kontrol eder eğer zaman geçmişse hiç beklemeden tekrar çalıştırır.

Bu durumda ile karşılaşıldığında fonksiyon hiç beklemeden sürekli çalışır.

Aşağıda ise kendini çağıran setTimeout gösterilmiştir:

~ Kendini çağıran setTimeout arada geçen sürenin aynı olmasını garanti eder.(burada 100ms).

Bunun nedeni yeni çağrının önceki çağrının bitiminde hesaplanmasından dolayıdır. */


/* -> Garbage collection
Bir fonksiyon setInterval/setTimeout'a gönderildiğinde içeride bir referansını oluşturup zamanlayıcıya kaydeder. Bundan dolayı bu fonksiyon Çöp toplama işlemine girmez. Dışarıda hiçbir referans olmasa bile bu fonksiyon yok olmaz. */

// zamanlayıcı çağırana kadar fonksiyon hafızada kalır.
setTimeout(function () {
    //...
}, 100);

/* setInterval metodu için fonksiyon cancelInterval çağırılmadığı sürece hafızada kalır.

Bunun yan etkisi ise, dışarıdaki fonksiyondan veri almak isteyen bir fonksiyon sürekli çağırılır ve ayakta kalırsa dışarıdaki değişkenlerin de sürekliliği devam eder. Asıl bu fonksiyonun kendisinden bile fazla hafıza kaplayabilir. Öyleyse zamanlayıcı ile işiniz bittiğinde en iyisi iptal etmektir. Bu fonksiyonunuz küçük olsa bile yapılması gereken bir işlemdir. */