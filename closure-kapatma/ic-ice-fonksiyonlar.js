/* -> İç içe fonksiyonlar
Bir fonksiyon diğer bir fonksiyon içerisinde yaratılırsa buna iç içe fonksiyon denir.

Teknik olarak bu mümkündür.

Kodu organize etmek için şu şekilde kullanabilirsiniz: */

function selamYolcu(adi, soyadi) {

    // yardımcı iç içe fonksiyon.
    function tamIsim() {

        return adi + " " + soyadi;
    }

    console.log("Merhaba, " + tamIsim()); // Merhaba, Erdinç Cürebal
    console.log("Güle Güle, " + tamIsim()); // Güle Güle, Erdinç Cürebal
}

selamYolcu('Erdinç', 'Cürebal');

/* iç içe fonksiyon tamIsım() kullanım kolaylığı sağlaması amacıyla yapılmıştır. Dışta bulunan değişkenlere erişebilir ve tam ismi döndürebilir.

Daha ilginci, iç içe bir fonksiyon geri döndürülebilir: Bu yeni objenin bir özelliği olarak veya sonucun kendisi dönebilir. Sonra başka yerde kullanılabilir. Nerede olduğu önemli olmaksızın, hala aynı dış değişkene erişebilir.

Bunun örneği yapıcı ( constructor ) fonksiyondur ( Yapıcı, "new" operatörü bölümünden inceleyebilirsiniz. ) */

// yapıcı fonksiyon yeni bir obje dönderir.
function Kullanici(isim) {

    // obje metodu iç içe fonksiyon olarak yaratıldı.
    this.Kullanici = function () {

        console.log(isim);
    };
}

let kullanici = new Kullanici("Ahmet");

console.log(kullanici); // Kullanici { Kullanici: [Function (anonymous)] }

// kullanici.selamYolcu(); // metod dışarıda bulunan "isim" değişkenine erişebilir. // TODO not a function hatası veriyor

// Fonksiyonun döndürülmesi örneği:

function sayacUret() {

    let sayac = 0;

    return function () {

        return sayac++; // dışarıda bulunan sayac değişkenine erişimi bulunmaktadır.
    };
}

let sayac = sayacUret();

console.log(sayac()); // 0
console.log(sayac()); // 1
console.log(sayac()); // 2

/* sayacUret örneğine bakılacak olursa. “sayac” fonksiyonunu bir sonraki sayı ile döndürür. Basit olmasının yanında biraz modifiye edilmiş hali pratikte kullanılmaktadır pseudorandom number generator. Yani çok suni bir örnek değildir.

Peki sayaç içeride nasıl çalışmakta?

İçteki fonksiyon çalıştığında sayac++ içeriden dışarıya kadar sayac değişkenini arar. Yukarıdaki örneğe bakılacak olursa, sıralama şu şekilde olacaktır:


1. İçte bulunan fonksiyonun yerel değişkenleri.
2. Dışta bulunan fonksiyonların değişkenleri.
3. …Bu evrensel değişkenlere kadar gider.

sayac orneğinde 2. adımda bulundu. Dıştaki değişken değiştirildiğinde, bulunduğu yerde değişiklik olur. Bundan dolayı sayac++ dıştaki değşikeni bulur ve dıştaki değişkenin Sözcüksel Ortamında bu değişkenin değerini değiştirir. Saki let sayac = 1 yapıyormuş gibi.

Size iki tane sorum var:

1. sayacUret'e ait olmayan bir koddan sayac değişkeni sıfırlanabilir mi? Mesela yukarıdaki örnekte console.log sonrasında.
2. Eğer sayacUret()'i bir kaç defa çağırırsanız – birçok sayac fonksiyonu döndürür. Bunlar birbirinden bağımsız mıdır yoksa aynı sayac'ı mı kullanılar?

Okumaya devam etmeden yukarıdaki sorulara cevap vermeye çalışın.

…Bitti mi?

Peki o zaman, şimdi cevaplar.

1. Hayır sıfırlayamaz. sayac yerel bir değişkendir ve dışarıdan erişilemez.
2. Her sayacUret çağrısı o fonksiyona ait Sözcüksel Ortam üretir, bunun da kendine ait sayac değişkeni bulunmaktadır. Öyleyse sayac değişkenleri her fonksiyon için bağımsızdır denebilir. */

function sayacUret2() {

    let sayac = 0;

    return function () {
        return sayac++; // dışarıda bulunan sayac değişkenine erişimi bulunmaktadır.
    };
}

let sayac1 = sayacUret2();
let sayac2 = sayacUret2();

console.log(sayac1()); // 0
console.log(sayac1()); // 1
console.log(sayac2()); // 0 (independant)

/* Muhetemelen, aklınızda dış değişkenlerin nasıl çalıştığı açıklığa kavuştu. Fakat daha karmaşık olaylar için daha derine inmeye gerek var. */