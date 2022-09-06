/* 1. Kod çalışmaya başkadığında sadece bir tane Sözcüksel Ortam bulunmaktadır:


Başlangıçta sadece sayacUret fonksiyonu bulunmaktadır, çünkü bu fonksiyon tanımıdır. Henüz çalışmadı.

Tüm fonksiyonlar başlangıçta gizli bir [[Environment]] değişkeni alırlar, bu yaratılmaya dair üretilecek Sözcüksel Ortama referans olur. Bunun hakkında henüz bilgi verilmedi, fakat teknik olarak bunu fonksiyonun nerede yaratıldığını bilmesi olarak anlayabilirsiniz.

Burada sayacUret Evrensel Sözcüksel Ortamda yaratıldı. Bundan dolayı [[Environemnt]] bu ortamın referansıdır.

Diğer bir değişle fonksiyon üretildiğinde Sözcüksel Ortama ait bir “baskı” ile üretilir. Bu [[Environment]] gizli bir özellik olarak burayı referans verir.

2. Sonrasında kod sayacUret() çağrısını yapıyor. Aşağıda sayacUret()'in ilk satırı çalıştığındaki durumu gösterilmektedir.


sayacUret() fonksiyonu çağrıldığında, bu fonksiyonun değişkenlerini ve argümanlarını tutmak için Sözcüksel Ortam yaratılır.

Her Sözcüksel Ortam iki şeyi tutar:

1. Yerel değişkenlere ait Ortamsal Kayıtlar. Bu durumda let sayac çalıştırıldığında yerel değişken olarak sayac tutulmaktadır.

2. Dış sözcüksel referans, bu fonksiyonun [[Environment]]'i dir. Burada sayacUret fonksiyonunun [[Environment]]'i evrensel sözcüksel ortama referans verir.

Öyleyse şimdi iki tane sözcüksel ortam bulunmaktadır: evrensel olan ve sayacUret çağrısını yapan( dış referans verir).

3. sayacUret() fonksiyonu çalıştığında küçük bir iç fonksiyon yaratılır.

Fonksiyonun nasıl yaratıldığı yani Fonksiyon Tanımıyla mı yoksa Fonksiyon İfadesiyle mi yaratıldığı önemli değildir. Tüm fonksiyonlar bulunduğu sözcüksel ortama referans eden [[Environment]] özelliği ile yaratılırlar. Bundan dolayı en küçük fonksiyon bile bu özelliği içerir.

İçte olan yeni fonksiyon için [[Environment]] dğeişkeni var olan sayacUret'in Sözcüksel Ortamıdır.( Doğduğu yer )


Dikkat ederseniz bu basamakta iç fonksiyon yaratıldı fakat çağırılmadı. İçindeki kod function() { return sayac++; } çalışmadı, bu kod döndürülecek.

4. Çalışma devam ettiğinde sayacUret() biter, sonuc olarak ( küçük iç fonksiyon ) global counter değişkenine atanıyor.


Bu fonksiyonun sadece bir satır kodu var: return sayac++, sadece bu çalışacaktır.

5. sayac() çağrıldığında, “boş” bir Sözcüksel Ortam yaratılır. hiçbir yerel değişkeni yoktur. Fakat sayac'ın [[Environment]]'i dış referans olarak kullanılır. Bundan dolayı, daha önceden yapılan sayacUret()'in değişkenlerine erişebilir. Oluşturulduğu yer:


Değişkene erişmesi gerekirse önce kendi yerel sözcüksel ortamına(boş), sonra daha önce çağrılan sayacUret()'in sözcüksel ortamına, en son evrensel ortama bakar.

sayac için arama yaptığında, en yakınında sayacUret'in sözcüksel ortamı bulunmaktadır.

Buradaki hafıza yönetimine dikkat ederseniz. sayacUret() çağrısı bittikten bir süre sonra, Sözcüksel ortam hafızada tutulur, çünkü içte bulunan fonksiyonun [[Environment]]'i sayacUret'e referans vermektedir.

Genel olarak, sözcüksel ortam objesi fonksiyon kullanılabilir olduğu sürece yaşar. Fonksiyon kullanılmadığında silinir.

6. sayac() fonksiyonu sadece sayac değişkenini döndürmekle kalmaz, artırırda. Dikkat ederseniz değişiklik sadece “olduğu yerde” yapıldı. Var olan sayac değişkeni bulunduğu ortamda değiştirildi.


Öyleyse bir önceki adıma tek değişiklikle geri dönülmektedir – sayac'ın yeni değeri. Devam eden çağrılar da aynı şekilde çalışırlar.

7. Sonraki sayac() da aynısını yapar.

Başlangıçta sorulan ikinci sorunun cevabı şimdi açıklık kazanmış olmalı.

…Fakat eğer calisanUret() fonksiyonu içerisinde let name tanımlanmamış olsaydı, bu durumda değişkeni arayış evrensel değişkenler ile devam edecekti ve bu durumda sonuç "John" olacaktı.


-> Closure
Genel programlama tanımlarında “closure” adında bir tanım bulunmaktadır. Bunun ile closure dıştaki değişkenleri hatırlayabilen ve bunlara erişebilen fonksiyon anlaşılmalıdır. Bazı dillerde, bu mümkün değildir veya fonksiyonun özel bir biçimde yazılması gerekmektedir. Fakat yukarıda görüldüğü üzere tüm fonksiyonlar doğal olarak closure’dur ( bunun sadece bir tane istisnası bulunmaktadır bunu "new Function" yazımı bölümünde inceleyebilirsiniz.)

Ön yüz için bir görüşmeye gittiğinizde “Closure nedir?” diye sorulursa doğru cevap closure’un tanımın verilip tüm JavaScript fonksiyonlarının aslında closure olduğunun anlatılması ve sonrasında [[Environment]] özelliğinden, Sözcüksel Ortamdan bahsedilmesi yeterli olacaktır. */