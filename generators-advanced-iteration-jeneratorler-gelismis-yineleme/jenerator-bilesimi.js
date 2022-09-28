/* -> Jeneratör bileşimi
Jeneratör kompozisyonu, jeneratörlerin şeffaf bir şekilde birbirine "gömülmesine" izin veren jeneratörlerin özel bir özelliğidir.

Örneğin, bir dizi oluşturmak istiyoruz:

. rakamlar 0..9(karakter kodları 48…57),
. ardından alfabe harfleri a..z(karakter kodları 65…90)
. ardından büyük harfler A..Z(karakter kodları 97…122)

Daha sonra, ondan karakterler seçerek şifreler oluşturmayı planlıyoruz (sözdizimi karakterlerini de ekleyebiliriz), ancak önce diziyi oluşturmamız gerekiyor.

Biz zaten var function* generateSequence(start, end). 3 diziyi birbiri ardına teslim etmek için tekrar kullanalım, birlikte tam olarak ihtiyacımız olan şey bunlar.

Normal bir fonksiyonda, diğer birden çok fonksiyonun sonuçlarını birleştirmek için onları çağırırız, sonuçları saklarız ve sonunda birleştiririz.

Jeneratörler için şunun gibi daha iyisini yapabiliriz: */

function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str1 = '';

for (let code of generatePasswordCodes()) {

    str1 += String.fromCharCode(code);
}

console.log(str1); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

/* Örnekteki özel yield*yönerge kompozisyondan sorumludur. Yürütmeyi başka bir oluşturucuya devreder . Ya da basitçe söylemek gerekirse, jeneratörleri çalıştırır ve verimlerini sanki çağıran jeneratörün kendisi tarafından yapılmış gibi şeffaf bir şekilde dışarıya iletir.

Sonuç, kodu iç içe geçmiş oluşturuculardan satır içine almamızla aynıdır: */

function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) yield i;
}

function* generateAlphaNum() {

    // yield* generateSequence(48, 57);
    for (let i = 48; i <= 57; i++) yield i;

    // yield* generateSequence(65, 90);
    for (let i = 65; i <= 90; i++) yield i;

    // yield* generateSequence(97, 122);
    for (let i = 97; i <= 122; i++) yield i;

}

let str2 = '';

for (let code of generateAlphaNum()) {

    str2 += String.fromCharCode(code);
}

console.log(str2); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

/* Bir jeneratör bileşimi, bir jeneratörün akışını diğerine eklemenin doğal bir yoludur.

İç içe oluşturucudan gelen değer akışı sonsuz olsa bile çalışır. Basittir ve ara sonuçları depolamak için fazladan bellek kullanmaz. */