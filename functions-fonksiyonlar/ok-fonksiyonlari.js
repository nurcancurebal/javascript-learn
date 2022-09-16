/* -> Ok fonksiyonları

Ok fonksiyonları sadece basit şeylerin kolayca yazılması için kullanılmaz.

JavaScript’te bir sürü başka yerde çalıştırılması gereken kolayca yazılacak fonksiyonlara ihtiyacımız olabilir,

Örneğin:

. arr.forEach(func) – her bir forEach döngüsünde func çalıştırılır.
. setTimeout(func) – Varolan planlayıcı tarafında func çalıştırılır.
. … vs.

Bir fonksiyon yaratıp bunu başka bir yerlere iletmek JavaScript’in ruhuna tam da uyan bir işlemdir. Böyle fonksiyonlarda var olan kaynağın (context) kaybolması istenmez. */


/* -> Ok fonksiyonlarının “this”'i yoktur.
ok fonksiyonlarının this'i olmaz. Eğer this erişilmiş ise bu dışarıdaki this'dir.

Örneğin bunu objenin içerisinde dönme amaçlı kullanabiliriz: */

let group1 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList() {

        this.students.forEach(

            student => console.log(this.title + ': ' + student) // Our Group: John, Our Group: Pete, Our Group: Alice
        ); // TODO hani arrow functionda this yoktu? nasıl aldı o zaman
    }
};

group1.showList();

/* Buradaki forEach'te ok fonksiyonu kullanılmıştır, ve this.title tam olarak dışarıdaki showList metodu ile aynı içeriğe sahiptir. Yani group1.title’dır. */ // TODO function da this olsaydı ne olacakti ki? farkı anlamadım?

// Eğer bunu “normal” bir fonksiyon ile yazsaydık, hata alırdık:

let group2 = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList() {

        this.students.forEach(function (student) {

            console.log(this.title + ': ' + student) // undefined: John, undefined: Pete, undefined: Alice // TODO bura neden çalışmadı
        });
    }
};

group2.showList();

/* Hatanın sebebi forEach çalışırken this=undefined varsayılan olarak çalışır, bundan dolayı undefined.title çağrısı yapılır. // TODO neden?

Bu ok fonksiyonlarında işlemez çünkü ok fonksiyonlarında this bulunmamaktadır. */


/* -> Ok fonksiyonları new ile çalıştırılamazlar.
this'in olmaması bazı sınırlamalara neden olur: ok fonksiyonları constructors(yapıcı – kurucu ) olamazlar ve new ile çağırılamazlar. */


/* -> Arrow fonksiyonları ile bind arasındaki fark
=> fonksiyonları ile .bind(this) ile çağırılan normal fonksiyonlar arasında ince bir fark vardır.

.bind(this) fonksiyonun “bağlı versiyonu”'nu oluştururken.
=> fonksiyonu hiçbir bağlılık oluşturmaz. Fonksiyon basit bir şekilde this'e sahip değildir. this'in aranması aynı normal fonksiyonlardaki gibi dışarıdaki sözcüksel ortamda aranması ile son bulur. */

/* -> Ok fonksiyonlarının “argümanları” olmaz.
Ok fonksiyonlarının argüman değişkenleri olmaz.

Var olan this ve argümanlar ile çağrıyı yönlendirmek istediğimizde (dekoratör) çok yararlı olur.

Örneğin defer(f, ms) fonksiyonu bir fonksiyon alıyor ve çağrıyı ms kadar geciktiren bir saklayıcı ile dönderiyor: */

function defer3(f, ms) {

    return function () {

        setTimeout(() => f.apply(this, arguments), ms)
    };
}

function sayHi(who) {

    console.log('Hello, ' + who); // Hello, John (2 sn sonra)
}

let sayHiDeferred = defer3(sayHi, 2000);

sayHiDeferred("John");

// Aynısı ok fonksiyonu olmadan aşağıdaki gibi görünür:

function defer4(f, ms) {

    return function (...args) {

        let ctx = this;

        setTimeout(function () {

            return f.apply(ctx, args);

        }, ms);
    };
}

// Burada ayrıca args ve ctx değişkenlerinin yaratılması gerekir. Böylece setTimeout içerisindeki fonksiyon bunları alabilir.