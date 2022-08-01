// throw hata mesajı verir burada random number 5' ten küçük olsada trhen ile throw çıkışı yaparsak toplama işlemini yapmaz
// ama return ile çıkarsak toplama işlemine katılır.

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

    }).catch(error => { // eğer reject çalışırsa bu kodda çalışır; error rejectten gelir; devamı şeklinde çalışır

        throw error // throw: Patlat demektir. Kod bloğuna hata verdirir.
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// randomNumber 5' ten büyük olursa
// PROMISE BASLANGIC
// (node:5404) UnhandledPromiseRejectionWarning: Sayı denk gelemedi!

// randomNumber 5' ten küçük olursa
// PROMISE BASLANGIC
// PROMISE BITIS
// 45