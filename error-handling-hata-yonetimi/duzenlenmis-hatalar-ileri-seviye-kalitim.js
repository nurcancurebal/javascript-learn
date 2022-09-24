/* -> İleri seviye kalıtım
ValidationError1 sınıfı çok genel bir sınıf. Çoğu şey yanlış gidebilir. Özellik eksik olabilir veya farklı formatta olabilir( örneğin age özelliğinin karakter dizisi olması). Bundan dolayı daha özel PropertyRequiredError1 sınıfını yazmakta fayda var. Bu eklenmeyen özellikle ilgili bilgi verecektir. */

class ValidationError1 extends Error {

    constructor(message) {

        super(message);

        this.name = "ValidationError1";
    }
}

class PropertyRequiredError1 extends ValidationError1 {

    constructor(property) {

        super("No property: " + property);

        this.name = "PropertyRequiredError1";

        this.property = property;
    }
}

// Usage
function readUser(json) {

    let user = JSON.parse(json);

    if (!user.age) {

        throw new PropertyRequiredError1("age");
    }
    if (!user.name) {

        throw new PropertyRequiredError1("name");
    }

    return user;
}

// Working example with try..catch

try {

    let user = readUser('{ "age": 25 }');

} catch (err) {

    if (err instanceof ValidationError1) {

        console.log("Invalid data: " + err.message); // Invalid data: No property: name
        console.log(err.name); // PropertyRequiredError1
        console.log(err.property); // name

    } else if (err instanceof SyntaxError) {

        console.log("JSON Syntax Error: " + err.message);

    } else {

        throw err; // unknown error, rethrow it
    }
}

/* Yeni yazdığımız PropertyRequiredError1 sınıfının kullanımı kolaydır: sadece new PropertyRequiredError1(property) ismini göndermek yeterli. Okunabilir message yapıcı tarafından üretilir.

dikkat ederseniz PropertyRequiredError1 içerisindeki this.name yapıcısı elle yapılmıştır. Bu biraz gereksiz gelebilir ( this.name = <classname>'in her yeni üretilen sınıf için yazılması). Bunun bir çözümü var elbette. Kendimize ait bir “basic error” ile bu zor olayı omzumuzdan atmak mümkündür. Bunun için yapıcıda this.name için this.constructor.name kullanılarak çözüm sağlanabilir. Sonra bundan kalıtım yapılır.

Örneğin buna MyError diyelim

Aşağıda MyError ve diğer özel hata sınıflarının basitleştirilmiş hali görülmektedir: */

class MyError extends Error {

    constructor(message) {

        super(message);

        this.name = this.constructor.name;
    }
}

class ValidationError2 extends MyError { }

class PropertyRequiredError2 extends ValidationError2 {

    constructor(property) {

        super("No property: " + property);

        this.property = property;
    }
}

// name is correct
console.log(new PropertyRequiredError2("field").name); // PropertyRequiredError2

// Böylece hata sınıfları kısalmış oldu, özellikle "this.name=..."'i attıktan sonra ValidationError2 daha da kısalmış oldu. // TODO