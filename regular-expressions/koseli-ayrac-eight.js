// Küçük ve büyük harfleri dahil etmek için köşeli parantez kullanalım

const pattern = '[Aa]pple';

const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ';

const matches = txt.match(pattern);

console.log(matches);

// [
//     'Apple',
//     index: 0,
//     input: 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ',
//     groups: undefined
//   ]


const patternTwo = /[Aa]pple/g;

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ 'Apple', 'apple' ]