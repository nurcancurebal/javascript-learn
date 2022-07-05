// match(): Grupları yakalamak da dahil olmak üzere tüm eşleşmeleri içeren bir dizi döndürür veya eşleşme bulunamazsa null.
// Genel bir bayrak kullanmazsak, match() deseni, indeksi, girişi ve grubu içeren bir dizi döndürür.

const str = 'I love JavaScript';

const pattern = /love/;

const result = str.match(pattern);

console.log(result);    // [ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]


const strTwo = 'I love JavaScript';

const patternTwo = /love/g;

const resultTwo = strTwo.match(patternTwo);

console.log(resultTwo); // [ 'love' ]