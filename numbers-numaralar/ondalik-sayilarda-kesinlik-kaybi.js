/* Infinite loop
Aşağıdaki döngü neden sonsuzdur ve hiçbir zaman bitmez? */

let i = 0;

while (i != 10) {

    i += 0.2;
}

// Çünkü i hiçbir zaman 10 olmaz.

let i2 = 0;

while (i2 < 11) {

    i2 += 0.2;

    if (i2 > 9.8 && i2 < 10.2) console.log(i2);
}

/* hiçbirisi tam olarak 10 olmayacaktır.
Bunun olmasının nedeni 0.2 eklediğimizde kesinlik kaybı olur.
Sonuç: Eğer ondalıklı sayılar ise çalışıyorsanız eşitlik kontrolünü iyice kontrol edin. */