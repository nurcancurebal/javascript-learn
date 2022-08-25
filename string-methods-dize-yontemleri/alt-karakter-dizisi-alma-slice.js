//Slice() yöntemi, bir dizinin bir bölümünün sığ bir kopyasını, baştan sona seçilen (bitiş dahil değildir) yeni
//bir dizi nesnesine döndürür; burada başlangıç ​​ve bitiş, o dizideki öğelerin dizinini temsil eder.Orijinal dizi değişmez.

// Belirli bir aralığı alma: Karakter dizisinin başla ile başlayan bitir(dahil değil) ile bitirilen aralıktaki karakterleri
// alır.

let name = "Nurcan";

console.log(name.slice(1, 3)); // ur


let nameTwo = "Erdinç";

console.log(nameTwo.slice(0, -1)); // Erdin , -1 sondaki karakter demek


// Eğer ikinci bir argüman yoksa, slice karakter dizisinin sonuna kadar alır:

let str = "stringify";

console.log( str.slice(2) ); // ringify, ikinci pozisyondan sonuna kadar.


// basla/bitir için negatif değerler kullanmakta mümkündür. Bu pozisyonun karakter bitiminden itibaren çalıştığı anlamına
// gelir.

// sağdan 4. pozisyondan başla ve yine sağdan 1. pozisyona kadar al.(sağdan 1 den başlıyor saymaya)
console.log( str.slice(-4, -1) ); // gif