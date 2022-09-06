/* Sayaç Objesi

Aşağıda yapıcı fonksiyon ile üretilmiş bir sayac objesi bulunmaktadır.

Çalışır mı? Çalışırsa ne gösterir? */

function Sayac1() {

    let say = 0;

    this.yukselt = function () {

        return ++say;
    };

    this.alcalt = function () {

        return --say;
    };
}

let sayac1 = new Sayac1();

console.log(sayac1.yukselt()); // ? 1
console.log(sayac1.yukselt()); // ? 2
console.log(sayac1.alcalt()); // ? 1

/* Kesinlikle çalışır

İçte bulunan fonksiyonlar aynı dış Sözcüksel Çevreye sahip olduklarından dolayı aynı say değişkenine erişirler: */