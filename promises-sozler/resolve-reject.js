// async fonksiyonlarda await kullanılır

main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        const randomNumber = Math.floor(((Math.random() * 10) + 1));

        if (randomNumber < 5) {    // doğru ise resolve çalışır yanlış ise reject

            resolve(15);    // doğru ise b ye 15 çıktısını verir

        } else {

            reject("Sayı denk gelemedi!");  // reject bir hata atama işlemidir b ye değer olarak yazdırmaz hata verir
            // yani await ten önceki işlemi yaptıktan sonra awaitin içine bakar ve yanlış ise reject hatası verir 
        }
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// randomNumber 5' ten büyük olursa
// PROMISE BASLANGIC
// (node:748) UnhandledPromiseRejectionWarning: Sayı denk gelemedi!
//! DİKKAT PROMISE BITIS yazmadı

// randomNumber 5' ten küçük olursa
// PROMISE BASLANGIC
// PROMISE BITIS
// 45