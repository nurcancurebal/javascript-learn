//Slice() yöntemi, bir dizinin bir bölümünün sığ bir kopyasını, baştan sona seçilen (bitiş dahil değildir) yeni
//bir dizi nesnesine döndürür; burada başlangıç ​​ve bitiş, o dizideki öğelerin dizinini temsil eder.Orijinal dizi değişmez.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let itCompaniesFour = itCompanies.slice(2, 4);

console.log(itCompaniesFour);   // [ 'Microsoft', 'Apple' ]