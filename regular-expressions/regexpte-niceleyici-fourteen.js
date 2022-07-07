// Bir metinde aradığımız alt dizenin uzunluğunu küme parantezini kullanarak belirtebiliriz. RegExp niceleyicilerinin nasıl
// kullanıldığını görelim. Düşünün, uzunluklarının 4 karakter olduğu alt dizeyle ilgileniyoruz.


const txt = 'This regular expression example was made in December 6, 2019, 201, 50198.';

const pattern = /\b\w{4}\b/g;   // \b: bir kelimenin başlangıcı veya bitişiyle eşleşir; \w: Bir kelime karakteri bul; {4}: Tam olarak 4 karakter

const matches = txt.match(pattern);

console.log(matches);   //['This', 'made', '2019']




const patternTwo = /\b[a-zA-Z]{4}\b/g;  // [a-zA-Z]: a'dan z'ye, A'dan Z'ye

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ 'This', 'made' ]




const patternThree = /\d{4}/g;  // \d: dizenin rakamları içerdiği yerle eşleşir (0-9 arası sayılar)

const matchesThree = txt.match(patternThree);

console.log(matchesThree);  // [ '2019', '5019' ]




const patternFour = /\d{1,4}/g; // {1,4} : 1 ila 4 karakter

const matchesFour = txt.match(patternFour);

console.log(matchesFour);  // [ '6', '2019', '201', '5019', '8' ]