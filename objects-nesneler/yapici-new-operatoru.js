/* -> Yapıcı, "new" operatörü
{ ... } yazımı bir objenin yaratılmasına yarar.Fakat bir objenin benzeri farklı objeler yaratmak istenebilir.Örneğin farklı kullanıcılar, farklı menü değerleri.
Bu yapıcı fonksiyon ve "new" operatörü ile yapılabilir. */


/* -> Yapıcı fonksiyon
Yapıcı fonksiyonlar(Constructor) teknik olarak normal fonksiyonlardır.Tabi bazı farklılıkları vardır:
1- Büyük harfle başlayarak adlandırılırlar.
2- Sadece "new" operatörü kullanıldığında çalışırlar. */


function Kullanici(isim) {

    this.isim = isim;
    this.yoneticiMi = false;
}

let kullanici = new Kullanici("Nurcan");

console.log(kullanici);
console.log(kullanici.isim); // Nurcan
console.log(kullanici.yoneticiMi); // false

/* Fonksiyon new Kullanici(...) şeklinde çalıştığında, aşağıdaki adımlar izlenir:
Yeni bir obje yaratılır ve this bu obje olur.
Fonksiyon gövdesi çalışır.Genelde this modifiye edilir ve yeni özellikler eklenir.
this değeri dönderilir.
Diğer bir deyişle, new Kullanici(...) şöyle yapar: */

function Kullanici2(isim) {

    // this = {};  (üstü kapalı)

    // bu objeye yeni özellikler ekle
    this.isim = isim;
    this.yoneticiMi = false;

    // return this;  (üstü kapalı)
}

// Öyleyse new Kullanici2(“Nurcan”) objesi aşağıdaki gibidir:

let Kullanici2 = {

    isim: "Erdinç",
    yoneticiMi: false
};

/* Eğer başka bir kullanici oluşturmak istiyorsanız, yapmanız gereken new Kullanici("Macide"), new Kullanici("Muzaffer") gibi kullanmaktır.Doğrudan her defasında obje tanımlamaktan daha kısa ve anlaşılması kolaydır.
Yapıcı fonksiyonların amacı – tekrar kullanılabilecek objeleri yaratan kodun uygulanmasıdır.
Dikkat edecek olursanız, herhangi bir fonksiyon yapıcı fonksiyon olabilir.Her fonksiyon new ile çalıştırılabilir, ve yukarda anlatılan algoritmaya göre çalışır. “Yapıcı fonksiyon isimleri büyük harfle başlamalıdır” aslında genel bir ittifaktır, bunu daha da açıklayıcı yapmak için bu fonksiyonlar new ile çağırılmalıdır. */

new function () {
    //…
}

/* Eğer birçok satırdan oluşan kodda amacınız sadece karmaşık bir obje yapmak ise, bunları yapıcı fonksiyon içine aşağıdaki gibi almak mümkündür: */

let kullanici3 = new function () {

    this.isim = "Bal";
    this.yonetici = false;

    // diğer karmaşık yapılar
    // mantıklar veya yerel değişkenler
};

/* Yapıcı fonksiyon tekrar çağırılamaz çünkü hiçbir yere kayıt edilmemiştir, sadece yaratılır ve çağırılır.Böylece yapıcı metod ilerde tekrar kullanılmayacağına garanti verir. */


/* -> Yapıcı modu testi: new.target
İleri düzey konular
Bu olay çok nadir kullanılır.Eğer her şeyi öğrenmek istemiyorsanız burayı geçebilirsiniz. */

/* Fonksiyon içinde, bu fonksiyon new ile mi yoksa new olmadan mı çağırılmış bu new.target özelliği kullanılarak anlaşılabilir.
Normal çağrılarda bunun içerisi boştur fakat new ile çağrılırsa: */

function Kullanici4() {

    console.log(new.target);
}

// new kullanılmadan:
User(); // new.target undefined döndürür.

// new kullanılarak:
new User(); // function Kullanici4 { ... } gibi ekrana fonksiyonu yazar

// new ve normal sözdiziminin(syntax) aynı çalışmasını sağlar:

function Kullanici5(isim) {

    if (!new.target) { // eğer çart yerine getirilmezse

        return new Kullanici5(isim); // ...yeni birisi eklenir.
    }

    this.isim = isim;
}

let timur = Kullanici5("Figen"); // çağrıyı new Kullanici5(isim) fonksiyonuna yönlendirir.

console.log(timur.isim); // timur

/* Bu yaklaşım bazı kütüphanelerde yazımı daha esnek yapabilmek amacıyla kullanılır.Her yerde kullanılması o kadar da iyi değildir.Çünkü new ne olup bittiği hakkında bilgi vermektedir.new ile yeni bir obje yaratıldığını anlayabiliyorsunuz ki bu da iyi bir şeydir. */


/* -> Yapıcı metodun return sözcüğü
Genelde yapıcı metodların return sözcüğü yoktur.Amaçları gerekli olan bilgileri this içine yazmaktır ve bu da otomatik olarak sonuçtur.
Fakat return sözcüğü var ise kurallar basittir:
-- Eğer return obje ile çağırılırsa this yerine bu obje döndürülür.
-- Eğer return ilkel bir obje ile çağırılırsa görmezden gelinir.
Diğer bir deyişle, obje ile return kullanıldığında obje döner, diğer tüm hallerde this döner.
Örneğin aşağıda return edilen obje this yerine dönderilir. */

function BuyukKullanici() {

    this.isim = "Nurcan";

    return { isim: "Erdinç" };  // <-- obje dönderir
}

console.log(new BuyukKullanici().isim);  // Erdinç, objeyi aldık ^^

// Şimdi ise boş bir return cümlesi yazalım(eğer ilkel bir tipte kullanılsa bir şey değiştirmez)

function KucukKullanici() {

    this.isim = "Bal";

    return; // çalışmayı bitirir ve `this`'i döndürür.

}

console.log(new KucukKullanici().isim);  // Bal

// Genelde yapıcılar return sözcüğü kullanmazlar.Buarada amaç bütünlüğün sağlanması için geçerli olan özel bir davranıştır.


/* -> Parantezlerin yazılmaması
Bu arada new 'den sonra eğer bir argüman yoksa parantez kullanmasanız da olur: */

let kullanici6 = new Kullanici; // <-- parantez yok
// aynı şey.
let kullanici7 = new Kullanici();

// Parantezleri yazmamak “iyi yazım stili” değildir.Fakat bu şekilde yazım da mümkündür.


/* -> Yapıcı içerisinde metod
Yapıcı fonksiyon kullanmak objeye mükemmel esneklik sağlar.Yapıcı fonksiyon parametreleri tanımlar ve objenin nasıl yapılacağını, ne konulması gerektiğini belirtir.
Tabiki this'e sadece özelliklerde değil metodlar içerisinde de ekleme yapılabilir.
Örneğin, aşağıdaki new User(isim) verilen isim ile yeni bir obje oluşturur.Bu obje selamVer metoduna sahiptir. */

function Kullanici(isim) {

    this.isim = isim;

    this.selamVer = function () {
        console.log("Benim adım: " + this.isim);
    };
}

let ihsan = new User("İhsan");

ihsan.selamVer(); // Benim adım: İhsan


/* ihsan = {
   name: "İhsan",
   selamVer: function() { ... }
}
*/