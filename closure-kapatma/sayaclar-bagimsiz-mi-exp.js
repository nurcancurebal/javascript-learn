/* sayac ve sayac2 aynı sayacUret fonksiyonu kullanmaktadır.
Bu sayaçlar birbirlerinden bağımsız mıdır? İkinci sayaç ne gösterecek ? */

function sayacUret() {

    let say = 0;

    return function () {

        return say++;
    };
}

let sayac = sayacUret();
let sayac2 = sayacUret();

console.log(sayac()); // 0
console.log(sayac()); // 1
console.log(sayac2()); // ? 0
console.log(sayac2()); // ? 1

/* sayac ve sayac2 sayacUret'in farklı zamanlarda çağırılmasıyla oluşmuştur.
Bundan dolayı birbirinden bağımsız dış sözcüksel çevrelere sahiptirler. Yani her ikisi kendisine ait say değişkenine sahiptir. */