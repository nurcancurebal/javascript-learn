/* -> Evrensel Objeler
JavaScript dili yazılırken “evrensel obje” diye bir obje fikri vardı. Bu obje tüm değişken ve fonksiyonları içinde barındırarak tarayıcıda bulunan kodların evrensel obje yardımıyla değişkenleri paylaşabileceği düşünülmüştü.

Tabi o zamandan beri JavaScript çok değişti, artık evrensel obje göze batar oldu. Modern JavaScript’te bu objenin yerini module yapısı aldı.

Evrensel obje hala dil içerisinde yer almaktadır.

Tarayıcı için bu “window” ve NodeJs için ise “global”'dir. Diğer ortamlar da kendine ait evrensel objelere sahiptirler.

İki şeyi yapmaktadır:

1. Dil dahilindeki fonksiyon ve değişkenlere erişim sağlar. Örneğin, console.log doğrudan veya window'un bir metodu olarak çağırılabilir. */

console.log("Merhaba"); // Merhaba

// aynısı
window.console.log("Merhaba"); // window is not defined

/* Bu aynı şekilde diğer dahili fonksiyon ve değişkenler için de geçerlidir. Örneğin Array yerine window.Array kullanılabilir.

2. Global var değişkeni tanımlamaya olanak tanır. window özellikleri ile okuma ve yazma sağlanabilir. Örneğin */

var selam = "Merhaba";

function selamVer() {

    console.log(selam);
}

// window'dan okunabilir
console.log(window.selam); // Merhaba (global var)
console.log(window.selamVer); // window is not defined, function (global function declaration)

// window'a yazılabilir. ( yeni global değişken oluşturur.

window.test = 5;

console.log(test); // 5

// …Fakat global obje let/const ile tanımlanmış değişkenler barındıramaz.

let kullaniciOne = "Ahmet";

console.log(kullaniciOne); // Ahmet
console.log(window.kullaniciOne); // tanımsız, let ile tanımlama yapılamaz.
console.log("kullaniciOne" in window); // false


/* -> Evrensel Obje global ortam kaydı değildir
ECMAScript ES-2015 öncesi let/const değişkenleri bulunmamaktaydı, sadece var değişkeni vardı. Global objeler global ortam kaydı olarak kullanılıyordu.

Fakat ES-2015 sonrası, bu varlıklar ayrıldı. Artık evrensel sözcük ortamı ve bunun ortam kaydı. İkinci olarak evrensel obje ve bunun sunduğu bazı “evrensel değişkenler” bulunmaktadır.

Uygulamada evrensel let/const değişkenleri global Evrensel Kayıtta tanımlanmış özelliklerdir fakat evrensel obje’de bulunmamaktadırlar.

Doğal olarak, evrensel objenin “evrensel olan her şeye erişebilir” fikri eski zamanlarda kalmıştır. Artık bu iyi bir şey olarak görülmemektedir. let/const gibi dil özellikleri bunu desteklememektedir, fakat eski olanlara hala destek verir. */


/* -> “window”'un kullanım alanları
Node.JS gibi sunucu ortamlarında, global obje çok az kullanılır. Hatta hiçbir zaman diyebiliriz.

Buna rağmen window bazı durumlarda kullanılmaktadır.

Genelde, kullanmak çok iyi bir fikir olmasa da, aşağıda bazı örnekleri görebilirsiniz.

1. Eğer evrenselde bulunan değişken ile fonksiyon içindeki değişken ismi aynı ise; */

var kullanici = "Evrensel";

function selamVer() {

    var kullanici = "Yerel";

    console.log(window.kullanici); // Evrensel
}

selamVer();

