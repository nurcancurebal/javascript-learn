/* -> WeakMap and WeakSet
WeakSet, JavaScript’in WeakSet’teki öğeleri bellekten kaldırmasını engellemeyen özel bir tür Set dir. WeakMap de Map için aynı şeydir.

Çöp Toplama ( Garbage collection ) konusundan bildiğimiz üzere, JavaScript motoru bir değeri ona erişebildiği(ve potansiyel olarak kullanılabildiği) sürece bellekte tutar.

Örneğin: */

let john = { name: "John" };

// Obje erişebilir, john da onun referansı

// referansın üzerine yazalım (overwrite)
john = null;

console.log(john); // null

// obje daha fazla erişebilir olmadığı için bellekten silinir.
/* Genellikle, bir veri yapısı hafızada bulunduğu sürece onun ögelerine(bir objenin özelliklerine veya bir dizinin elamanlarına) ulaşılabilir ve hafızada tutulabilir kabul edilir.

Normal Mapte bir objeyi anahtar veya değer olarak tutmamızın bir önemi yoktur. Başka referansı olmasa bile bellekte tutulur.

Örneğin: */

let john2 = { name: "John" };

let map = new Map();

map.set(john2, "...");

john2 = null; // referansın üzerine yazalım (overwrite)

// john2 map içinde tutuldu
// map.keys() kullanarak ona ulaşabiliriz

console.log(map); // Map(1) { { name: 'John' } => '...' }


/* -> WeakMap/WeakSet istisnası olarak.

WeakMap/WeakSet nesnenin bellekten kaldırılmasını engellemez.


-> WeakMap ile başlayalım.

Mapten ilk farkı, anahtarlar obje olmalı, ilkel tipte olamaz. */

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // düzgün çalışır (anahtar bir obje)

console.log(weakMap); // WeakMap { <items unknown> }

//*weakMap.set("test", "Whoops"); // Hata verir, çünkü "test" ilkel bir tipte

/* Şimdi, bir nesneyi anahtar olarak kullanırsak ve o nesneye başka referanslar yoksa – otomatik olarak bellekten (ve mapten) kaldırılır. */

let john3 = { name: "John" };

let weakMap3 = new WeakMap();

weakMap3.set(john3, "...");

john3 = null; // referansın üzerine yazalım (overwrite)

// john bellekten silindi!
console.log(weakMap3); // WeakMap { <items unknown> }

/* Yukarıdaki normal Map örneğiyle karşılaştırın. Şimdi eğer john sadece WeakMap anahtarı olarak var olduysa – otomatik olarak silinir.

…Ve WeakMap keys(), values(), entries() metodlarını desteklemez, yineleme yapamayız. Bu yüzden tüm anahtar veya değerleri çekmemizin bir yolu yoktur.

WeakMap sadece bu metodlara sahiptir:

. weakMap.get(key)
. weakMap.set(key, value)
. weakMap.delete(key, value)
. weakMap.has(key)

Neden böyle bir sınırlama var? Teknik sebeplerden dolayı. Nesne diğer tüm referansları (yukarıdaki koddaki john gibi) kaybetmişse, otomatik olarak silinecektir. Ancak teknik olarak, temizleme işlemi yapılırken tam olarak belirtilmemiştir.

JavaScript motoru buna karar verir. Bellek temizliğini hemen gerçekleştirmeyi veya sonradan daha fazla silme işlemi yapılana kadar beklemeyi seçebilir. Bu nedenle, teknik olarak WeakMap’in geçerli eleman sayısı bilinmemektedir. Motor onu temizlemiş veya temizlememiş, veya bunu kısmen yapmış olabilir. Bu nedenle, WeakMap’e bir bütün olarak erişen metodlar desteklenmez.

Şimdi böyle bir şeye nerede ihtiyacımız var?

WeakMap fikri, var olan bir nesne için sadece var olduğu sürece bir şeyler depolayabilmemizdir. Ancak, nesneyi, onun için bir şey depoladığımız gerçeğiyle yaşamaya zorlamıyoruz.

weakMap.put(john, "gizli belgeler");
-- eğer john ölürse, gizli belgeler yok olacak.

Objeler için bir yerde ana depolama alanına sahip olduğumuz ve sadece obje var olduğu sürece amacımıza yönelik ek bilgileri tutmamız gerektiği durumlarda kullanışlıdır.

Bir örnek görelim.

Örneğin, her kullanıcı için ziyaret sayısını tutan bir kodumuz var. Bilgiler bir map’te saklanır: kullanıcı anahtardır ve ziyaret sayısı değerdir. Bir kullanıcı ayrıldığında, ziyaret sayısını artık saklamak istemiyoruz.

Bunun bir yolu, terk eden kullanıcıları takip etmek ve depolamayı manuel olarak temizlemek olabilir: */

