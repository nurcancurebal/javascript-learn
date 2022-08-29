const numbers = [1, 2, 3, 4, 5, 6];

let newNumbers = numbers.splice(1, 4, 'tuğçe', 'nurcan');  //(4) [2, 3, 4, 5] = çıkartılan elemanları newNumbers'a yazar
// (silmeye başladığı indeks, kaç tane eleman silinecek, eklenen elemanlar)

console.log(numbers); //(4) [1, 'tuğçe', 'nurcan', 6] = son oluşan şeklide sona yazar

//! DİKKAT yeni olaşan ifade ilk baştaki numbers değişkenine atandı artık numbers değişkeni [1, 'tuğçe', 'nurcan', 6] değerleri içeriyor.

console.log(newNumbers);    // (4) [2, 3, 4, 5]



/* Diziden eleman nasıl silinir?

Diziler de obje olduklarından dolayı, delete kullanarak silinebilir. */

let arr = ["eve", "gitmek", "istiyorum"];

delete arr[1]; // "gitmek" silinecek

console.log(arr[1]); // undefined

// şimdi arr = ["eve",  , "istiyorum"];
console.log(arr.length); // 3

/* Eleman silinmesine rağmen, dizi hala 3 elemana sahip. Bunu arr.length == 3 kontrolünü yaparak görebilirsiniz.

Olması gereken de bu, çünkü delete obj.key değeri anahtara göre siler. Sadece bu işi yapar. Bu da objeler için yeterlidir. Fakat diziler için genelde istediğimiz elamanların birbirlerinin yerleri doldurmasıdır. Bundan dolayı dizinin kısaldığını görmemiz lazım. */



/* splice metodu ayrıca hiçbir şey silmeden de ekleme yapabilir. Bunun için deleteCount'u 0 yapmanız gerekmektedir: */

let arr2 = ["Ben", "JavaScript", "çalışıyorum"];

// 1. indeksten
// 0 tane sil
// Sonrasında "karmaşık" ekle
arr2.splice(1, 0, "karmaşık");

console.log(arr2); // "Ben", "karmaşık", "JavaScript", "çalışıyorum"



/* Negatif indeksler de kullanılabilir
Bu ve diğer metodlarda negatif indeksler kullanılabilir. Negatif indeksler dizinin sonundan başına doğrudur. Örneğin: */

let arr3 = [1, 2, 5]

// indeks -1 ( sondan birinci )
// 0 eleman sil,
// 3 vs 4 ekle
arr3.splice(-1, 0, 3, 4);

console.log(arr3); // 1,2,3,4,5