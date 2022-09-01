// RegExp'te kaçış karakteri (\)

const pattern = /\d/g;  // \d numaralar demek

const txt = 'This regular expression example was made in January 12,  2020.';

const matches = txt.match(pattern);

console.log(matches);   // [ '1', '2', '2', '0', '2', '0' ]


const patternTwo = /\d+/g;  // +: bir veya daha fazla kez

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ '12', '2020' ]