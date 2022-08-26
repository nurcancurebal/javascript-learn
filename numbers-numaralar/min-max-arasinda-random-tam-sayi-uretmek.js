/* randomInteger(min,max) adında bir fonksiyon yazın. Bu fonksiyon sadece min ve max değerleri arasında tam sayı döndürsün.
(min ve max ikisi de dahil)

Her defasında min..max aynı olasılıkla seçilmelidir. */

console.log(random(1, 5)); // 1
console.log(random(1, 5)); // 3
console.log(random(1, 5)); // 5

/* Aslında birçok doğru çözüm vardır.Bir tanesi, aralık sınırlarının ayarlanmasıdır. Her defasında aynı aralık seçildiğinden
emin olunmalıdır. 0.5 ile 2.5 arasında değerler üretilebilir. Bu şekilde kenarlara olasılık için ağırlık eklenmiş olur. */

function randomInteger(min, max) {

    // (min-0.5) ile (max+0.5) arasında
    let rand = min - 0.5 + Math.random() * (max - min + 1);

    return Math.round(rand);
}

console.log(randomInteger(1, 3));

// Diğer bir alternatif ise Math.floor kullanılarak min ile max+1 aralığından rasgele bir sayı seçilmesidr.

function randomInteger(min, max) {

    // rasgele min ile (max+1) arasındadır.
    let rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

console.log(randomInteger(1, 3));

/* Şimdi ise aralıklar şu şekilde haritalanır:

1  ... ile 1.9999999999  arası 1 olur
2  ... ile 2.9999999999  arası 2 olur
3  ... ile 3.9999999999  arası 3 olur

Tüm aralıklar aynı boyutlara sahiptir. Son tahlilde hepsi aynı olasılığa sahiptir. */