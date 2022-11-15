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
        .then(result => {

            return 50 + result; // 15+50= 65

        })
        .then(result => {   // result 65' i kullanmadı

            return 10;  // çıktı 10 verdi
        })
        .then(result => {   // result 10

            return result + result - result; // 10+10-10=10
        })
        .then(result => {

            return result + result - result;
        })
        .then(result => {

            return result + result - result;
        })
        .then(result => {

            return result + result - result;
        })
        .then(result => {

            throw result + result - result; //! 10+10-10=10 ama hata mesajı olarak 10 verir yani toplama işlemine katılmaz ve catch' e girer
        })
        .catch(error => {   // error= 10 geldi

            if (typeof error == "number") {

                return error + error;   // 10+10= 20 yani ilk baştaki randomNumber 5' ten küçük ise b ye 20 atayacak

            } else {

                throw error;    // randomNumber 5' ten büyük ise reject' teki hata mesajını verecek
            }
        })
        .catch(error => {

            throw "Random number 5' ten büyük " + error;    // Random number 5' ten büyük Sayı denk gelemedi!
        })
        .catch(error => {// error= Random number 5' ten büyük Sayı denk gelemedi!

            return 666; // hata mesajını kullanmadık eğer sayı 5' ten büyük gelirse 666 dönecek
        })
        .finally(() => {

            console.log("Her halükarda ben çalışacağım");
        });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// sayı 5' ten büyük geldi
// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 696

// sayı 5' ten küçük geldi
// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 50

// ! ikisininde sonucunu return ile çıktığımız için console.log("PROMISE BITIS"); console.log(b + a); bloklarını işleme soktular