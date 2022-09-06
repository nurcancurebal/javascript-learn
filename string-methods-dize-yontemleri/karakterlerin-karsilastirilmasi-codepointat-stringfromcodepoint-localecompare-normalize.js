/* -> Karakterlerin karşılaştırılması
Karşılaştırmalar bölümünden hatırlanacağı üzere, karakterler birbirileri ile karakter karakter karşılaştırılırlar. Bu
karşılaştırma alfabetik sıraya göre yapılmaktadır.
Buna rağmen bazı gariplikler de mevcuttur.
1. Küçük harf karakterler her zaman büyük harflerden büyüktürler. */

console.log('a' > 'Z'); // true

// 2. Bölgesel karakterler bu sıralamaya girmezler. Yani karşılaştırılamazlar.

console.log('Österreich' > 'Zealand'); // true

/* Eğer ülke isimlerini karşılaştırmak istiyorsanız bu garip sonuçlara neden olabilir. Örneğin Zealand normalde Österreich'ten sonra gelmesi beklenirken önce gelir.
Ne olduğunu anlamak için JavaScript karakter dizilerini nasıl tanımlıyor buna bakmak lazım.
Tük karakter dizileri UTF-16 ile kodlanmıştır. Buna göre: Tüm karakterler sayısal olarak kodlanır. Bu koda göre karakteri
geri döndürecek özel metodlar mevcuttur. */



/* -> str.codePointAt(pos)
Verilen pozisyondaki karakterin kodunu döndürür: */

// Büyük küçük harflerde farklı kodlar döndürülür.

console.log("z".codePointAt(0)); // 122

console.log("Z".codePointAt(0)); // 90



/* -> String.fromCodePoint(code)
Sayısal değere göre karakter dönderir. */

console.log(String.fromCodePoint(90)); // Z

// Ayrıca \u ile birlikte kodun hexa decimal değerini kullanarak unicode karakter eklemeniz de mümkündür:

// 90 hexa decimal sistemde 5a ya denk gelmektedir.
console.log('\u005a'); // Z

// 65..220 arasında sayısal değeri olan ( latin alfabesi ve bunun yanında sayılar vs. ) karakterleri ekrana basalım:

let str = '';

for (let i = 65; i <= 220; i++) {

    str += String.fromCodePoint(i);
}

console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

/* Gördüğünüz gibi önce büyük harfler, sonrasında bir kaç özel harf ve küçük harfler şeklinde yazılmaktadır.
a > Z olduğu yukarıda açıkça görülmektedir.
Karakterler sayısal kodları ile karşılaştırılmaktadır. Kod büyüdükçe karakter de büyür denebilir. a için yazılan kod (97)
Z(90) kodundan büyüktür.

-- Tüm küçük harfler büyük harflerden sonra gelir. Bundan dolayı küçük harflerin en küçüğü bile büyük harflerin tamamından
büyüktür.

-- Ö gibi karakterler alfabeden tamamen farklı düşünmelidir. Bu karakterlerin kodları küçük harflerden büyüktür. */



/* -> Doğru Karşılaştırma
Karakter karşılaştırmasını “doğru” olarak yapmak göründüğünden daha zordur. Çünkü alfabe dilden dile farklılık
göstermektedir. Aynı görünüşlü harfler farklı alfabelerde farklı yerlerde yer alırlar.

Tarayıcı hangi dil ile karşılaştıracağını bilmeli.

Neyseki tüm modern tarayıcılar(IE10- ek kütüphanelere gerek duymaktadır Intl.JS ) uluslararası dil standardına sahiptir
ECMA 402.

Bu özel bir metod ile farklı dillerde karakterlerin birbirleri ile karşılaştırılabilmesini sağlar. Kuralları şu şekildedir:

str.localeCompare(str2) in çağırılması:

-- Eğer dil kurallarına göre str str2 den büyükse 1 döndürür.
-- Eğer str str2 den küçükse -1 döndürür.
-- Eğer birbirleri ile eşit ise 0 döndürür.
Örneğin: */

console.log('Österreich'.localeCompare('Zealand')); // -1

/* Aslında bu metodun dökümantasyon’da belirtilen iki tane argümanı vardır. Bu argümanlar ile hangi dili kullanmak
istediğinizi veya "a" ile "á"'nın aynı şekilde davranılmasını isteyip istemediğinizi belirtebilirsiniz. */


/* -> Unicod ve Internaller.
-- İleri derecede bilgiler
Bu bölümde karakter dizilerinin daha derin özelliklerine değinilecektir. Bu bilgiler emoji, hiyeroglif veya matematiksel
ifadelerde yardımcı olur. */


