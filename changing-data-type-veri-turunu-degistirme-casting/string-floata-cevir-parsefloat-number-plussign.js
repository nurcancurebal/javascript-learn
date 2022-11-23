// string to float
// buradada string veri tipini değiştiriyoruz ancak 5.5 gibi rasyonel sayılarda parseınt() kullanılmaz

// parseFloat()
// Number()
// Plus sign(+) kullanılır

let bbb = '7,5';

let cc = parseFloat(bbb);

console.log(typeof cc); // çıktı number



let num = '9.81';

let numFloat = Number(num);

console.log(numFloat); // 9.81


let numTwo = '9.81';

let numFloatTwo = +numTwo;

console.log(numFloatTwo); // 9.81