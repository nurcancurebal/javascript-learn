// test(): Bir dizideki eşleşmeyi test eder. Doğru veya yanlış döndürür.

const str = 'I love JavaScript';

const pattern = /love/;

const result = pattern.test(str);

console.log(result);    // true