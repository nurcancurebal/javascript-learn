// Bir normal ifade iki parametre alır. Gerekli bir arama modeli ve isteğe bağlı bir bayrak.

// Pattern(Model): Bir kalıp(desen), bir metin veya bir tür benzerlik içeren herhangi bir kalıp(desen) olabilir. Örneğin, bir e-postadaki
// istenmeyen e-posta kelimesi, bir e-postada aramak istediğimiz bir kalıp olabilir veya bir telefon numarası biçimindeki
// numara bizim ilgi alanımız olabilir.

// Flags(Bayraklar): normal bir ifadede arama türünü belirleyen isteğe bağlı parametrelerdir. Bazı bayrakları görelim:

/* g: tüm metinde bir kalıp aramak anlamına gelen küresel bir bayrak
   i: büyük/küçük harfe duyarsız bayrak (hem küçük hem de büyük harf arar)
   m: çok satırlı */

// RegExp Constructor ile bir desen oluşturma


// Genel bayrak ve büyük/küçük harfe duyarlı olmayan bayrak olmadan normal ifade bildirme.

let pattern = 'love';

let regEx = new RegExp(pattern);