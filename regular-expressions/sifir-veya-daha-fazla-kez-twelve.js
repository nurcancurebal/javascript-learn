//(*) Sıfır veya birçok kez. Desen oluşmayabilir veya birçok kez ortaya çıkabilir.

const pattern = /[a].*/g;

const txt = 'Apple and banana are fruits';

const matches = txt.match(pattern);

console.log(matches);   // [ 'and banana are fruits' ]