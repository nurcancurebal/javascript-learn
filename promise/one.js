main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        setTimeout(() => {

            resolve(15);   // resolve bekletme sonucunda 15 vermiş, await' i b ye atadığımız için b' ye 15 verdi

        }, 2000);
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// PROMISE BASLANGIC
// burada 2 sn bekler
// PROMISE BITIS
// 45