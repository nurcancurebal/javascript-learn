//Karakter dizisi karşılaştırma
// Hangi karakter dizisinin hangisinden büyük olduğunu bulmak için alfabe sırasına bakılır.

// Her harf sıra ile kontrol edilir.

console.log('Z' > 'A'); // doğru ( true )

console.log('Kum' > 'Kan'); // doğru ( true )

console.log('Bee' > 'Be'); // doğru ( true )

/*
İki karakter dizisini karşılaştıran algoritma aslında basit bir algoritmadır. Basamakları şu şekildedir.

İki karakter dizisinin ilk karakterlerini karşılaştır
Eğer birincisi ikincisinden büyükse, birinci karakter dizisi büyüktür. İşlem bitti.
Eğer karakterler eşit ise ikinci karakteri de aynı şekilde kontrol et. Eğer birincisi büyükse true döner.
Karakter dizilerinin sonuna kadar test et.
Eğer sonuna kadar tüm karakterler aynıysa uzun olanı daha büyüktür.
Örneğin birinci örnekte 'Z' > 'A' dan büyüktür hemen true sonucu döner.

İkincisinde "Kum" ve "Kan" karakter karakter karşılaştırılıyor:

K eşittir K 'ya.
u, a'dan büyük. Burada bitirilir ve birincisi ikincisinden büyüktür sonucu doğru(true) döner. */

/* Tam olarak sözlükteki sıralama gibi değildir, unicode bir sıralama var
Algoritmada belirtilen karşılaştırma tam olarak sözlükteki veya telefon defterindeki gibi bir karşılaştırma vermez.

Örneğin karakterin büyük veya küçük harf olması önemlidir. "A" ile "a" eşit değildir. Peki hangisi büyük? Aslında "a" daha
büyüktür. Neden ? Çünkü küçük harf karakterler büyüklere göre (Unicode) index olarak daha sonradır. Bu konuya Karakter
Dizisi - Strings bölümünden daha ayrıntılı bir şekilde inceleyebilirsiniz. */