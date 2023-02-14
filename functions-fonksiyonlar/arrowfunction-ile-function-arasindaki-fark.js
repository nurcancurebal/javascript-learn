// 1. Kod fazlalığından kurtarması

/* - Normal fonksiyonlarda fonksiyon parametre almasa dahi ( ) işaretlerini kullanmak zorundayız. Arrow functionda eğer tek bir parametremiz varsa ( ) kullanmamıza gerek kalmıyor. Fonksiyon parametre almıyorsa ( ) yerine _ kullanabiliyoruz. İki veya ikiden fazla parametre var ise mecbur ( ) kullanmak zorundayız. */

const sifirArg = () => { }

const sifirArgAltCizgiIle = _ => { }

const tekArg = arg => { }

const ikiArg = (a, b) => { }


/* - Normal fonksiyonlardan farklı olarak arrow fonksiyonlarda return anahtar kelimesi kullanılmadan da geriye değer döndürülebilir. Bunun için kodun yalnızca bir satırdan oluşması ve süslü parantez içine alınmaması gerekir. Eğer birden fazla satır varsa kod, süslü parantez içerisine alınmalı ve return anahtar kelimesi kullanılmalıdır. */

let fn = () => 1;
fn(); // fn fonkiyonu geriye 1 değerini döndürecek 

let fn1 = (e) => e
fn1(6); // fn1 fonksiyonu parametre olarak girilen değeri döndürecek, sonuc:6

let fn2 = (a, b) => a + b;
fn2(1, 4); // fn2 fonksiyonu parametre olarak girilen değerlerin toplamını döndürecek,sonuc:5

let fn3 = (a, b) => {
    let c = a + b;
    return c;
}
fn3(); // fonksiyonu fn2 fonksiyonu ile aynı işi yapmakta ancak birden fazla satır kod yazdığımız için süslü parantez ve return kullandık


// - Normal fonksiyonlarda iç içe fonksiyon yazabildiğimiz gibi arrow fonksiyonlarda da bunu yapabiliyoruz.

const topla = function (a) {
    return function (b) {
        return a + b;
    }
}

topla(5)(3);  // 8

const topla2 = (a) => (b) => a + b;
topla2(5)(3); // 8 



// 2. Arguments
/* Arrow fonksiyonu normal fonksiyondan ayıran en önemli özelliklerden biri fonksiyonun içerisinde arguments nesnesine ulaşma imkanı vermemesidir. arguments dizi benzeri bir nesnedir ve fonksiyona geçilen argümanlara fonksiyonun içerisinde ulaşma imkanı sağlar.Onun yerine rest operatörü kullanırız. */

const toplama = (...numbers) => {

    console.log(numbers) // [ 2, 5, 7, 8, 9 ] , iletilen argüman bir diziye dönüşecektir.
};

toplama(2, 5, 7, 8, 9);

function argumentsfn(a, b) {
    console.log(arguments); // [Arguments] { '0': 2, '1': 'ali' }
}
argumentsfn(2, 'ali');


let argumentsArrow = (a, b) => {
    console.log(arguments);
}
argumentsArrow(2, 'ali');  // sonuc: arguments is not defined



/* 3. This

- Ok fonksiyonlarında “this” bulunmamaktadır. Eğer yine de this kullanırsanız ok fonksiyonu dışındaki bölümü this
olarak alır. Ayrı bir this kullanmak yerine her zaman bir üstteki bölümden this i alması baya
kullanışlıdır.
this’in kafa karıştıcı olmasının nedeni ise nerede çağırıldığına bağlı olarak değerinin değişmesindendir. Herhangi bir fonksiyonun dışında çağrıldığında, this varsayılan olarak tarayıcıdaki Window nesnesidir.
Örneğin aşağıdaki ok() dışarıda bulunan kullanici.selamVer() metodunu kullanmaktadır:*/

