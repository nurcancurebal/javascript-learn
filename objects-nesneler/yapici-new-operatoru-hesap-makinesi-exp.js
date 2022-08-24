/* Yapıcı HesapMakinesi fonksiyonunu yazınız ve aşağıdaki üç fonksiyonu buna uygulayınız:
oku() veri giriş ekranı gösterir ve iki değeri objenin özelliklerine kaydeder.
topla() kaydedilen değerlerin toplamını döner.
carp() kaydedilen değerlerin çarpımını döner. */

let hesapMakinesi1 = new HesapMakinesi();
hesapMakinesi1.oku();

console.log("Toplam=" + hesapMakinesi1.topla());
console.log("Çarpım=" + hesapMakinesi1.carp());


function HesapMakinesi() {

    this.oku = function (a, b) {

        this.a = a;
        this.b = b;
    };

    this.topla = function () {

        return this.a + this.b;
    };

    this.carp = function () {

        return this.a * this.b;
    };
}


let hesapMakinesi = new HesapMakinesi();

hesapMakinesi.oku(4, 5);

console.log("Toplam = " + hesapMakinesi.topla()); // Toplam = 9
console.log("Carpım = " + hesapMakinesi.carp()); // Carpım = 20

//! metodlarda-this-hesap-makinesi-exp başlığı ile karşılaştırma yapabilirsin