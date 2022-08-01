// Eğer catch hata blogu return dönerse sonrasında eger then varsa o bloga girer. Eğer then throw dönerse ardında catch
// varsa o bloğa girer

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

            return 50 + result; // 50+15= 65
        })
        .then(result => {

            return 10; // result artık 10
        })
        .then(result => {

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

            throw result + result - result; // 10+10-10=10 ama hata mesajı olarak yani catch yoksa duraklatıp hata mesajı verir
        })
        .catch(error => {

            if (typeof error == "number") {

                return error + error; //! 10+10=20 aşağıda then varsa devam eder

            } else {

                throw error;  // reject' te girdiyse hata mesajı verecek
            }
        })
        .catch(error => {

            throw "Eklenen hata " + error; // Eklenen hata Sayı denk gelemedi! hatası verir
        })
        .catch(error => {

            return 666; //! reject' e girdiyse artık 666 döner döndüğü için tekrar then' e girer
        })
        .then(result => { //! resolve yolundan giderse result= 20; reject yolundan giderse result= 666

            return 5000 + result;   // 5000+666= 5666 döner (reject çalışırsa sonuç)
        })
        .finally(() => {

            console.log("Her halükarda ben çalışacağım");
        });

    console.log("PROMISE BITIS");

    console.log(b + a);
};


// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 5050


// PROMISE BASLANGIC
// Her halükarda ben çalışacağım
// PROMISE BITIS
// 5696