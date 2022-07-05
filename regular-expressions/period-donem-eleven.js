// Period(.)

const pattern = /[a]./g;    // bu köşeli parantez a ve anlamına gelir. yeni satır dışında herhangi bir karakter anlamına gelir

const txt = 'Apple and banana are fruits';

const matches = txt.match(pattern);

console.log(matches);   // [ 'an', 'an', 'an', 'a ', 'ar' ]


const patternTwo = /[a].+/g;    // . herhangi bir karakter, + herhangi bir karakter bir veya daha fazla kez

const matchesTwo = txt.match(patternTwo);

console.log(matchesTwo);    // [ 'and banana are fruits' ]