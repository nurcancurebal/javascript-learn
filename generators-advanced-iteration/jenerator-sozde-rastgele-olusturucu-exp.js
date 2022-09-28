/* -> Sözde rastgele oluşturucu
Rastgele verilere ihtiyaç duyduğumuz birçok alan var.

Bunlardan biri testtir. Her şeyi iyi test etmek için rastgele verilere ihtiyacımız olabilir: metin, sayılar vb.

JavaScript'te kullanabiliriz Math.random(). Ancak bir şeyler ters giderse, tamamen aynı verileri kullanarak testi tekrarlayabilmek isteriz.

Bunun için “tohumlanmış sözde rasgele üreteçler” kullanılır. İlk değer olan bir "tohum" alırlar ve ardından bir formül kullanarak sonrakilerini üretirler. Böylece aynı tohum aynı diziyi verir ve dolayısıyla tüm akış kolayca yeniden üretilebilir. Tohumu tekrarlamak için sadece hatırlamamız gerekir.

Bir şekilde eşit olarak dağıtılmış değerler üreten böyle bir formül örneği: */

next = previous * 16807 % 2147483647

/* Tohum olarak kullanırsak 1, değerler şöyle olacaktır:

1. 16807
2. 282475249
3. 1622650073
4. …ve benzeri…

Görev, bu formülle üreteci pseudoRandom(seed)alan ve oluşturan bir üreteç işlevi oluşturmaktır.seed */

// çözüm

function* pseudoRandom(seed) {

    let value = seed;

    while (true) {

        value = value * 16807 % 2147483647

        yield value;
    }
};

let generator1 = pseudoRandom(1);

console.log(generator1.next().value); // 16807
console.log(generator1.next().value); // 282475249
console.log(generator1.next().value); // 1622650073

// Lütfen unutmayın, aynı şey aşağıdaki gibi normal bir işlevle yapılabilir:

function pseudoRandom(seed) {

    let value = seed;

    return function () {

        value = value * 16807 % 2147483647;
        return value;
    }
}

let generator2 = pseudoRandom(1);

console.log(generator2()); // 16807
console.log(generator2()); // 282475249
console.log(generator2()); // 1622650073

/* Bu bağlam için iyi. Ama sonra for..of, başka bir yerde yararlı olabilecek, üreteç bileşimini yineleme ve kullanma yeteneğimizi kaybederiz. */