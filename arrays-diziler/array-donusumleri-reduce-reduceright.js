/* reduce/reduceRight
Dizi elemanlarının üzerinden geçilmek istendiğinde forEach kullanmak mümkündür.

arr.reduce ve arr.reduceRight metodları da bu işe yarar fakat daha dallı budaklıdır. Genelde dizilere göre tek bir karakter dizisini hesaplamaya yarar.

Yazımı: */

let value = arr.reduce(function (previousValue, item, index, arr) {
    // ...
}, initial);

/* Fonksiyon elemanlara uygulanır. İkinciden itibaren benzer bir yazıma rastlayabilirsiniz.

item – dizinin o anki elemanı.
index – elemanın pozisyonu.
arr – dizi.
Şimdiye kadar forEach/map gibi. Fakat bir argüman daha var:

previousValue bir önceki fonksiyonun sonucudur initial ilk çağrının sonucudur.
Örnekle anlatmak gerekirse:

Aşağıda dizinin toplamı bir satırda alınmaktadır: */

let arr = [1, 2, 3, 4, 5]

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

/* Burada reduce fonksiyonunun en çok kullanılan 2 argümanlı şekli kullanıldı.

Detaylarına bakılacak olursa:

1. İlk çalıştırıldığında sum başlangıç değerini alır ( reduce'un son argümanı ) 0, ve current dizinin ilk elemanıdır 1. Bundan dolayı sonuç 1 olur.
2. İkinci döngüde sum = 1, buna ikinci dizi elemanı olan 2 eklenir ve döndürülür.
3. Üçüncü döngüde ise sum = 3 ve buna bir sonraki dizi elemanı eklenir ve böyle devam eder.

Form tablosunda bunu daha açık bir şekilde görebilirsiniz. Satırlar fonksiyon çağrılarını göstermektedir.

            toplam	şimdiki	sonuç
birinci çağrı	0 	 1	     1
ikinci çağrı	1 	 2  	 3
üçüncü çağrı	3	 3	     6
dördüncü çağrı	6	 4	    10
beşinci çağrı	10 	 5  	15
Gördüğünüz gibi bir önceki fonksiyonun sonucu sonraki fonksiyonun argümanı olmakta.

Bunun ile birlikte başlangıç değerini pas geçmekte mümkün: */

let arr2 = [1, 2, 3, 4, 5];

// başlangıç değeri silindi, 0 değil.
let result2 = arr2.reduce((sum, current) => sum + current);

console.log(result2); // 15

/* Sonuç aynı. Başlangıç değeri olmadığından dolayı, reduce fonksiyonu diznin ilk elemanını başlangıç değeri olarak almakta ve ikinciden itibaren döngüye başlamaktadır.

Hesaplama tablosu yukarıdaki ile aynı olmaktadır, sadece birinci satır silinir.

Fakat böyle kullanımda çok dikkatli olunmalıdır. Eğer dizi boş ise, recude çağrısı başlangıç değeri olmadığında hata verir.

Örneğin: */

let arr3 = [];

// Hata: Başlangıç değeri olmayan boş dizi ile `reduce` fonksiyonu kullanıldı.
// Eğer başlangıç değeri olsaydı, `reduce` boş diziyi döndürebilirdi.
arr3.reduce((sum, current) => sum + current);

/* Bundan dolayı her zaman başlangıç değeri kullanılması önerilir.

arr.reduceRight metodu da reduce metodu ile aynı işi yapar fakat diziyi sağdan sola doğru okur. */