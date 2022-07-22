// index' ini verir

let string = 'I love JavaScript. If you do not love JavaScript what else can you love';

console.log(string.search('love'));  //ekran çıktısı= 2 //içine yazdığın şeyin nerede olduğunu söyler

console.log(string.search(/javascript/gi));  //7 (buradaki i= büyük küçük harf duyarlılığını kapatıyor,
 //g= global anlamda ara demek)
 //let string='love' bu ifade string bir değişkendir
// let patterOne= /love/ bu bir regex regular(düzenli) ifadedir / ile başlar / ile biter