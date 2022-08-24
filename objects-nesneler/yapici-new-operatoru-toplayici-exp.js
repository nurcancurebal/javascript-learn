/* new Toplayici fonksiyonunu yazınız
Toplayici(baslangicDegeri) yapıcı fonksiyonunu yazınız.
Yaratacağınız obje:
deger icerisinde o anki değeri tutmalı, başlangıç değeri baslangicDegeri argümanı ile sağlanacaktır.
oku() metodu kendimiz bilgi gireceğiz ve bunu deger'e eklemelidir.
Diğer bir deyişle deger özelliği tüm kullanıcıların girdiği değerlerin baslangicDegeri ile toplamıdır.
Aşağıda bir demosunu görmektesiniz: */

/* let toplayici1 = new Toplayici1(1); // toplayıcıya  1 ile başla.
toplayici1.oku(4); // kullanıcının girdiği değeri toplar.
toplayici1.oku(11); // kullanıcının girdiği değeri toplar.
console.log(toplayici1.deger); // toplamı gösterir. */


function Toplayici(baslangicDegeri) {

    this.deger = baslangicDegeri;

    this.oku = function (a) {

        this.deger += a;
    };
}

let toplayici = new Toplayici(1);

toplayici.oku(4);
toplayici.oku(11);
console.log(toplayici.deger); // 16