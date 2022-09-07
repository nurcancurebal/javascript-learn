/* -> Evrensel Objeler
JavaScript dili yazılırken “evrensel obje” diye bir obje fikri vardı. Bu obje tüm değişken ve fonksiyonları içinde barındırarak tarayıcıda bulunan kodların evrensel obje yardımıyla değişkenleri paylaşabileceği düşünülmüştü.

Tabi o zamandan beri JavaScript çok değişti, artık evrensel obje göze batar oldu. Modern JavaScript’te bu objenin yerini module yapısı aldı.

Evrensel obje hala dil içerisinde yer almaktadır.

Tarayıcı için bu “window” ve NodeJs için ise “global”'dir. Diğer ortamlar da kendine ait evrensel objelere sahiptirler.

İki şeyi yapmaktadır:

1. Dil dahilindeki fonksiyon ve değişkenlere erişim sağlar. Örneğin, console.log doğrudan veya window'un bir metodu olarak çağırılabilir. */

console.log("Merhaba"); // Merhaba

// aynısı
window.console.log("Merhaba");

/* Bu aynı şekilde diğer dahili fonksiyon ve değişkenler için de geçerlidir. Örneğin Array yerine window.Array kullanılabilir.

2. Global var değişkeni tanımlamaya olanak tanır. window özellikleri ile okuma ve yazma sağlanabilir. Örneğin */

var selam = "Merhaba";

function selamVer() {

    console.log(selam);
}

// window'dan okunabilir
console.log(window.selam); // Merhaba (global var)
console.log(window.selamVer); // function (global function declaration)

// window'a yazılabilir. ( yeni global değişken oluşturur.)

window.test = 5;

console.log(test); // 5

// …Fakat global obje let/const ile tanımlanmış değişkenler barındıramaz.

let kullaniciOne = "Erdinç";

console.log(kullaniciOne); // Erdinç
console.log(window.kullaniciOne); // tanımsız, let ile tanımlama yapılamaz.
console.log("kullaniciOne" in window); // false


/* -> Evrensel Obje global ortam kaydı değildir
ECMAScript ES-2015 öncesi let/const değişkenleri bulunmamaktaydı, sadece var değişkeni vardı. Global objeler global ortam kaydı olarak kullanılıyordu.

Fakat ES-2015 sonrası, bu varlıklar ayrıldı. Artık evrensel sözcük ortamı ve bunun ortam kaydı. İkinci olarak evrensel obje ve bunun sunduğu bazı “evrensel değişkenler” bulunmaktadır.

Uygulamada evrensel let/const değişkenleri global Evrensel Kayıtta tanımlanmış özelliklerdir fakat evrensel obje’de bulunmamaktadırlar.

Doğal olarak, evrensel objenin “evrensel olan her şeye erişebilir” fikri eski zamanlarda kalmıştır. Artık bu iyi bir şey olarak görülmemektedir. let/const gibi dil özellikleri bunu desteklememektedir, fakat eski olanlara hala destek verir. */