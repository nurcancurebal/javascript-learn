//Slice() yöntemi, bir dizinin bir bölümünün sığ bir kopyasını, baştan sona seçilen (bitiş dahil değildir) yeni
//bir dizi nesnesine döndürür; burada başlangıç ​​ve bitiş, o dizideki öğelerin dizinini temsil eder.Orijinal dizi değişmez.

let name = "Nurcan";

console.log(name.slice(1, 3)); // ur


const numbers = [1, 2, 3, 4, 5];

console.log(numbers.slice(1, 3));   // 1. eleman dahil 3. eleman hariç arayı al yani 1 ve 2. index, yani 3' ten sonrasını alma