// Cart(sepet) ; ^ : ile başlar

const txt = 'This regular expression example was made in December 6,  2019.';

const pattern = /^This/;

const matches = txt.match(pattern);

console.log(matches);

// [
//     'This',
//     index: 0,
//     input: 'This regular expression example was made in December 6,  2019.',
//     groups: undefined
//   ]



// Negation(olumsuzlama)

const patternTwo = /[^A-Za-z,. ]+/g;  // A'dan Z'ye değil, a'dan z'ye değil, boşluk yok, virgül yok nokta yok

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ '6', '2019' ]