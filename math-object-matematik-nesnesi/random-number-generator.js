const randomNumber = Math.floor((Math.random() * 100) + 1);

// Math.random() * 100 : hiç bir zaman math.random' un sonucu 100 olmaz çünkü math.random 0 ile 1 arasında sayı üretir. Buda ürettiği en büyük sayi: 0.999 demektir. 0.999 ile 100 ü çarpınca sonuç: 99,9 dur. Math.floor ifadesi kullanıldığı için aşağıya yuvarlar ve en büyük 99 bulur.

console.log(randomNumber);