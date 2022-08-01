

main()


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
            return 50 + result;
        })
        .then(result => {
            return 10;
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
            return result + result - result;
        })
        .then(result => {
            throw result + result - result;
        })
        .catch(error => {

            if (typeof error == "number") {

                return error + error

            } else {

                throw error;

            }

        })
        .catch(error => {
            throw "BU SAYI ANANIN AMINA GIRSIN " + error
        })
        .catch(error => {
            return 666
        })
        .finally(() => {
            console.log("ANAN");
        })

    console.log("PROMISE BITIS");

    console.log(b + a);

}