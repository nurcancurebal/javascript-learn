/* Performans
push/pop metodları hızlı çalışır, shift/unshift ise yavaş


Peki neden dizinin başlangıcı ile bitişine eleman eklemek arasında hız farkı olmaktadır? Çalışma anında neler oluyor bakalım:

meyveler.shift(); // Başlangıçtan bir eleman al
0 indeksinde bulunan elemanı silmek yeterli değildir. Diğer elemanların tekrar numaralanması gerekmektedir.

shift metodunun yapması gereken 3 işlem vardır:

0 indeksinde bulunan elemanın silinmesi
Tüm elemanların sola kaydırılması, indekslerin tekrar numaralandırılması 1'den 0'a, 2'den 1'e vs.
uzunluk özelliğini güncelle.

Daha fazla elaman, daha falza taşınma süresi , daha fazla hafıza içi işlem demektir

Aynı şey unshift için de geçerlidir: dizilerin başına eleman ekleneceği zaman öncelikle elemanların sağa kaydırılarak indeks artırılması gerekir.

Peki push/pop için böyle işlemlere gerek yokmu? Sondaki elemanı alabilmek için pop metodu indexi siler ve length'i bir azaltır.

pop metodunun yaptığı işlemler:

fruits.pop(); // Sondan bir eleman al

pop hiçbir şey taşımaz çünkü diğer elemanların index'i değişmez. Bundan dolayı aşırı derecede hızlıdır

push'da aynı şekilde sona ekler. */