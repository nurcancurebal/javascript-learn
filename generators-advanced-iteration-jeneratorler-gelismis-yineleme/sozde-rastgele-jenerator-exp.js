/* -> Sözde rastgele üreteç(jenerator)
Rastgele verilere ihtiyaç duyduğumuz birçok alan var.

Bunlardan biri testtir. İşleri iyi bir şekilde test etmek için rastgele verilere ihtiyacımız olabilir: metin, sayılar vb.

JavaScript'te kullanabiliriz Math.random(). Ancak bir şeyler ters giderse, tamamen aynı verileri kullanarak testi tekrar edebilmek isteriz.

Bunun için “tohumlanmış sözde rasgele üreteçler” denen sözde kullanılmaktadır. İlk değer olan bir "tohum" alırlar ve ardından bir formül kullanarak sonraki değerleri üretirler. Böylece aynı tohum aynı diziyi verir ve bu nedenle tüm akış kolayca yeniden üretilebilir. Tekrarlamak için sadece tohumu hatırlamamız gerekiyor.

Biraz düzgün dağılmış değerler üreten böyle bir formül örneği: */

next = previous * 16807 % 2147483647

/* Tohum olarak kullanırsak 1, değerler şöyle olacaktır:

1. 16807
2. 282475249
3. 1622650073
4. …ve benzeri…

Görev, bu formülle jeneratörü pseudoRandom(seed) alıp oluşturan bir jeneratör işlevi oluşturmaktır.seed */

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

/* Bu bağlam için gayet iyi. for..of Ancak daha sonra, başka bir yerde yararlı olabilecek, jeneratör bileşimini yineleme ve kullanma yeteneğimizi kaybederiz. */