// Bir metinde aradığımız alt dizenin uzunluğunu küme parantezini kullanarak belirtebiliriz. RegExp niceleyicilerinin nasıl
// kullanıldığını görelim. Düşünün, uzunluklarının 4 karakter olduğu alt dizeyle ilgileniyoruz.


const txt = 'This regular expression example was made in December 6,  2019.';

const pattern = /\b\w{4}\b/g;   // w: word kelime

const matches = txt.match(pattern);

console.log(matches);   //['This', 'made', '2019']




const patternTwo = /\b[a-zA-Z]{4}\b/g; // b: 

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ 'This', 'made' ]




const patternThree = /\d{4}/g;  // d: digit sayılar

const matchesThree = txt.match(patternThree);

console.log(matchesThree);  // ['2019']




const patternFour = /\d{1,4}/g;

const matchesFour = txt.match(patternFour);

console.log(matchesFour);  // ['6', '2019']