/* -> Vekil Çiftler
Çoğu sembol 2-byte kod ile tanımlanır. Çoğu avrupa dili, sayılar ve çoğu hiyeroglifler iki byte ile tanımlanabilir.

Fakat iki byte 65536 sembolü tanımlayabilir ve tüm semboller için bu yeterli değildir. Bundan dolayı nadir semboller bir
çift 2-byte’lık karakter ile tanımlanır. Buna vekil çiftler veya “surrogate pair” adı verilir.

Böyle sembollerin uzunluğu 2'dir: */

console.log('𝒳'.length); // 2, MATHEMATICAL SCRIPT CAPITAL X
console.log('😂'.length); // 2, FACE WITH TEARS OF JOY
console.log('𩷶'.length); // 2, a rare chinese hieroglyph

/* Bu vekil çiftler JavaScript yaratıldığında meydanda yoktu, bundan dolayı dil tarafından doğru olarak işlenemez.

Tek bir karakter olmasına rağmen length(uzunluk) 2 göstermektedir. */

/* String.fromCodePoint ve str.codePointAt az bilinen ve bu ikili karakterlerle uğraşan iki metoddur. Dile entegreleri yakın
zamanda gerçekleşti. Bundan önce sadece String.fromCharCode ve str.charCodeAt bulunmaktadır. Bu metodlar aslında
fromCodePoint/codePointAt ile aynıdır fakat ikili karakterler ile çalışmamaktadırlar.

Örneğin sembolün alınması biraz karmaşıktır, çünkü bu çiftler iki karakterden oluşmaktadırlar. */

console.log('𝒳'[0]); // garip semboller...
console.log('𝒳'[1]); // ...her biri ikilinin parçaları

/* Dikkat ederseniz çifli karakterler tek başlarına bir şey ifade etmezler. Yani yukarıdaki örnekler aslında hiçbir işe
yaramaz.

Teknik olarak, bu çiftler kodlarına bakılarak ayırt edilebilir: Eğer bir karakter 0xd800..0xdbff aralığında ise bu çiftin
ilk karakteri demektir. İkinci karakter ise 0xd800..0xdbff aralığında olmalıdır. Bu aralıklar özel olarak çiftler için
ayrılmıştır. */

// charCodeAt çiftlere uygun değildir, bundan dolayı sadece kodlar verilir.

console.log('𝒳'.charCodeAt(0).toString(16)); // d835, 0xd800 ile 0xdbff arasında
console.log('𝒳'.charCodeAt(1).toString(16)); // dcb3, 0xdc00 ile 0xdfff arasında


/* -> Aksan işaretleri ve normalleştirme
Çoğu dilde temel karakterlerin altına veya üstünü sembol eklenerek oluşturulmuş yeni karakterler mevcuttur.

Örneğin a, àáâäãåā şeklinde karakterlere sahiptir. Bu birleşik karakterler UTF-16 tablosunda kendine has kodlara sahiptir.
Hepsi değil tabi fakat çoğu birleşik karakter bu tabloda yer alır.

Elle bu karakterleri birleştirmek için, UTF-16 bazı unicode karakter kullanmamıza olanak verir. Böylece temel karakterin
üzerine bir veya daha fazla “işaret” eklenerek yeni bir karakter “üretilebilir” */

console.log('S\u0307'); // Ṡ

console.log('S\u0307\u0323'); // Ṩ

/* Böylece çok farklı karakterler elde etmek mümkündür, fakat bu bir probleme neden olmaktadır: iki karakter görünüşte birbiri
ile aynı olabilir, fakat iki farklı unicode’a sahip olabilir.

Örneğin: */

console.log('S\u0307\u0323'); // Ṩ, S + üst nokta + alt nokta
console.log('S\u0323\u0307'); // Ṩ, S + alt nokta + üst nokta

console.log('S\u0307\u0323' == 'S\u0323\u0307'); // false

/* Bunu çözebilmek için “unicode normalleştirme” algoritmaları mevcuttur. Bu karakterleri tek bir “noram” forma çevirir.

str.normalize() şeklinde uygulaması yapılmaktadır. */

console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize()); // true

/* Bizim durumumuzda normalize() fonksiyonu aslında 3 karakteri tek bir karakter haline getirir: \u1e68 ( alt ve üst nokta ile
S harfi) */

console.log("S\u0307\u0323".normalize().length); // 1

console.log("S\u0307\u0323".normalize() == "\u1e68"); // true

/* Gerçekte bu durumla çok nadir karşılaşılır. Bu karakter bile Ṩ oldukça “yaygın” olduğundan, UTF-16 standart tablosu
içerisinde yer almaktadır. */