/* arr.sort metodu diziyi olduğu yerde sıralar.

Örneğin: */

let arr = [2, 15, 1];

// metod dizinin içeriğini sıralar ve döndürür.
arr.sort();

console.log(arr);  // [ 1, 15, 2 ]

/* Çıktısında bir şey fark ettiniz mi?

Sıralama 1, 15, 2 oldu. Yanlış. Neden peki?

Diziler varsayılan olarak karakter sıralamasına göre sıralanırlar.

Tüm elemanlar karakter dizisine çevrilir ve karşılaştırılır. Bundan dolayı karakter sırasına göre "2" > "15" karşılaştırılır.

Kendi sıralamanızı yapmak için, iki argümanlı bir fonksiyonu arr.sort()'ın argüman olarak alması gerekmektedir.

Fonksiyon aşağıdaki şekilde çalışmalıdır: */

function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let arr2 = [2, 15, 1];

arr2.sort(compareNumeric);

console.log(arr2);  // [ 1, 2, 15 ]

/* Şimdi beklendiği gibi çalışmakta.

Ne olduğunu düşünürsek. arr her şeyi tutabilir, değil mi? Sayı, karakter veya html elementi vs. tutabilir. İçinde bulunanları sıralamak için karşılaştırmayı yapan sıralama fonksiyonuna ihtiyaç vardır. Bunun da varsayılanı karakter sıralamadır.

arr.sort(fn) metodu içinde sıralama algoritmasına sahiptir. Bu sıralamanın nasıl çalıştığına dair bir bilgimiz olmasına gerek yok (Çoğu zaman quicksort kullanılır). Diziyi dolanır ve elemanları verilen algoritmaya göre karşılaştırır ve sıralar. Tek bilmeniz gereken fn fonksiyonunun karşılaştırmayı yaptığıdır.

Eğer hangi elemanın karşılaştırıldığını öğrenmek istiyorsanız elbette bunu görebilirsiniz. */

[1, -2, 15, 2, 0, 8].sort(function (a, b) {

    console.log(a + " <> " + b);
});

/*
-2 <> 1
15 <> -2
2 <> 15
0 <> 2
8 <> 0 */

/* Algoritma aynı elemanı bir kaç defa çalıştırma ihtiyacı duyabilir, fakat yine de olduğunca az karşılaştırmaya çalışır.

Karşılaştırma fonksiyonu herhangi bir sayıyı döndürebilir.
Aslında, karşılaştırma fonksiyonu “büyük” olduğunu belirtmek için pozisitif sayı, “az” olduğunu belirtmek için negatif sayı döndürmelidir.

Bu daha kısa fonksiyon yazılmasına olanak sağlar: */

let arr3 = [2, 15, 1];

arr3.sort(function (a, b) { return a - b; });

console.log(arr3);  // [ 1, 2, 15 ]

/* Daha zarif bir fonksiyon için ok kullanmak.
Ok fonksiyonlarını hatırlarsanız burada daha zarif bir biçimde sıralama yapılabilir: */

arr3.sort((a, b) => a - b);

// Bu, daha uzun versiyonu ile aynı şekilde çalışır.