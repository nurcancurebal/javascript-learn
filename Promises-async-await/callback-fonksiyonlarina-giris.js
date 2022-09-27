/* -> Callback fonksiyonlarına giriş
Çoğu JavaScript eylemleri asenkron’dur

Aşağıdaki loadScript(src) fonksiyonuna bakacak olursanız: */

function loadScript(src) {

    let script = document.createElement('script');

    script.src = src;

    document.head.append(script);
}

/* Bu fonksiyonun amacı yeni kodu yüklemektir. <script src="...">'yi dökümana ekler ve çalıştırır.

Aşağıdaki gibi kullanılabilir. */

// kodu yükler ve çalıştırır.
loadScript('/my/script.js');

/* Bu fonksiyon “asenkron” olarak adlandırılır, çünkü işlerini hemen değil de daha sonra bitirir.

Çağrı ile script yüklenmeye başlar ve sonrasında çalıştırılır. Yüklerken aşağıdaki kod çalışmayı bitirebilir ve eğer bu yükleme zaman alırsa aynı anda diğer kodlar da çalışabilir. */

loadScript('/my/script.js');
// loadScript altındaki kodlar loadScript'in bitmesini beklemeden çalışmaktadır.
// ...

/* Diyelimki kod yüklendikten sonra yeni kodu kullanmak istiyor olalım. Yeni fonksiyonlar yaratılmışsa bunları kullanacağımızı varsaylım.

Eğer bunu doğrudan loadScript(…) çağrısı sonrasına yaparsanız çalışmaz: */

loadScript('/my/script.js'); //  "function newFunction() {…}" a sahip olduğunu varsayalım

newFunction(); // böyle bir fonksiyon bulunmamaktadır.

/* Doğal olarak, tarayıcı kodu yükleyecek zaman bulamadı. Bundan dolayı doğrudan yeni fonksiyonu çağırdığında hata meydana geldi. Bundan sonra loadScript fonksiyonu yüklemenin ne durumda olduğunu bildiremez. Script en nihayetinde yüklenir ve sonrasında çalıştırılır, bu kadar. Fakat biz bunun ne zaman olduğunu bilmek istiyoruz. Yüklenen koddaki fonksiyonlar ve değişkenleri kullanmak istiyoruz.

callback fonksiyonunu ikinci bir parametre olarak loadScript e ekleyelim, bu kod yüklendiğinde çalışması lazım. */

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

// Eğer kod içerisindeki bir fonksiyonu çağırmak istiyorsak, callback içerisine yazmalıyız:

loadScript('/my/script.js', function () {
    // callback kod yüklendikten sonra çalışacaktır.
    newFunction(); // artık çalışır.
    // ...
});

/* Fikir: ikinci argüman bir fonksiyondur (genelde isimsiz ) ve eylem tamamlandıktan sonra çalışır.

Aşağıda kodun çalıştırılabilir hali bulunmaktadır: */

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {

    console.log(`Cool, the ${script.src} is loaded`);
    console.log(_); // yüklenmiş kodlar içerisinde bu fonksiyon tanımlı.
});

/* Buna “callback-tabanlı” asenkron programlama tipi denir. Bir fonksiyon asenkron olarak bir iş yapıyorsa callback'i de sunmalıdır. Böylece bundan sonra neyin çalışacağına karar verebiliriz.

Burada loadScript için kullandık, fakat bu genel bir yaklaşımdır. */