/* Bu sizi çözüme ulaştırır fakat değişkenlere farklı isimler vermek daha iyidir, böylece window kullanmanıza gerek kalmaz. Ayrıca dikkat ederseniz kullanici tanımlamak için var kullanılmıştır. let kullanılmış olsaydı window'dan bu değeri alamazdınız.

2. Global bir değişkenin var olup olmadığına bakar.

Örneğin, XMLHttpRequest'in global bir fonksiyon olup olmadığını kontrol etmek isterseniz, if (XMLHttpRequest) şeklinde yazamazsınız, çünkü XMLHttpRequest yoksa hata verecektir.

Bunu window.XMLHttpRequest üzerinden okuyabilirsiniz. */

if (window.XMLHttpRequest) {

    console.log('XMLHttpRequest tanımlı!')
}

/* Eğer böyle bir global fonksiyon olmasaydı undefined dönerdi.

window olmadan da bunu test etmek mümkündür: */

if (typeof XMLHttpRequest == 'function') {

    /*  XMLHttpRequest? fonksiyonu var mı? */
}

/* Burada window kullanılmasa da (teorik olarak) daha az güvenilirdir, çünkü typeof yerel XMLHttpRequest kullanabilir, halbuki biz evrensel olanını kontrol etmek istiyoruz.

3. Doğru pencereden değişken alma. Bu en uygun kullanım şeklidir.

Tarayıcıda birçok sekme ve pencere açılabilir. Bir pencere diğerini <iframe> içerisinde gösterebilir. Her tarayıcı kendine ait window objesine ve bunun global değişkenlerine sahiptir. JavaScript pencerelerin (aynı site içerisinde ise) birbirlerinden değişken almalarına izin verir.

Bu biraz amacının dışında da olsa şuna benzer:

<iframe src="/" id="iframe"></iframe>

<script>
  console.log( innerWidth ); //  içerideki boyutu olır ( sadece tarayıcı için)
  console.log( Array ); // o anki pencerenin dizisini alır.get Array of the current window (javascript core builtin)

   when the iframe loads...
  iframe.onload = function() {
     iframe'in genişliğini al
    console.log( iframe.contentWindow.innerWidth );
     iframe penceresinin dizisini al.
    console.log( iframe.contentWindow.Array );
  };
</script>
Burada ilk iki console.log var olan pencereyi kullanmaktadır, geriye kalan iki tanesi de iframe'den değişken almaktadır. Bu eğer iframe aynı protocol/host/port’tan besleniyor ise herhangi bir değişken olabilir.


-> “this” ve evrensel objeler
Bazen, this'in değeri tamamen evrensel obje olur. Bu çok nadir de olsa bazı kod sayfalarında görülmektedir.

1. Tarayıcıda this'in global alandaki değeri window'dur: */

// fonksiyonların dışında
console.log(this === window); // true

/* Tarayıcı olmayan çevrelerde ise, this için farklı değer kullanabilirler.

2. Sıkı olmayan modda bir fonksiyon this çağırırsa, evrensel obje olan this'i kabul eder: */

// Sıkı modda değil (!)
function f() {

    console.log(this); // [object Window]
}

f(); // obje olmadan çağırıldı.

/* Tanım gereği, this bu durumda evrensel obje olmalı, Node.JS ortamında olmasa bile this evrensel objedir. Bu eski kodlar ile uyumluluk amacıyladır, sıkı modda this tanımsız olabilir. */


/* -> Polyfill’ler İçin Kullanma
Modern dil özelliklerinin desteğini test etmek için global nesneyi kullanıyoruz.

Örneğin, yerleşik bir “Promise” nesnesinin olup olmadığını test edelim (gerçekten eski tarayıcılarda yoktur): */

if (!window.Promise) {

    console.log("Senin tarayıcın gerçekten çok yaşlı");
}

/* Hiçbiri yoksa (örneğin, eski bir tarayıcıdayız), “pollyfills(çoklu dolgular)” oluşturabiliriz: çevre tarafından desteklenmeyen, ancak modern standartta var olan işlevler ekleyebiliriz. */

if (!window.Promise) {

    // window.Promise = ... // modern dil özelliğinin özel uygulaması
}