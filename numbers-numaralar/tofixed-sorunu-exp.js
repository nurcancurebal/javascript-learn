/* -> 6.35.toFixed(1) == 6.3 ?

Dökümantasyona göre Math.round ve toFixed en yakın sayıya yuvarlarlar: 0..4 arası aşağı yuvarlarken 5..9 arası yukarı
yuvarlar. */

console.log(1.35.toFixed(1)); // 1.4

// Peki aşağıdaki örnekte neden 6.4 e yuvarlamadı da 6.3 e yuvarladı?

console.log(6.35.toFixed(1)); // 6.3

/* 6.35 in doğru bir şekilde yuvarlanması için ne yapılmalıdır?
Aslında 6.35'in decimal bölümü sonsuz binarydir. Böyle bir durumda kesinlik kaybına uğrarlar. */

console.log(6.35.toFixed(20)); // 6.34999999999999964473

/* Bu kesinlik kaybı sayının küçülmesine veya büyümesine neden olabilir. Bu örnekte sayı çok çok küçük bir oranda küçülüyor
bundan dolayı aşağıya yuvarladı.

1.35 için ise: */

console.log(1.35.toFixed(20)); // 1.35000000000000008882

/* Sayı çok küçük bir değer ile büyük limitin üstüne çıktı, bundan dolayı yukarıya yuvarladı.

Peki 6.35 için bu problem nasıl çözülebilir

Tam sayı değerini yuvarlama değerine yaklaştırılırsa problem çözülür: */

console.log((6.35 * 10).toFixed(20)); // 63.50000000000000000000

/* 63.5 hiçbir kayba uğramıyor dikkat ederseniz. Çünkü 0.5 lik fark aslında 1/2. 2 ve üstü ile yapılan işlemler binary
sistemde tam olarak ifade edildiğinden dolayı bu problem çözülmektedir. */

console.log(Math.round(6.35 * 10) / 10); // 6.4, 6.35*10 -> 63.5 -> 64(yuvarlandı)