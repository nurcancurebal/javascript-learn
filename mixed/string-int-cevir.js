// string veri türünü integer veri  türüne dönüştürebiliriz
// let num= '10' tırnak içinde olan tüm ifadeler string veri türündedir


// parseınt()
// Number()
// plus sign(+) ile çevirebiliriz

let num = 'kalben';
let numint = parseInt(num);

console.log(typeof numint); // çıktı number

// number stringi numbera çevirirken başına artı koy  

let aaa = +'10';

console.log(typeof aaa);

// string to float
// buradada string veri tipini değiştiriyoruz ancak 5.5 gibi rasyonel sayılarda parseınt() kullanılmaz
// parseFloat() kullanılır

let bbb = '7,5';
let cc = parseFloat(bbb);

console.log(typeof cc); // çıktı= number