let eda = { name: "Eda" };

// map: kullanıcı => ziyaret sayısı
let ziyaretSayisiMap = new Map();

// eda map için anahtardır
ziyaretSayisiMap.set(eda, 123);

// eğer eda bizi terk ederse, ona artık ihtiyacımız yoktur.
eda = null;

console.log(ziyaretSayisiMap); // Map(1) { { name: 'Eda' } => 123 }

// Ama o hala map'te kalmaya devam eder, onu temizlememiz lazım!
console.log(ziyaretSayisiMap.size); // 1
// Ayrıca hafızada da durur, çünkü Map onu anahtar olarak kullanıyor.

// Bir diğer yol WeakMap kullanmak olabilir:

let eda2 = { name: "Eda" };

let ziyaretSayisiMap2 = new WeakMap();

ziyaretSayisiMap2.set(eda2, 123);

// eğer eda bizi terk ederse, ona artık ihtiyacımız yoktur.
eda2 = null;

// WeakMap dışında bir referans yoktur,
// Bu yüzden obje hafıza ve ziyaretSayisiMap'ten otomatik olarak silinir.

/* Sıradan Map ile, bir kullanıcı ayrıldıktan sonra temizlik yapmak sıkıcı bir iş haline gelir: kullanıcıyı yalnızca ana depolama alanından (değişken veya dizi olsun) kaldırmamız değil, aynı zamanda ziyaretSayisiMap gibi ek alanları da temizlememiz gerekir. Ayrıca, kullanıcıların kodun bir yerinde yönetildiği ve ek yapının başka bir yerde olduğu ve kaldırma işlemleri hakkında bilgi almadığı daha karmaşık durumlarda hantal olabilir.

WeakMap işleri daha basit hale getirebilir, çünkü otomatik olarak temizlenir. Yukarıdaki örnekte ziyaret sayısı gibi bilgiler, yalnızca anahtar nesne var olduğunda yaşar.

-> WeakSet benzer şekilde davranır:

. Sete benzer, ancak WeakSete yalnızca nesneler ekleyebiliriz (ilkel değil).
. Bir nesne ona başka bir yerden ulaşılabildiği sürece set içinde var olur
. Set gibi, add, has ve deleteyi destekler, ama size, keys() ve yinelemeleri desteklemez.
Örneğin, bir öğenin kontrol edilip edilmediğini takip etmek için kullanabiliriz: */

let messages = [
    { mesaj: "Merhaba", kimden: "John" },
    { mesaj: "Nasıl gidiyor?", kimden: "John" },
    { mesaj: "Görüşürüz", kimden: "Alice" }
];

// dizi elemanları ile doldur (3 eleman)
let unreadSet = new WeakSet(messages);

// unreadSet'i mesajın okunup okunmadığını görmek için kullanabiliriz
console.log(unreadSet.has(messages[1])); // true
// okuduktan sonra sil
unreadSet.delete(messages[1]); // true

// mesaj geçmişini kaydırdığımızda set otomatik olarak temizlenir
messages.shift();
// unreadSet'i temizlememize gerek yok, şu an 2 elemanı var
// ne yazık ki, öğelerin tam sayısını elde etmek için bir yöntem yoktur, bu yüzden gösteremezsiniz

/* WeakMap ve WeakSetin en dikkate değer sınırlaması, yinelemelerin olmaması ve mevcut tüm içeriğin alınamamasıdır. Bu rahatsız edici görünebilir, ancak aslında WeakMap / WeakSetin ana işlerini yapmasını engellemez – başka bir yerde saklanan / yönetilen nesneler için “ek” veri depolama alanı olur. */