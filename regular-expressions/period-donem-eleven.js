// Period(.)

const pattern = /[a]./g;

const txt = 'Apple and banana are fruits';

const matches = txt.match(pattern);

console.log(matches);   // [ 'an', 'an', 'an', 'a ', 'ar' ]