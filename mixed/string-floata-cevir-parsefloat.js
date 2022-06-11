// string to float
// buradada string veri tipini değiştiriyoruz ancak 5.5 gibi rasyonel sayılarda parseınt() kullanılmaz
// parseFloat() kullanılır

let bbb = '7,5';
let cc = parseFloat(bbb);

console.log(typeof cc); // çıktı number