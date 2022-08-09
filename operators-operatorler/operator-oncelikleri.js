/* Eğer bir ifade birden fazla operatör içeriyorsa. Bu ifade çalıştırılırken tanımlı önceliklere göre çalıştırılır, bir
başka ifade ile öncelik sırasına göre çalıştırılır.
Okuldan hepinizin hatırlayacağı gibi çarpma işlemi toplamadan önce yapılır 1 + 2 * 2. Aslında öncelik tam olarakta budur.
Çarpma işlemi toplama işleminden daha yüksek önceliğe sahiptir.
Parantez, bu öncelikleri çiğner ve eğer bu önceliklerden memnun değilseniz bunları tekrar tanımlamanıza olanak verir.
Örneğin (1 + 2 ) * 2
JavaScript dilinde birçok operatör vardır. Her operatörün de bir önceliği. Yüksek öncelik sayısına sahip operatör önce
çalışır. Eğer öncelik değerleri eşit ise soldan sağa doğru çalışır.
öncelik tablosu ( Ezberlemenize gerek yok sadece unary operatörlerin binary olanlara göre daha üstün olduğunu hatırlayın
yeter). Yani +elma + +portakal işleminde önce unary ile elma'nın değerini sayı yapar sonra portakal'ın değerini sayı yapar
ve en sonunda toplar.

Öncelik	Adı	İşareti
…	…	…
16	unary toplama	+
16	unary çıkarma	-
14	çarpma	*
14	bölme	/
13	toplama	+
13	çıkarma	-
…	…	…
3	atama	=
…	…	…
Görüleceği üzere “unary toplama” 16 ile normal toplama işlemi(binary toplama) 13 ün öncesindedir. */