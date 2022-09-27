/* -> İleri seviye kalıtım
ValidationError1 sınıfı çok genel bir sınıf. Çoğu şey yanlış gidebilir. Özellik eksik olabilir veya farklı formatta olabilir( örneğin age özelliğinin karakter dizisi olması). Bundan dolayı daha özel PropertyRequiredError1 sınıfını yazmakta fayda var. Bu eklenmeyen özellikle ilgili bilgi verecektir. */

class Error {

    constructor(message) {

        this.message = message; // 8. buraya geliyor message: 'No property: name'
        this.name = "Error"; // 9.
    } // 10.
}

class ValidationError1 extends Error {

    constructor(message) {

        super(message); // 7. message: 'No property: name' aşağıdan yukarı doğru super lerden ilerliyor

        this.name = "ValidationError1"; // 11. name: 'Error' u ValidationError1 olarak değiştiriyor
    } // 12.
}

class PropertyRequiredError1 extends ValidationError1 {

    constructor(property) {

        super("No property: " + property); // 6. property: 'name'

        this.name = "PropertyRequiredError1"; // 13. name: ValidationError1 i PropertyRequiredError1 olarak değiştiriyor

        this.property = property; // 14.  property: 'name' this e ekledi
    } // 15.
}

function readUser(json) {

    let user = JSON.parse(json); // 2. olarak buaraya geliyor {age:25} olarak çevirdi

    if (!user.age) { // 3. buraya geldi

        throw new PropertyRequiredError1("age");
    }
    if (!user.name) { // 4. name: undefined

        throw new PropertyRequiredError1("name"); // 5. buradaki 'name' i alıyor ve PropertyRequiredError1 ye gidiyor
    }

    return user;
}

// try..catch ile çalışma örneği

try {

    let user = readUser('{ "age": 25 }'); // 1. olarak kod buradan başlıyor çalışmaya userı alıyor

} catch (err) {

    if (err instanceof ValidationError1) { // 16. err= message: 'No property:name' , name: 'PropertyRequiredError1' , property: 'name' (instanceof: hataların tipini kontrol eder)

        console.log("Invalid data: " + err.message); // Invalid data: No property: name
        console.log(err.name); // PropertyRequiredError1
        console.log(err.property); // name

    } else if (err instanceof SyntaxError) {

        console.log("JSON Syntax Error: " + err.message);

    } else {

        throw err; // bilinmeyen hata, yeniden at
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

console.log(new PropertyRequiredError2("field"));

/* PropertyRequiredError2 {
    message: 'No property: field',
    name: 'PropertyRequiredError2',
    property: 'field'
  } */

// Böylece hata sınıfları kısalmış oldu, özellikle "this.name=..."'i attıktan sonra ValidationError2 daha da kısalmış oldu.