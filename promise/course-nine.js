

main()


async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise((r) => setTimeout(() => r(5), 3000));

    console.log("PROMISE BITIS");

    console.log(b + a);

}