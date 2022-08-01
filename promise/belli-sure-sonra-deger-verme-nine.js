main();

async function main() {

    let a = 30;

    let b;

    console.log("PROMISE BASLANGIC");

    b = await new Promise((r) => setTimeout(() => r(5), 3000)); // r' ye 3 sn sonra 5 çıktısını ata

    console.log("PROMISE BITIS");

    console.log(b + a);
};

// PROMISE BASLANGIC
// 3 sn sonra
// PROMISE BITIS
// 35