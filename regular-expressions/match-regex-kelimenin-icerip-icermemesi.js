// match()= parametre olarak düzenli ifade(regex/regular expression) alır, eğer bir eşleşme olursa bir dizi döndürür,
// eşleşme olmazsa null döndürür.


let string = 'I love JavaScript.If you do not love JavaScript what else can you love.';

console.log(string.match('love'));
//ekran çıktı= (1) ['love', index: 2, input: 'I love JavaScript.If you do not love JavaScript what else can you love.', groups: undefined]

console.log(string.match(/love/gi));
// ekran çıktı=(3) ['love', 'love', 'love']



//let string='love' bu ifade string bir değişkendir
// let patterOne= /love/ bu bir regex regular(düzenli) ifadedir / ile başlar / ile biter