// string veri türünü integer veri  türüne dönüştürebiliriz
// let num= '10' tırnak içinde olan tüm ifadeler string veri türündedir

// parseınt()
// Number()
// plus sign(+) ile çevirebiliriz




// parseInt()
let num = 'kalben';

let numint = parseInt(num);

console.log(typeof numint); // çıktı number



//plus sign(+): number stringi numbera çevirirken başına artı koy  
let no = 10;
let number = +'10';
let number2 = +'kalben';

console.log(typeof number2); // çıktı number

console.log(typeof no);  // çıktı number

console.log(typeof number);  // çıktı number

console.log(typeof no === typeof number); // true



// Number()
let numTwo = 'kalben';

let numintTwo = Number(numTwo);

console.log(typeof numintTwo); // çıktı number