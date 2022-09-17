// async fonksiyonlarda await kullanılır

main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise(function (resolve, reject) {

        setTimeout(() => {

            resolve(15);

            return;

            console.log("asdasd");  // return' ün altına her hangi bir kod yazarsan çalışmaz

        }, 2000);
    });

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// PROMISE BASLANGIC
// 2 sn bekledi
// PROMISE BITIS
// 45