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

    }).catch(error => { // reject çalışırsa çalışacak

        throw error;

    }).finally(() => {  // resolve' de çalışsa reject' te çalışsa bu kod bloğu çalışır

        console.log("Her halükarda ben çalışacağım");
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// randomNumber 5' ten büyük olursa
// PROMISE BASLANGIC
// Her halükarda ben çalışacağım    //! HANGİ SIRADA YAZDIĞINA DİKKAT
// (node:1152) UnhandledPromiseRejectionWarning: Sayı denk gelemedi!

// randomNumber 5' ten küçük olursa
// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 45