index = 0;

while (index < 200000) {    // 200000 defa dönecek

    main();
    index++;
};

async function main() {

    let a = 30;

    let b;

    setTimeout(() => {

        b = 15;

    }, 4000);   // 4000 ms sonra b ye 15 ata

    await new Promise((r) => setTimeout(() => r(), 1000));
    await new Promise((r) => setTimeout(() => r(), 1000));
    await new Promise((r) => setTimeout(() => r(), 1000));
    await new Promise((r) => setTimeout(() => r(), 980)); // toplam 3980 ms bekletir

    console.log(b + a); // normalde kodlar 3980 ms sonra çalışacağı için b nan vermesi gerek ama 0020 ms yi program bazen algılayamayabilir
};

// 200000 defa ekrana bazen Nan bazen ise 45 yazıyor buda işlemci ile alakalıdır bazen milisaniyeleri yakalayamıyor o zaman
// hangisinin önce çalışacağını karıştırıyor