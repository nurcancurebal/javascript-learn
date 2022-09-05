/*
-> Sıralı erişim ( Iterable )
Iterable objeleri dizilerin genelleştirilmiş halidir. Bu her objenin for..of döngüsünde kullanılmasına olanak verir.

Diziler zaten tekrarlanabilirdir. Fakat sadece diziler değil, karakter dizileri de tekrarlanabilir.

Sıralı erişim JavaScript çekirdeğince oldukça fazla kullanılır. Varolan operatörler ve metodların birçoğu buna bel bağlar.


-> Symbol.iterator
Sıralı erişimin matığını en iyi şekilde kendimiz bir tane yaparak anlayabiliriz.

Örneğin bir objeniz var, dizi değil, fakat for..of için uygun duruyor.

Örneğin aralik objesi iki sayı arasını tanımlasın.

let aralik = {
  baslangic: 1,
  bitis: 5
}; */

// for..of 'un
// for(let sayi of aralik) ... sayi=1,2,3,4,5 şeklinde çalışmasını istiyoruz.
/* aralik'e sıralı erişim yapabilmek ( for..of ile çalıştırabilmek ) için Symbol.iterator isminde bir metoda sahip olması gerekmektedir. ( özel bir sembol)

. for..of başladığında, bu metod çağırılır ve eğer bulunamazsa hata verir.
. metod iterator döndürmelidir. ( Sıralı erişim objesi) bu obje next metoduna sahip olmalıdır.
. for..of bir sonraki değeri istediğinde next() metodu çağırılacaktır.
. next() metodu sonrasında {done:Boolean, value:any}, done = true dönerse sıralı erişimin bittiği anlaşılır. Aksi halde value yeni değer olacaktır.

Aşağıda aralik fonksiyonunun uygulamasını görebilirsiniz: */

let aralik = {
    baslangic: 1,
    bitis: 5
};

//! for..of çağırıldığında doğrudan aşağıdaki metod çağırılır.
aralik[Symbol.iterator] = function () { //! aralik değişkeninin içinde Symbol(Symbol.iterator): f... olarak ekledi

    // 2. geriye sıralı erişim elemanı döndürür:
    return {
        current: this.baslangic, // bu fonksiyon current: 1, last: 5 oldu currentin değerini this.baslangic' tan aldi
        last: this.bitis,

        // 3. next(), for..of döngüsü tarafından her yinelemede çağrılır
        // for..of her defasında next() metodunu çağırır.
        next() {
            // 4. bu metod geriye şu şakilde obje döndürmeli {done:.., value :...}
            if (this.current <= this.last) {

                return { done: false, value: this.current++ }; // bu fonksiyonun çıktısı {done: false, value: 1} şeklinde verir

            } else {

                return { done: true }; // value değeri olmadığı için çalışmayı bitirdi
            }
        }
    }; // return sonu
};

// çalışmaya başlıyor
for (let num of aralik) { // num' u value' dan aldı

    console.log(num);
}

// 1
// 2
// 3
// 4
// 5

/* Bu kod için bir tane çok önemli problem mevcuttur:

. aralik fonksiyonunun kendisi next() metoduna sahip değildir.
. Bunun yerine, diğer bir obje, aralik[Symbol.iterator]() ile yaratılmaktadır ve bu sıralı erişimi sağlar.

Bundan dolayı sıralı erişim objesi aslında sıralı erişilecek objeden farklıdır.

Teknik olarak aralik içerisine bu metodu yazarak kodu daha sade yapabiliriz.

Aşağıdaki gibi: */

let aralik2 = {
    baslangic: 1,
    bitis: 5,

    [Symbol.iterator]() {

        this.current = this.baslangic;

        return this; // {baslangic: 1, bitis: 5, current: 1, next: f..., Symbol(Symbol.iterator): f...}
    },

    next() {

        if (this.current <= this.bitis) {

            return { done: false, value: this.current++ };

        } else {

            return { done: true };
        }
    }
};

for (let num of aralik2) {
    //! num değerini value dan alır current++ nın arttırılmadan önceki hali current artıyor ama value artmıyor o yüzden current buraya ilk geldiğinde 2 iken value 1 olduğu için 1 i yazarak başlar

    console.log(num);
}
// 1
// 2
// 3
// 4
// 5

/* Şu anda aralik[Symbol.iterator]() gerçek aralik objesini gönderir: gerekli olan next() metodunu dönderir ve o anki tekrar durumunu this.current ile hatırlar. Bazen bu da iyidir. Bunun kötü tarafı ise iki tane for..of olamamasıdır. Çünkü bu döngüler objelerin üzerinden aynı anda geçerler: tek bir tane obje olduğundan dolayı döngünün durumunu paylaşırlar bu da karışıklığa neden olur.


-> Sonsuz sıralı döngüler
Sonsuz sıralı döngüler de yapılabilirdir. Örneğin aralik range.to = Infinity olursa sonsuza kadar gider. Bunun yanında rasgele sayılar üreterek bu sırayı öldürmeyen bir döngü yapmak da mümkündür.

next için bir limitasyon yoktur, istendiği kadar çok değer gönderebilir.

Tabiki böyle bir durumda for..of döngüsü sonsuza kadar devam eder. Bunun yanında bu döngüyü break ile kırmakta mümkündür. */