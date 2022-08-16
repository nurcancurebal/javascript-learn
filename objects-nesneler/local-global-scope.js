// Local scope: Fonksiyon tanımı eğer kod bloğunun içerisinde tanımlanırsa o bloğun içerisinde her yerde kullanılabilir.
// Fakat dışarıda kullanılamaz.

// Bazen sadece blok içinde o blokta kullanılacak yerel bir fonksiyon yaratmak daha kolay gelebilir. Fakat bu özellik
// problem yaratabilir.
// Örneğin, hosgeldin() fonksiyonunu yas değişkenine göre tanımlayalım. Böylece sonradan kullanılacak hale getirmiş oluruz.

// Aşağıdaki kod çalışmayacaktır:

let yas = 18;

// Şarta göre fonksiyon tanımlama
if (yas < 18) {

    function merhaba() {

        console.log("Merhaba!1");
    }

} else {

    function merhaba() {

        console.log("Merhabalar!2");
    }
}

// merhaba(); // Hata: merhaba() tanımlı değil.

// Burada hata alınmasının nedeni Fonksiyon Tanımının if..else bloğu içerisinde tanımlandığından dolayı dışarıdan
// çağırılamamasından dolayıdır.


let yasTwo = 16;

if (yasTwo < 18) {

    merhaba();       // (çalışır) //* ekran çıktısı aldık

    function merhaba() {

        console.log("Merhaba!3");    // Fonksiyon tanımı bu blok içirisinde her yerden çağırılabilir.
    }

    merhaba();      //  (çalışır) //* ekran çıktısı aldık

} else {

    function merhaba() {     //  Yaş 16 olduğundan burası hiçbir zaman çalışmaz.

        console.log("Merhabalar!4");
    }
}

// Artık if bloğunun dışında olduğumuzdan dolayı burada fonksiyon tanımlarına ulaşamayız.

// merhaba(); // Error: merhaba tanımlı değil.


// Doğru yaklaşım Fonksiyon İfadesini kullanarak if in dışına bir merhaba değişkeni yaratıp ifin içinde bunun tanımını
// yapmak olabilir. Buna global scope denir.

let yasThree = 18; // global scope

let merhaba; // global scope

if (yasThree < 18) {

    merhaba = function () {

        console.log("Merhaba!5");
    };

} else {

    merhaba = function () {

        console.log("Merhabalar!6"); //* ekran çıktısı aldık
    };
}

merhaba(); // artık çalışır. //! bu kodu burada çalıştırmazsak ekrana Merhabalar!6 yazısı gelmez