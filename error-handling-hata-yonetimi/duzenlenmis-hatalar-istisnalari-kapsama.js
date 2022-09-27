/* -> İstisnaları Kapsama
Hatırlarsanız yukarıdaki readUser “kullanıcıların verilerini okumak” amacıyla yazılmıştı, değil mi? Farklı hatalar olabileceğinden dolayı şimdilik SyntaxError, ValidationError gibi hata sınıflarına sahibiz. Fakat readUser ileride daha da büyüyebilir: yeni kod yeni hatalara neden olacaktır.

Bundan dolayı readUser'ı çağıran fonksiyon hataları ile başa çıkmalıdır. Şu anda birçok if, catch ile kontrol edilip eğer bunlar dahilinde değil ise tekrar hata atma işlemini yapmaktayız. Fakat readUser fonksiyonu daha fazla hataya neden olursa, kendimize: gerçekten de tüm hataları birer birer kontrol etmemiz gerekli mi sorusunu sormalıyız.

Tabiki cevap “Hayır”: Dıştaki kod her zaman “diğerlerinden bir üst seviyede” olmak ister. “veri okuma hatası” gibi bir hata olmak ister. Neden olduğu çok da önemli değildir. Tabi hataların detayları olsa iyi olur fakat sadece ihtiyaç olursa.

Bunlar ışığında ReadError sınıfını yeniden yazacak olursak. Eğer readUser içerisinde bir hata olursa bunu yakalayacak ve ReadError üreteceğiz. Ayrıca orjinal hatanın cause (neden) özelliğine referans vereceğiz. Bundan dolayı dıştaki kod sadece ReadError'u kontrol etmeli.

Aşağıdaki kod ReadError'u tanımlamakta ve readUser ve try..catch'in nasıl kullanılacağını göstermektedir: */

class Error {

    constructor(message) { // message: 'SyntaxError'

        this.message = message;
        this.name = "Error";
    }
}

class ReadError extends Error {

    constructor(message, cause) { // message: SyntaxError , cause: stack: SyntaxError: Unexpected token b in JSON at position 1

        super(message);

        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {

    if (!user.age) {

        throw new PropertyRequiredError("age");
    }

    if (!user.name) {

        throw new PropertyRequiredError("name");
    }
}

function readUser(json) { // json: '{bad json}'

    let user;

    try {

        user = JSON.parse(json); // user: undefined

    } catch (err) { // err= stack: SyntaxError: Unexpected token b in JSON at position 1

        if (err instanceof SyntaxError) {

            throw new ReadError("Syntax Error", err);

        } else {

            throw err;
        }
    }

    try {

        validateUser(user);

    } catch (err) {

        if (err instanceof ValidationError) {

            throw new ReadError("Validation Error", err);

        } else {

            throw err;
        }
    }
}

try {

    readUser('{bad json}'); // 1. olarak kod buradan çalışmaya başladı

} catch (e) {

    if (e instanceof ReadError) {

        console.log(e); // ReadError { message: 'Syntax Error', name: 'ReadError', cause: SyntaxError: Unexpected token b in JSON at position 1 }

        console.log("Original error: " + e.cause); // Original error: SyntaxError: Unexpected token b in JSON at position 1

    } else {

        throw e;
    }
}

/* Yukarıdaki kodda readUser tam da tanımlandığı şekliyle çalışmaktadır – yazım hatalarını yakalar, eğer doğrular ve bilinmeyen hatalar yerine ReadError hatası atar.

Bundan dolayı dıştaki kod instanceof ReadError'u kontrol eder, hepsi bu! Diğer tüm muhtemel hataları listelemeye gerek yok.

Bu yaklaşıma “İstisnaları kapsama” yaklaşımı denilir, “düşük seviye istisnalar”'ı alıp bunları “kapsayarak” ReadError haline getirdik. Böylece daha soyut, ve çağırması kolay bir kod yazmış olduk. Bu kullanım nesne tabanlı dillerde oldukça yaygındır. */