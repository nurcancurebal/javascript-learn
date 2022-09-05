/* Tarih ve Zaman
Bu konuda yeni bir gömülmüş obje olan Date anlatılacaktır. Bu obje tarihi ve saati tutar ve tarih/saat yönetimini üstlenir.

Örneğin, bu objeyi sadece saati saklama, modifiye etme için kullanabilirsiniz, veya zaman ölçümü için veya o anki zamanı göstermek için */

/* -> Yaratma
Yeni bir Date objesi yaratmak için new Date() aşağıdaki argümanların biri ile çağrılabilir. */

new Date()
// Argümansız – yeni o anki tarih ve saat ile yeni bir Date objesi oluşturur:

let now = new Date();

console.log(now); // 2022-09-01T21:58:34.001Z, o anki tarih/saati gösterir.


/* -> new Date(milisaniye)

1 Ocak 1970 UCT+0’dan sonra geçen milisaniye(1/1000) ile tarih oluşturulmasıdır */

// `0`  01.01.1970 UTC+0 demektir.
let Jan01_1970 = new Date(0);

console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z

// Buna 24 saat eklemek için, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 60 * 60 * 1000);

console.log(Jan02_1970); // 1970-01-02T00:00:00.000Z

/* 1 ocak 1970’den buyana geçen milisaniyeye timestamp ( zaman damgası ) denir.

Bu tarihin en basit biçimde gösterimidir. Her türlü bu zaman damgasından yeni bir tarih oluşturmak mümkündür. Veya yine herhangi bir tarihten bu zaman damgasını date.getTime() ile almak mümkündür. */

// new Date(tarih_metni)


// -> Eğer bir argüman var ve bu da karakter dizisi(string) ise, Date.parse algoritmasına göre bakılır ve uygunsa tarih oluşturulur.

let date = new Date("2017-01-26");

console.log(date); // 2017-01-26T00:00:00.000Z


// new Date(yil, ay, gün, saat, dakika, saniye, milisaniye)

// Yerel zamanda Date objesi oluşturmak için sadece ilk iki argüman zorunludur.

/* 
*yıl 4 basamaktan oluşmalıdır. 2013 olur, 98 olmaz.
*ay sıfırdan başlar. Yani 0 Ocak, 11 Aralıktır.
*gün parametresi girilmez ise 1 olarak kabul edilir.
*saat/dakika/saniye/milisaniye değerleri girilmez ise 0 olarak kabul edilir. */


new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // Diğer değerler veirlmediği halde yine aynı sonuç alınacaktır.

// En düşün hassasiyet 1ms’dir(1/1000)

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);

console.log(date2); // 2011-01-01T00:03:04.567Z