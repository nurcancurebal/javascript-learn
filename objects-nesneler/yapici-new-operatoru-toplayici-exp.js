/* new Toplayici fonksiyonunu yazınız
Toplayici(baslangicDegeri) yapıcı fonksiyonunu yazınız.
Yaratacağınız obje:
deger icerisinde o anki değeri tutmalı, başlangıç değeri baslangicDegeri argümanı ile sağlanacaktır.
oku() metodu kendimiz bilgi gireceğiz ve bunu deger'e eklemelidir.
Diğer bir deyişle deger özelliği tüm kullanıcıların girdiği değerlerin baslangicDegeri ile toplamıdır.
Aşağıda bir demosunu görmektesiniz: */

let toplayici = new Toplayici(1); // toplayıcıya  1 ile başla.
toplayici.oku(5); // kullanıcının girdiği değeri toplar.
toplayici.oku(11); // kullanıcının girdiği değeri toplar.
console.log(toplayici.deger); // toplamı gösterir.