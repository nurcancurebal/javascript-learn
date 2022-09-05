/* Faktöriyel (https://en.wikipedia.org/wiki/Factorial) bir sayının "bir önceki" ile "bir önceki"'nin vs. vs. şeklinde 1 olana kadar çarpılmasıdır. n in faktöriyeli n! şeklinde gösterilir.

Faktöriyelin tanımı aşağıdaki gibidir:

n! = n * (n - 1) * (n - 2) * ...*1
Farklı n değerlerinin faktöriyelleri şu şekildedir:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Göreviniz faktoriyel(n) fonksiyonunu özçağrı kullanarak hesaplamak.

console.log( faktoriyel(5) ); // 120

Not: n!, n * (n-1)! şeklinde yazılabilir. Örneğin: 3! = 3*2! = 3*2*1! = 6

çözüm

Tanım olarak n! faktöriyel n * (n-1)! şeklinde çalışır.

Diğer bir deyişle faktoriyel(n) n in factorial(n-1) ile çarpılmasıdır. Sonrasında n-1 1 olana kadar basamak basamak azalır. */

function faktoriyel(n) {

    return (n != 1) ? n * faktoriyel(n - 1) : 1;
}

console.log(faktoriyel(5)); // 120

// Özçağrı’nın tabanı 1'dir. 0'da yapılabilir, çok önemli değildir, fakat 1 özçağrı daha yapmak gerekir.

function faktoriyel(n) {

    return n ? n * faktoriyel(n - 1) : 1;
}

console.log(faktoriyel(5)); // 120