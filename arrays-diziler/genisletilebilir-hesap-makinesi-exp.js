/* Genişletilebilir bir hesap makinesi oluşturun

Calculator"Genişletilebilir" hesap makinesi nesneleri oluşturan bir yapıcı işlevi oluşturun.

Görev iki bölümden oluşmaktadır.

1. İlk olarak, "SAYI operatörü NUMBER" (boşlukla ayrılmış) biçimindeki calculate(str)gibi bir dize alan ve sonucu döndüren yöntemi uygulayın. "1 + 2"Artı +ve eksi anlamalı -.

Kullanım örneği:

let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

2. Ardından addMethod(name, func)hesap makinesine yeni bir işlem öğreten yöntemi ekleyin. Operatörü nameve onu uygulayan iki argümanlı işlevi func(a,b)alır.

*Örneğin, çarpma , bölme /ve gücü ekleyelim **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

. Bu görevde parantez veya karmaşık ifadeler yok.
. Sayılar ve operatör tam olarak bir boşlukla sınırlandırılmıştır.
. Eklemek isterseniz hata işleme olabilir. */


/*
. Lütfen yöntemlerin nasıl saklandığına dikkat edin. Basitçe dahili nesneye eklenirler.
. calculateYöntemde tüm testler ve sayısal dönüşümler yapılır . Gelecekte daha karmaşık ifadeleri desteklemek için genişletilebilir. */

function Calculator() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '), // boşluklardan ayırarak arraye çevirdi

            a = +split[0], // number a çevirdi
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) { // isNaN: sayıya çevirir ve sayı ise false döndürür.

            return NaN;
        }

        return methods[op](a, b); //!!! return methods ' un içine sayıları gönderdi (öğren)
    }

    this.addMethod = function (name, func) {

        methods[name] = func;
    };
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10


let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

console.log(result); // 8