let kullanici = {

    isim: "Nurcan",

    deneme: () => {
        console.log(this.isim); //* undefined ,çünkü arrow function diğer fonksiyonlar gibi önceden okunmuyor kullanici objesi ile aynı anda çalışıyor.
    },

    func() {
        console.log(this.isim); //* Nurcan
    },

    selamVer() {

        console.log(this.isim); //* Nurcan

        let ok = () => {
            console.log(this.isim) //* Nurcan çünkü fonksiyonun içinde çalıştırışdığı için dışarıdaki objeye erişti
        };

        ok();
        func();

        function func() {
            console.log(this.isim); //* undefined , çünkü kendinden önceki blok scope unda isim yok
        }
    }
};

kullanici.selamVer();
kullanici.func();


// - Aşağıda global kapsamda çağrılan merhaba fonksiyonu da Window nesnesine ayarlanacaktır.

function merhaba() {
    console.log(this);
}

merhaba(); // Window { ...

// - Bir objenin içerisinde çağrıldığında ise this objenin kendisine atanacaktır.

obj = {
    sayi: 1,
    sonuc: function () {
        console.log(this.sayi); // 1
    }
}

obj.sonuc();

// - constructor olarak çağrıldığında, this yeni oluşturulan nesneyi ifade eder.

function kisi(age) {
    this.age = age;
}

const Nurcan = new kisi(23);
const Erdinç = new kisi(27);

console.log(Nurcan, Erdinç); // kisi { age: 23 } kisi { age: 27 }

// - Event Listener olarak çağırıldığında this elementin kendisini ifade eder.

/* let button = querySelector("button");

button.addEventListener("click", function () {
    console.log(this); // button
}) */

/* Yukarıda ki örneklerde de gördüğümüz gibi this’in değeri onu çağıran fonksiyon tarafından atanmaktadır. Her fonksiyon kendi this değerini ayarlamaktadır.

Arrow fonksiyonlarda this, fonksiyon nasıl çağrılırsa çağrılsın asla yeni bir değere bağlanmaz. this her zaman onu çevreleyen kodun this değeriyle aynı değerde olacaktır. */

const thisObj = {

    sayi: 18,

    deger: this.sayi,

    fn: function () {
        console.log(this.sayi); // 18
    },

    arw: () => console.log(this.sayi) // undefined
}

console.log(thisObj.deger); // undefined

// başka bir örnek

/* kapsayıcı yürütme fonksiyonunun this değerini kullanır.setinterval e atanmış arrow function kendi this değeri olmadığı için Person functionunun this değerine etki eder. */

function Person() {
    // The Person() fonksiyonu kendini temsil eden this değerini oluşturuyor
    this.age = 0;

    setTimeout(() => {
        this.age++; // this person objesine atıfta bulunur

        console.log("person1: " + this.age); // person1: 1
    }, 1000);

    setTimeout(function growUp() {
        // growUp() fonksiyonuda her fonksiyon gibi kendi this değerini tanımlar bu sayede bir üstteki this değerine artık ulaşamıyor oluruz
        this.age++; // bu işlem Person() fonksiyonundaki age değerine işlemez.
        console.log("person2: " + this.age); // person2: NaN
    }, 2000);
}

const person1 = new Person(); // fonksiyonu nesne olarak çağırıyoruz.



// 4. New operatörü
// Ok işlevleri Nesneleri oluşturmak için kullanılamaz ve kullanıldıklarında hata atarlar.

let Foo = () => { };
let foo = new Foo(); // TypeError: Foo is not a constructor

let Fooo = function () { };
let fooo = new Fooo();
console.log(fooo); // Fooo {}



/* 5. prototype Özelliği Kullanımı
Ok fonksiyonlarının bir prototype özelliği yoktur. */

let Foo2 = () => { };
console.log(Foo2.prototype); // undefined



/* 6. yield anahtar sözcüğünün kullanımı
yield  Anahtar kelime bir ok fonksiyonun gövdesinde kullanılamaz. Sonuç olarak, ok fonksiyonları  generatör olarak kullanılamaz. */