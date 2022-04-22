// split(ayırıcı,limit)
// split(',',3) virgülden ayırır 3 tane array oluşturur gerisini almaz

let text = 'I love teaching and empowering people I teach HTML CSS JS React Python';

console.log(text);          // I love teaching and empowering people I teach HTML CSS JS React Python
console.log(text.length);  // 70

let string= text.split(' ', 4);

console.log(string);        // (4) ['I', 'love', 'teaching', 'and']
console.log(string.length); // 4