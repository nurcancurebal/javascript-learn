/* Objeler değerlerin anahtarlı bir şekilde koleksiyon halinde tutulmasını sağlar.

Fakat bazı durumlarda sıralı koleksiyon tutmak gerekebilir, 1., 2. ve 3. elemente ihtiyac olabilir. Örneğin kullanıcıların, ürünlerin, HTML elementlerinin
liste halinde tutulmasını istediğinizde;

Obje kullanmak mantıklı değildir, çünkü elemanların sırasını tutmaz bu objeler. Var olanların “arasına” yeni bir özellik girilemez. Objeler böyle kullanımlara
uygun değildir.

Bunun için özel bir veri yapısı vardır. Array sıralı koleksiyonları tutar. */


/* Özellikler
Dizi özel bir tip objedir. arr[0] ile özelliğe erişme aslında objelerden gelen bir yazım şeklidir. Sayılar anahtar olarak kullanılmaktadır.

Objeleri daha genişleterek sıralı veri koleksiyonları ve length gibi özellikler alması sağlanmıştır. Fakat derininde diziler objedir.

Hatırlarsanız, JavaScript’te sadece 7 basit tip bulunmaktadır. Dizi obje olduğundan obje gibi davranır.

Örneğin referans ile kopyalanır: */

let meyveler = ["Muz"]

let arr = meyveler; // iki değişken aynı diziye referans verir. ( referans ile kopyalama )

console.log(arr === meyveler); // true

arr.push("Armut"); // diziyi referans ile düzenleme

console.log(meyveler); // Muz, Armut - 2 eleman

/* … Fakat dizileri asıl önemli kılan içinde neler olduğudur. JavaScript motoru elemanları ardışık hafıza alanlarında tutmaya çalışır. Böylece diziler çok hızlı şekilde çalışabilirler.

Fakat eğer “sıralı koleksiyon” olan diziden çıkılır ve obje olarak çalıştırılırsa her şey bozulur.

Örneğin, teknik olarak aşağıdaki örnek bunu yansıtır: */

let meyveler1 = []; // Dizi yap

meyveler1[99999] = 5; // boyutundan çokça büyük bir özelliğe veri ata.

meyveler1.yas = 25; // doğrudan özelliğe isim vererek atama yap.

/* Diziler tabanda obje olduğundan dolayı yukarıdaki işlem geçerlidir. İstendiği şekilde özellik eklenebilir.

Fakat bu durumda JavaScript motoru bizim diziler ile değil de normal objeler üzerinde çalıştığımızı sanar. Bundan dolayı diziye özel optimizasyon uygulanmayacaktır.

Diziyi yanlış kullanma biçimleri:

Sayısal olmayan bir özellik ekle arr.test = 5
Delikler yap: arr[0] ekle sonra arr[1000] ekle ( arada hiçbir değer yok)
Diziyi ters sıralı şekilde doldur, arr[1000], arr[999] vs.
Dizileri sıralı şekilde veri tutan özel bir yapı olarak düşünün. Bunun için özel metodlara sahiptir. JavaScript motoru içerisinde diziler çok etkili ve hızlı bir şekilde çalıştırılmak üzere ayarlanmıştır. Sizde bu şekilde kullanmaya hassasiyet gösterin. Eğer özelliği belirtmek istiyorsanız, belki de normal obje kullanmanız gerekmektedir {} */