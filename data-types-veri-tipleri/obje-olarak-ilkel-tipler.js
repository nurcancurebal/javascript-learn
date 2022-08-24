/* Burada JavaScript’i oluşturan kişiler ikilem ile karşılaşmışlardır:
Karakter dizisi veya sayı gibi ilkel tipler ile birçok şey yapılmak istenebilir. Bunlara metod eklenmesine izin vermek
harika olur.
İlkel tipler olabildiğince hızlı olmalıdır.
Çözüm biraz garip :

İlkel tipler hala ilkel tip olarak kalacak. Tek bir değer istendiği gibi atanabilecek.
Karakter dizisi, sayı, boolean ve sembollerin metodlarına izin verilecek.
Bu yapıldığı yani bu metodlara erişilmeye çalışıldığında özel bir “obje kabı” yaratılacak ve bunun içinde farklı
fonksiyonalite eklenebilecek veya silinebilecek.
“Obje Kapları”(Object wrappers) her ilkel tip için farklıdır bunlar: String, Number, Boolean ve Symbol şeklindedir.
Hepsinin kendine has metodları vardır.

Örneğin str.toUpperCase() bir stringdeki karakterlerin hepsini büyük harfe çevirir.
Çalışması şu şekilde: */

let str = "Merhaba";

console.log(str.toUpperCase()); // MERHABA

/* Basit değil mi? str.toUpperCase() çağırıldığında sırası ile aşağıdakiler olmaktadır.
Karakter dizisi str ilkel bir tiptir. Bundan dolayı özelliğine erişilmek istendiğinde aynı karakter dizisine sahip bir obje
yaratılır. Bu objenin toUpperCase() gibi kullanışlı metodları bulunmaktadır.
Bu metod yeni bir karakter dizisi döndürür ve bu console.log içinde gösterilir.
Özel yaratılan obje imha edilir, str eski ilkel haline döner.
Yani ilkel tipler metodları sağlamış olur fakat yine de “hafif” bir şekilde varlığını sürdürür.

JavaScript motoru bu işlemleri en uygun hale getirmektedir. Belki ekstra bir objenin yaratılmasını tamamen pas geçebilir.
Fakat yine de sanki yaratılmış gibi davranması gerekmektedir.

Sayılar da kendine has metodlara sahiptir. Örneğin toFixed(n) sayıyı yuvarlamaya yarar: */

let n = 1.23456;

console.log(n.toFixed(2)); // 1.23

/* Sayılar ve Karakter Dizisi - Strings bölümlerinde daha fazla metod işlenecektir…

String/Number/Boolean gibi yapıcılar sadece içte kullanım içindir
Java gibi bazı diller bu obje kapsayıcıları doğrudan tanımlamanıza izin verir. Örneğin new Number(1) veya
new Boolean(false) gibi

JavaScript’te de bu eskiden kalma özelliklerden dolayı mümkündür, fakat önerilmez. Bir örnek verilecek olursa: */

console.log(typeof 1); // number

console.log(typeof new Number(1)); // object

// sifir karşılaştırmalarında sorunla yaratabilir:

let sifir = new Number(0);

if (sifir) { // burada sıfır true gelecek çünkü o bir obje

    console.log("Sıfır doğru mu???"); // Sıfır doğru mu???
}

/* Diğer bir yandan new olmadan String/Number/Boolean kullanılması ise tamamen mantıklıdır. Değeri belirtilen ilkel tipe
çevirmeye yarar. */

// Örneğin: 

let num = Number("123"); // karakteri sayıya çevir.

/* null/undefined’ın metodları yoktur.
null ve undifined'ın “obje kabı” yoktur. Bundan dolayı metodları bulunmaz. Böyle baklıdığında bunlara “en ilkel tip”
denebilir. */

// Böyle bir değişkenin özelliğine erişmeye çalışmak hata dödürür:

console.log(null.test); // hata