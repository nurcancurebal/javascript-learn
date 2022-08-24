/* Sayılar ile yapılan önemli işlemlerden biri de yuvarlama işlemidir.

Yuvarlama işlemi için birçok dahili fonksiyon bulunmaktadır:

-> Math.floor
Aşağı yuvarlar: 3.1 3 , -1.1 -2 olur.

-> Math.ceil
Yukarı yuvarlar: 3.1 4, -1.1 -1 olur.

-> Math.round
En yakın tam sayıya yuvarlar: 3.1 3, 3.6 4 ve -1.1 -1 olur.

-> Math.trunc (Internet Explorer desteklemez)
Ondalık bölümü siler: 3.1 3, -1.1 -1 olur.

Bu fonksiyonlar ondalık sayılar için önünüze gelebilecek tüm farklılıkları kapsar. Fakat ya ondalık bölümden n. basamağını
yuvarlamak isterseniz?

Örneğin 1.2345 diye bir sayı olsun ve bunu 2 basamağa yuvarlamak istiyorsunuz 1.23 gibi

Bunu yapmak için iki yol bulunmaktadır:

1. Çarp ve Böl.

Örneğin 2. basamaktan sonrasını yuvarlamak istiyorsanız bunu 100 ile çarpıp sonra tekrar 100 e bölerseniz istediğinizi elde
etmiş olursunuz. */

let num = 1.23456;

console.log(Math.floor(num * 100) / 100); // 1.23,  1.23456 -> 123.456 -> 123 -> 1.23

// 2. toFixed(n) kullanarak ondalık bölümde n basamaktan sonrası için yuvarlama yapılabilir.

let num2 = 12.34;

console.log(num2.toFixed(1)); // "12.3"

// Bu Math.round gibi tam sayıya yakınlığına göre yukarıya veya aşağıya yuvarlar:

let num3 = 12.36;

console.log(num3.toFixed(1)); // "12.4"

// toFixed karakter dizisi döndürür. Eğer ondalık bölüm argümandan kısa ise sona 0 eklenir.

let num4 = 12.34;

console.log(num4.toFixed(5)); // "12.34000", ondalık bölüm 5 basamaklı yapılmıştır.

// Önüne artı koyarak veya Number() fonksiyonunu kullaranak bunu sayıya çevirebilirsiniz: +num.toFixed(5).