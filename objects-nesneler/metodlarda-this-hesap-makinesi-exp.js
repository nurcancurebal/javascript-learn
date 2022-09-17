/* hesapMakinesi objesini aşağıdaki üç metod ile oluşturunuz:

oku() veri giriş ekranı gösterir ve iki değeri objenin özelliklerine kaydeder.
topla() kaydedilen değerlerin toplamını döner.
carp() kaydedilen değerlerin çarpımını döner. */

let hesapMakinesi = {

    oku(one, two) {

        this.one = one,
            this.two = two
    },

    topla() {

        return this.one + this.two;
    },

    carp() {

        return this.one * this.two;
    }
};

hesapMakinesi.oku(3, 5);

console.log(hesapMakinesi.topla()); // 8
console.log(hesapMakinesi.carp()); // 15