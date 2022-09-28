/* -> jeneratör. atmak
Yukarıdaki örneklerde gözlemlediğimiz gibi, dış kod, yield.

…Fakat orada da bir hata başlatabilir (atabilir). Bu doğaldır, çünkü bir hata bir tür sonuçtur.

Bir hatayı a'ya iletmek için yieldaramamız gerekir generator.throw(err). Bu durumda, bununla erraynı doğrultuda atılır yield.

Örneğin, burada verim "2 + 2?"bir hataya yol açar: */

function* gen() {

    try {

        let result = yield "2 + 2?"; // (1)

        console.log("The execution does not reach here, because the exception is thrown above");

    } catch (e) {

        console.log(e); // [Error: The answer is not found in my database]
    }
}

let generator1 = gen();

let question1 = generator1.next().value;

generator1.throw(new Error("The answer is not found in my database")); // (2)

/* Satırda jeneratöre atılan hata, ile satırda bir (2)istisnaya yol açar . Yukarıdaki örnekte onu yakalar ve gösterir.(1)yieldtry..catch

Yakalayamazsak, herhangi bir istisna gibi, jeneratörü arama koduna “düşer”.

Çağıran kodun geçerli satırı, ile generator1.throwetiketlenmiş satırdır (2). Böylece onu burada yakalayabiliriz, şöyle: */

function* generate() {

    let result = yield "2 + 2?"; // Bu satırda hata
}

let generator2 = generate();

let question2 = generator2.next().value;

try {

    generator2.throw(new Error("The answer is not found in my database"));

} catch (e) {

    console.log(e); // [Error: The answer is not found in my database]
}

// Oradaki hatayı yakalayamazsak, her zamanki gibi dış çağrı koduna (varsa) düşer ve yakalanmazsa komut dosyasını öldürür.