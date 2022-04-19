const a = 5;
const b = 6;
const c = 7;

const jj = c;

const cikarma = function (deger1, deger2, deger3){  // anonim fonksiyon
    const cikar = deger1 - deger2 - deger3;
    return cikar;
}

const toplananlar = toplama(5,6,7);
const cikarilanlar = cikarma(5,6,7);

console.log(toplananlar);
console.log(cikarilanlar);

function toplama(deger1, deger2, deger3){
    const topla = deger1 + deger2 + deger3;
    return topla;
}

const sehirler = ["ankara","istanbul","bursa","izmir"];

sehirler.forEach(function (item, index){
    console.log(index, item)
    console.log(item == "istanbul")
})

