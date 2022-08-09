console.log(0 == false); // true
console.log('' == false); // true
console.log(0 === false); // yanlış, çünkü tipler farklı.


console.log(null === undefined); // false
console.log(null == undefined); // true


console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

// Bunun nedeni eşitlik kontrolü == ve karşılaştırma kontrollerinin > < >= <= farklı çalışmasından dolayıdır. Karşılaştırma
// iki tarafta bulunan değerleri önce sayıya çevirmeye çalışır. Bundan dolayı sonuncu örnekte null>=0 null 0 a dönüşür. En
// üst örnekte de null>0 bu şekilde çalışır. Bundan dolayı en üstte false, en altta ise true döner.


// undefined hiçbir zaman karşılaştırma içerisine girmemelidir.

console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

//(1.) ve (2.) örneklerde false döndü çünkü undefined NaN oldu. Nan özel bir sayısal değişkendir ve hangi sayı ile
// karşılaştırılırsa karşılaştırılsın, sonuç false çıkar. (3.) maddedeki eşitlik kontrolü ise undefined'ın sadece null ile
// eşit olabilmesinden dolayıdır. null haricinde hiçbir değere eşit değildir.


// undefined/null eşitlik kontrollerinde sıkı eşitlik kontrolü === haricinde yaptığınız kontrollere dikkat etmeniz lazım.
// >= > < <= gibi karşılaştırmaları null/undefined değeri alabilecek değişkenler ile yapmayın, yaparsanız bile kesinlikle
// çok dikkatli olun. Eğer bir değişken null/undefined gibi değerler alabiliyorsa bunları ayrıca kontrol etmeniz gerekli.