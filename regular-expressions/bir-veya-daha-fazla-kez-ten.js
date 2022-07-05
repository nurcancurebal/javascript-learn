const pattern = /\d+/g;

const txt = 'This regular expression example was made in January 12,  2020.';

const matches = txt.match(pattern);

console.log(matches);   // [ '12', '2020' ]