/* -> Metod Ödünç Alma
Hash fonksiyonunda biraz değişiklik yapalım: */

function hash1(args) {

    return args[0] + ',' + args[1];
}

console.log(hash1('Erdinç', 'Nurcan','Bal')); // E,r

/* Bundan sonra bu fonksiyon sadece iki argümanla çalışacak. Bunun yerine belirsiz sayıdaki argümanla çalışsa daha iyi olur.

Bunu kullanmanın doğal yolu arr.join metodudur(join: arrayi stringe çevir birleştir): */

function hash2(args) {

    return args.join();
}

console.log(hash2('Erdinç', 'Nurcan','Bal')); // Error: arguments.join fonksiyon değil.

/* … Malesef bu çalışmaz. Çünkü hash(argümanlar) çağırılmakta ve arguments objesi hem döngülenebilir hemde dizi-benzeri olduğundan, fakat gerçek dizi olmadığından çalışmaz.

Öyleyse join bu durumda çağırılamaz, örneğin: */

function hash3() {

    console.log(arguments.join()); // Error: arguments.join fonksiyon değil.
}

hash3(1, 2);

// Fakat yine de dizi birleştirme kullanmanın kolay bir yolu vardır.

function hash4() {

    console.log([].join.call(arguments)); // 1,2
}

hash4(1, 2);

/* Bu cambazlığa metod ödünç alma denir.

Normal diziden [].join join ödünç alınır. Sonrasında arguments contexi ile çağrı yapılır [].join.call

Gerçek dizinin join metodu oldukça basittir.

Tanımından “olduğu” gibi alındığında işlem şu şekildedir:

1. yapistir ilk argüman olsun, eğer argüman yoksa "," ilk argüman olsun.
2. sonuc boş karakter dizisi olsun
3. this[0]'ı sonuca ekle.
4. yapistir ve this[1]'i ekle
5. yapistir ve this[2]'i ekle
6. … this.length'e kadarki tüm elemanlar yapıştırılana kadar ekle.
7. sonuc dön
8. Return result.

Teknik olarak this'i alır ve this[0], this[1] …vs. şeklinde birleştirir. Bu şekilde yazılarak tüm dizi-gibi'lerin this şeklinde çalışmasını sağlar. Bundan dolayı this=arguments şeklinde de çalışır. */