// Bir düzenli ifade(regular expression) iki parametre alır. Gerekli bir arama modeli ve isteğe bağlı bir bayrak.

// Pattern(Model): Bir kalıp, bir metin veya bir tür benzerlik içeren herhangi bir kalıp olabilir. Örneğin, bir e-postadaki
// istenmeyen e-posta kelimesi, bir e-postada aramak istediğimiz bir kalıp olabilir veya bir telefon numarası biçimindeki
// numara bizim ilgi alanımız olabilir.

// Flags(Bayraklar): düzenli bir ifadede (regular expression) arama türünü belirleyen isteğe bağlı parametrelerdir. Bazı bayrakları görelim:

/* g: tüm metinde bir kalıp aramak anlamına gelen küresel bir bayrak
   i: büyük/küçük harfe duyarsız bayrak (hem küçük hem de büyük harf arar)
   m: çok satırlı 
*/


// RegExp Constructor ile bir desen oluşturma


// Genel bayrak ve büyük/küçük harfe duyarlı olmayan bayrak olmadan düzenli ifade(regular expression) bildirme.

let pattern = 'love';

let regEx = new RegExp(pattern);


// Genel bayrak ve büyük/küçük harfe duyarsız bayrakla düzenli ifade(regular expression) bildirme.


let patternTwo = 'love';

let flag = 'gi';

let regExTwo = new RegExp(patternTwo, flag);



// RegExp nesnesini(objesini) kullanarak bir regex kalıbı bildirme. Deseni ve bayrağı RegExp yapıcısının içine yazma

let regExThree = new RegExp('love', 'gi');



// RegExp Constructor olmadan bir desen(kalıp,model) oluşturma

// Genel bayrak ve büyük/küçük harfe duyarsız bayrakla normal ifade(regular expression) bildirme.

let regExFour = /love/gi;

// Yukarıdaki normal ifade, RegExp yapıcısıyla(regExThree) oluşturduğumuzla aynıdır.