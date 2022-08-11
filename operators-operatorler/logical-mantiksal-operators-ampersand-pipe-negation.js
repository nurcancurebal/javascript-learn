// && ampersand operator example

// Operandları soldan sağa doğru değerlendir.
// Her bir operandı boolean değere çevir. Eğer sonuç yanlış ise dur ve operatörün orijinal değerini döndür.
// Eğer diğer operandlara erişim sağlandıysa ( hepsinin doğru olma durumu ) sondaki operandı döndür.

const checkOne = 4 > 3 && 10 > 5;         // true && true -> true
const checkTwo = 4 > 3 && 10 < 5;         // true && false -> false
const checkThree = 4 < 3 && 10 < 5;       // false && false -> false

// Tüm değerler doğru ise sonuncu değer döner.

console.log(1 && 2 && 3); // 3,  sonuncu değer


// || pipe or operator, example

// Soldan sağa olacak şekilde operandları değerlendirir.
// Her operandın değerini boolean’a çevirir. Eğer sonuç doğru ise durur ve o operandın orjinal değerini döner.
// Eğer tüm operandlar kontrol edildi ve tamamı yanlış ise son operandı döner.
// Eğer VEYA zincirinde bir tane doğru bulunursa o an dönülür. Eğer bulunamazsa sonuncusu döner.

const checkFour = 4 > 3 || 10 > 5;         // true  || true -> true
const checkFive = 4 > 3 || 10 < 5;         // true  || false -> true
const checkSix = 4 < 3 || 10 < 5;          // false || false -> false


// Düşünün bir diziniz var ve içinde null/undefined değerler barındırmakta. Siz ilk veriyi bulduğunuzda döndürmek istiyorsunuz.
// Bunun için || kullanabilirsiniz:

let simdikiKullanici = null;
let varsayilanKullanici = "Nurcan";

let isim = simdikiKullanici || varsayilanKullanici || "isimsiz";

console.log(isim); // "Nurcan" seçilir – ilk doğru değeri bulduğundan dolayı buradan dönülür ve ekrana "Nurcan" çıkar.
// Eğer simdikiKullanici ve varsayilanKullanici yanlış(false) olsaydı "isimsiz" yazısı ekrana çıkacaktı.



// VE && VEYA’dan || önce çalışır.
// VE’nin && önceliği VEYA’ya || göre daha yüksektir. Bundan dolayı VEYA’dan önce çalışır.

// Aşağıdaki örnekte 1 && 0 önce hesaplanır.

console.log( 0 || 1 && 5 ); // 5



//!(Değil) Negation examples

// Operatör tek operanddan oluşur ve aşağıdaki şekilde çalışır:
// Operand değerini boolean tipine çevir: true/false
// Tersini geri döndür.

let checkSeven = 4 > 3;               // true
let checkEight = !(4 > 3);            // false
let isLightOn = true;                 // true
let isLightOff = !isLightOn;          // false
let isMarried = !false;               // true