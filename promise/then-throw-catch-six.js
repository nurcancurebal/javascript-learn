main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        const randomNumber = Math.floor(((Math.random() * 10) + 1));

        if (randomNumber < 5) {

            resolve(15);

        } else {

            reject("Sayı denk gelemedi!");
        }
    })
        .then(result => {   // resolve çalışırsa çalışır; result resolve' dan gelir

            return 50 + result; // çıktım 65 olur
        })
        .then(result => {

            return 10;  // result' tu hiç kullanmadığım için 65 result' un içinde duruyor çıktıma (yani yeni result) 10 verdi
        })
        .then(result => {

            return result + result - result;    // 10+10-10 = 10 olur
        })
        .then(result => {

            return result + result - result;    // 10+10-10 = 10 olur
        })
        .then(result => {

            return result + result - result;    // 10+10-10 = 10 olur
        })
        .then(result => {

            return result + result - result;    // 10+10-10 = 10 olur
        })
        .then(result => {

            throw result + result - result;     //! throw olduğu için hata mesajı olarak 10 verir; return yapsaydık toplama işlemine katılırdı
        })
        .catch(error => {   //! sonuç doğruda çıksa artık throw ile sonucu bulduğumuz için catch' e girer

            if (typeof error == "number") {  // error then'in içindeki throw'dan geldi; throw hata mesajı' dır ve 10 yazar

                return error + error;   // yani sonuç then' den geliyorsa 10+10 = 20 bulacak return olduğu için b ye 20 atayacak, throw olsaydı hata mesajı olarak 20 yazacaktı

            } else {    //! yani reject çalışırsa reject' in içine yazdığımızı hata mesajı olarak verir

                throw error;
            }
        })
        .finally(() => {

            console.log("Her halükarda ben çalışacağım");
        });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// (node:3904) UnhandledPromiseRejectionWarning: Sayı denk gelemedi!

// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 50

//! then' de return ile sonucu çıktığımızda PROMISE BITIS yazıyor ve sonra toplama işlemini yapıyor
//! then' de throw ile çıktığımızda PROMISE BITIS yazmaz hata mesajı verir ve catch var ise girer