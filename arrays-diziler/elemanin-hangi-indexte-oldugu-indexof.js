// indexOf() dizide o eleman varsa elemanın bulunduğu index dönüyor yoksada -1 dönüyor

let names = ['nurcan', 'erdinç', 'bal', 'aşk', 'sevgi', 'bal'];

let namesTwo = names.indexOf('kalp'); // -1
let namesThree = names.indexOf('bal'); //2

namesTwo === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');

namesThree === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array');