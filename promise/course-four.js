

main()


async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        const randomNumber = Math.floor(((Math.random() * 10) + 1 ));

        if (randomNumber < 5) {

            resolve(15);

        } else {

            reject("Sayı denk gelemedi!");
            
        }

    }).catch(error => {
        throw error // Patlat
    })

    console.log("PROMISE BITIS");

    console.log(b + a);

}