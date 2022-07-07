// Exact match: tam eşleşme
// Başlangıcı ^ ve sonu olan $ olmalıdır.

let pattern = /^[A-Z][a-z]{3,12}$/;

let name = 'Nurcan';

let result = pattern.test(name);

console.log(result);    // true