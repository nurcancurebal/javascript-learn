/* -> Sözcüksel ortam ( Lexical Environment )

JavaScript’te çalışan her fonksiyon, kod bloğu bir bütün olarak “Sözcüksel Ortam” adında bir objeye sahiptir.

Bu “Sözcüksel Ortam” iki bölümden oluşur:

1. Ortam Kaydı – tüm yerel değişkenleri ve özelliklerini ( ve ek özellikleri this gibi ) tutan objedir.
2. Dış Sözcüksel Ortam’a referans genelde süslü parantezin dışındaki kod ile ilintilidir.

Öyleyse “değişken” içsel objedeki bir özelliktir, çevresel kayıtlar. “değişkeni almak veya değiştirmek” demek “o objenin özelliğini almak veya değiştirmek” demektir.

Buna evrensel sözcük ortamı denilmektedir, kodun tamamıyla alakalıdır. Tüm tarayıcılarda <script> etiketleri aynı evrensel ortamı paylaşır.

Çevresel Kayıt ( değişken kaynağı ) anlamına gelir ve dışsal referanstır. Evrensel Sözcük Ortamından daha dış ortam bulunmamaktadır. Yani null dur.

. Değişken özel bir iç objenin özelliğidir. Bu obje o anda çalışan kod, fonksiyon ile bağlantılıdır.
. Değişkenlerle çalışmak aslında o objenin özellikleri ile çalışmak demektir.


-> Fonksiyon tanımı
Fonksiyon tanımları özeldir. let değişkenlerine nazaran çalıştırıldıklarında değil de Sözcüksel Ortam yaratıldığında işlenirler, bu da kodun başladığı zamandır.

… Ve bundan dolayı bir fonksiyon tanımından önce çağırılabilir.


-> İç ve dış Sözcüksel Ortamlar
say() fonksiyonu çağrısı sırasında dış değişkenler çağrılır, bu olaya daha detaylı bakacak olursak.

Fonksiyon ilk çalıştığında yeni bir Sözcüksel Ortam otomatik olarak yaratılır. Bu tüm fonksiyonlar için genel bir kuraldır. Bu Sözcüksel Ortam yerel değişkenlerin tutulması ve çağrının tüm parametrelerini tutar.


Fonksiyon çağrıldığında ise iki tane sözcüksel ortam bulunmaktadır: içte olan(fonksiyon çağrısı için) ve dışta olan(evrensel):

. İçte olan sözcüksel ortam say fonksiyonunun o anki durumuna bakar, o anda tek adi degiskeni bulunmaktadır. say("Erdinç") çağrıldığından dolayı say değişkeninin değeri "Erdinç" olur.
. Dış Sözcük Ortamı ise bu durumda Evrensel Sözcük Ortamıdır.

İç Sözcük ortamı outer ile Dış Sözcük Ortamına referans olur.

~ Kod değişkene ulaşmak istediğinde – önce İç Sözcük ortamında arar, daha sonra dış sözcük ortamına bakar ve daha sonra daha dıştakine bakar bu şekilde zincirin en sonuna kadar devam eder

Eğer değişken hiçbir yerde bulunamazsa, sıkı modda hata verir. use strict kullanılmazsa tanımsız değişken yeni bir global değişken yaratır.

Arama olayı bizim yazdığımız kodlarda nasıl işliyor buna bakalım:

. say içindeki console.log adi değişkenine erişmek istediğinde, anında Sözcük Ortamında bulabilir.
. ifade'ye erişmek istediğinde önce fonksiyonun içine bakar fakat orada da bulamayacağından outer referansı takip ederek evrensel sözcük ortamından bu değişkene erişebilir.

Şimdi bölümün ilk başında sorulan sorulara cevap bulunabilir.

~ Bir fonksiyon dışta bulunan değişkenin en son değerini alır.

Bundan dolayı ilk sorunun cevabı Mehmet olacaktır: */

let adi = "Erdinç";

function selamVer() {

    console.log("Merhaba, " + adi);
}

adi = "Mehmet"; // (*)

selamVer(); // Merhaba, Mehmet

/* 
Çalışma akışı şu şekildedir:

1. Evrensel Sözcük ortamında adi:"Erdinç" bulunmaktadır.
2. (*) satırında evrensel değişken değişir, şimdi adi:"Mehmet" bulunmaktadır.
3. selamVer() fonksiyonu çalıştığında adi dğeişkenini dışarıdan alır. Bu dış sözcüksel ortamda değişkenin değeri "Mehmet"tir.


-> Bir Çağrı – Bir Sözcüksel Ortam
Fonksiyon Sözcük Ortamı her fonksiyon çağrıldığında yeniden yaratılır.

Eğer fonksiyon bir kaç defa çağırılırsa her çağrıldığında kendine ait ayrı bir Sözcüksel Ortamı olur, tabi bu ortam o anki çağırılmaya ait yerel değişkenleri ve parametreleri tutar.


-> Sözcüksel Ortam Şartname Objesidir
“Sözcüksel Ortam” bir şartname objesidir. Bu objeyi alıp düzenleyemezsiniz veya doğrudan kullanamazsınız. JavaScript motoru yapabildiğince bu değişkenleri optimize etmeye çalışır, kullanılmayan değişkenleri saf dışı bırakabilir fakat görülen davranışları yukarıda anlatıldığı gibi olmalıdır. */