/* sumInput() fonksiyonunu aşağıdaki şekilde yazınız:

kullanıcının değer girmesini sağlayın.
Eğer kullanıcı boşluk karakteri girerse veya “İptal” tuşuna basar ise(null) işlemi bitirin.
Tüm girilen değerlerin toplamını hesaplayın.
Not: 0 bir sayıdır, eğer giriş sıfır ise lütfen programı durdurmayın. */

function sumInput() {

    let deger = [];

    for (let index = 0; index < arguments.length; index++) {

        if (arguments[index] === "" || arguments[index] === null || !isFinite(arguments[index])) {

            continue;
        }

        deger.push(arguments[index]);
    }

    let toplam = 0;

    for (let index = 0; index < deger.length; index++) {

        toplam += deger[index];
    }

    return toplam;
}

console.log(sumInput(3, 5, '', 0, 7, 'Nurcan'));