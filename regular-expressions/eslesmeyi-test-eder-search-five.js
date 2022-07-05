// search(): Bir dizideki eşleşmeyi test eder. Arama başarısız olursa eşleşmenin dizinini veya -1'i döndürür.

const str = 'I love JavaScript';

const pattern = /love/g;

const result = str.search(pattern);

console.log(result);    // 2