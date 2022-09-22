// Ayrıca "prototipine" değil, sınıf işlevine bir yöntem atayabiliriz. Bu tür yöntemlere statik denir.

class User1 {

    static staticMethod() {

        console.log(this === User1); // true
    }
}

User1.staticMethod();

// Bu aslında onu bir fonksiyon özelliği olarak atamakla aynı şeyi yapar:

function User2() { }

User2.staticMethod = function () {

    console.log(this === User2); // true
};

User2.staticMethod();

/* Bunun User2.staticMethod() içindeki değeri, sınıf kurucusu User2'ın kendisidir ("noktadan önceki nesne" kuralı).
Genellikle, statik yöntemler, sınıfa ait olan ancak sınıfın herhangi bir nesnesine ait olmayan işlevleri uygulamak için kullanılır.
Örneğin, Article1 nesnelerimiz var ve bunları karşılaştırmak için bir fonksiyona ihtiyacımız var. Doğal seçim aşağıdaki gibi Article1.compare olacaktır: */

class Article1 {

    constructor(title, date) {

        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {

        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article1("HTML", new Date(2019, 1, 1)),
    new Article1("CSS", new Date(2019, 0, 1)),
    new Article1("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article1.compare);

console.log(articles[0].title); // CSS

/* Burada Article1.compare, onları karşılaştırmanın bir yolu olarak makalelerin(articleların) “üzerinde” duruyor. Bu bir makale yöntemi değil, tüm sınıfın yöntemidir. Başka bir örnek, "fabrika" olarak adlandırılan bir yöntem olacaktır.
Bir makale oluşturmak için birkaç yola ihtiyacımız olduğunu hayal edin:

1. Verilen parametrelere göre oluşturun (başlık, tarih vb.).
2. Bugünün tarihini içeren boş bir makale oluşturun.
3. …

Birinci yol, kurucu tarafından uygulanabilir. İkincisi için, sınıfın statik bir yöntemini yapabiliriz.
Burada Article1.createTodays() gibi: */

class Article2 {

    constructor(title, date) {

        this.title = title;
        this.date = date;
    }

    static createTodays() {
        // hatırla, this = Article2
        return new this("Today's digest", new Date());
    }
}

let article2 = Article2.createTodays();

console.log(article2.title); // Today's digest

/* Şimdi her günümüzün özetini oluşturmamız gerektiğinde, Article2.createTodays()'i çağırabiliriz.
Bir kez daha, bu bir makale yöntemi değil, tüm sınıfın yöntemi.
Statik yöntemler ayrıca veritabanı ile ilgili sınıflarda arama yapmak için kullanılır. */

// Makalenin, makaleleri yönetmek için özel bir sınıf olduğunu varsayarsak
// makaleyi kaldırmak için statik yöntem:
Article2.remove({ id: 12345 }); //!  Article2.romevo is not a function