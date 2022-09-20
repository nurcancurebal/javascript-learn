/* -> “En basit” Objeler
Bildiğiniz gibi objeler anahtar/değer ikilisini tutan ilişkisel dizi şeklinde kullanılabilir.

…Eğer içerisinde kullanıcı-kaynaklı anahtarlar ( örneğin kullanıcının girdiği sözlük tipi veriler) var ise, ilginç bir aksaklık meydana gelir: "__proto_" haricinde tüm anahtarlar doğru çalışır. */

let obj = {};

let key1 = "__proto__";
obj[key1] = "some value";

console.log(obj[key1]); // [object Object] olarak döner ,  "some value" değil!

/* Eğer kullanıcı tipleri __proto__ içerisinde ise atama görmezden gelinir!

Bu aslında çok da sürpriz olmasa gerek. __proto__ farklı bir özelliktir: Ya obje olur veya null, mesela bir karakter dizisi prototip olamaz.

Fakat buradaki amacımız böyle bir davranışı uygulamak değildi, değil mi? Biz key1/value ikililerini kaydetmekti. "__proto__" anahtarı düzgün bir şekilde kaydedilmedi. Bundan dolayı bu bir bugdır. Burada etkisi berbat değildir fakat diğer durumlarda prototip gerçekten değişebilir ve çalışma tamamen istenmeyen bir sonuca varabilir.

Daha kötüsü – genelde geliştiriciler böyle bir ihtimali düşünmezler bile. Bundan dolayı böyle bir bug’lar fark edilebilir ve saldırıya açık hale gelirler, özellikle JavaScript server tarafında kullanıldıysa.

Böyle bir olay sadece __proto__'da meydana gelir diğer tüm özellikler normalde “atanabilir”'dir.

Bu problemden nasıl kaçınılabilir?

Öncelikle Map kullanılabilir, her şey doğru çalışır.

Fakat burada bize Obje yardımcı olabilir, çünkü dili yaratıcılar bu konuları uzun zaman önce düşünmüşler.

__proto__ objenin bir özelliği değildir. Fakat Object.prototype'a erişim sağlar (accessor): */


/* Bundan dolayı, Eğer obj.__proto__ okunur veya atanırsa, ilgili alıcı/ayarlayıcı prototipten çağırılır, böylece [[Prototoy]] alınır/ayarlanır.

Başlangıçta __proto__ , [[Prototype]]a erişmek için bir yol olarak tanımlanmıştır, [[Prototype]] değil.

Eğer, eğer objeyi ilişkisel dizi olarak kullanmak istiyorsanız şu şekilde yapabilirsiniz: */

let obj = Object.create(null);

let key = "__proto__";

obj[key] = "some value";

console.log(obj[key]); // "some value"

/* Object.create(null) prototip’i olmayan boş bir obje yaratır.([[Prototype]] null’dur):


Bundan dolayı __proto__ için atadan kalan alıcı/ayarlayıcı bulunmamaktadır. Artık sıradan bir veri özelliği olarak işlenir, bundan dolayı yukarıdaki örnek doğru bir şekilde çalışır.

Böyle objelere “en basit” veya “saf sözlük objeleri” denir, Çünkü bunlar sıradan objelerden {...} bile daha basittirler.

Bu objelerin kötü tarafı ise, içinde hiçbir varsayılan metod bulunmaz, Örneğin: toString: */

let obj = Object.create(null);

console.log(obj); // Error (no toString)

/* …Fakat bu genelce ilişkili diziler için problem oluşturmaz.

Çoğu obje-bağlantılı metodlar Object.something(...) şeklindedir ve Object.keys(obj) gibi olduğundan prototipte yer almazlar, bundan dolayı şu şekilde çalışmaya devam ederler: */

let chineseDictionary = Object.create(null);
chineseDictionary.hello = "ni hao";
chineseDictionary.bye = "zai jian";

console.log(Object.keys(chineseDictionary)); // hello,bye