let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Slice() yöntemi, bir dizinin bir bölümünün sığ bir kopyasını, baştan sona seçilen (bitiş dahil değildir) yeni
//bir dizi nesnesine döndürür; burada başlangıç ​​ve bitiş, o dizideki öğelerin dizinini temsil eder.Orijinal dizi değişmez.

let itCompaniesFour = itCompanies.slice(2, 4);

console.log(itCompaniesFour);