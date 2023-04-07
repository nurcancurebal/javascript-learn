/* Tarihi Ayarla yöntemleri, bir Tarih Nesnesi için tarih değerleri (yıllar, aylar, günler, saatler, dakikalar, saniyeler, milisaniyeler) belirlemenizi sağlar. */

/* - Tarih Yöntemlerini Ayarla
Tarihi Ayarla yöntemleri, bir tarihin bir bölümünü ayarlamak için kullanılır: */

/* Method      	    Description
setDate()	        Günü sayı olarak ayarlayın (1-31)
setFullYear()   	Yılı ayarlayın (isteğe bağlı olarak ay ve gün)
setHours()	        saati ayarla (0-23)
setMilliseconds()	Milisaniyeyi ayarla (0-999)
setMinutes()	    dakikaları ayarla (0-59)
setMonth()      	ayı ayarla (0-11)
setSeconds()	    Saniyeleri ayarla (0-59)
setTime()	        Saati ayarlayın (1 Ocak 1970'ten bu yana milisaniye) */

/* - setFullYear() Yöntemi
Yöntem setFullYear(), bir tarih nesnesinin yılını ayarlar. Bu örnekte 2020'ye: */

const d = new Date();
d.setFullYear(2020);
console.log(d); // 2020-04-07T14:43:21.661Z

// Yöntem isteğe bağlı olaraksetFullYear() ay ve günü ayarlayabilir :

const d2 = new Date();
d2.setFullYear(2020, 11, 3);
console.log(d2); // 2020-12-03T14:43:21.666Z

/* - setMonth() Yöntemi
Yöntem setMonth(), bir tarih nesnesinin ayını ayarlar (0-11): */

const d3 = new Date();
d3.setMonth(11);
console.log(d3); // 2023-12-07T14:43:21.666Z

/* - setDate() Yöntemi
Yöntem setDate(), bir tarih nesnesinin (1-31) gününü ayarlar: */

const d4 = new Date();
d4.setDate(15);
console.log(d4); // 2023-04-15T14:43:21.666Z

/* Yöntem , bir tarihe gün eklemek setDate() için de kullanılabilir : */

const d5 = new Date();
d5.setDate(d5.getDate() + 50);
console.log(d5); // 2023-05-27T14:43:21.667Z

// Gün ekleme ayı veya yılı kaydırırsa, değişiklikler Date nesnesi tarafından otomatik olarak işlenir.

/* -  setHours() Yöntemi
Yöntem setHours(), bir tarih nesnesinin saatlerini ayarlar (0-23): */

const d6 = new Date();
d6.setHours(22);
console.log(d6); // 2023-04-07T19:43:21.667Z

/* - setMinutes() Yöntemi
Yöntem setMinutes(), bir tarih nesnesinin dakikalarını ayarlar (0-59): */

const d7 = new Date();
d7.setMinutes(30);
console.log(d7); // 2023-04-07T14:30:21.667Z

/* - setSeconds() Yöntemi
Yöntem setSeconds(), bir tarih nesnesinin saniyelerini ayarlar (0-59): */

const d8 = new Date();
d8.setSeconds(30);
console.log(d8); // 2023-04-07T14:43:30.668Z



/* - Tarihleri ​​Karşılaştır
Tarihler kolayca karşılaştırılabilir.

Aşağıdaki örnek, bugünün tarihini 14 Ocak 2100 ile karşılaştırır: */

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {

    text = "Today is before January 14, 2100.";

} else {

    text = "Today is after January 14, 2100.";
}

console.log(text); // Today is before January 14, 2100.

// JavaScript ayları 0'dan 11'e kadar sayar. Ocak 0'dır. Aralık 11'dir.