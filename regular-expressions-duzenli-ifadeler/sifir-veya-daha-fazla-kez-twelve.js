//(*) Sıfır veya birçok kez. Desen oluşmayabilir veya birçok kez ortaya çıkabilir.

const pattern = /[a].*/g; // köşeli parantez: ve demek; nokta(.): bir tane karakter demek(a' nın yanındaki karekteride al anlamında); *: o kelime bitene kadar cümleyi devam ettir

const txt = 'Apple and banana are fruits';

const matches = txt.match(pattern);

console.log(matches);   // [ 'and banana are fruits' ]