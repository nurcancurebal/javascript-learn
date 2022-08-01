

main()


async function main() {

    let a = 30;

    let b;


    setTimeout(() => {
        b = 15;
    }, 4000);

    await new Promise((r) => setTimeout(() => r(), 1000)); // 1 saniye verdiğimiz zaman sonuç nan çıkar 5000 ms verdiğimiz zaman b atandığı için sonuç 45 çıkar

    console.log(b + a);

}