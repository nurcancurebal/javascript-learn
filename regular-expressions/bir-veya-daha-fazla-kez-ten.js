const pattern = /\d+/g; // d : sayılar, + bir veya daha fazla kez demek

const txt = 'This regular expression example was made in January 12,  2020.';

const matches = txt.match(pattern);

console.log(matches);   // [ '12', '2020' ]