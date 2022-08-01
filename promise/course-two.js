

main()


async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");
    b = await new Promise(function (resolve, reject) {

        setTimeout(() => {

            resolve(15)
            return;
            console.log("asdasd");

        }, 2000);

    });

    console.log("PROMISE BITIS");

    console.log(b + a);

}