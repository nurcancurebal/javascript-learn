// JavaScript’te operatörlerin özel durumlarından birisi karakter dizilerinin + işareti ile birleştirilebilmesidir.
// Böylece + işaretinin amacının ötesinde bir işlem yapabildiğinin farkına varmış olmalısınız.
// Normalde + iki sayıyı toplamaya yaparken eğer bir taraf karakter dizisi ise bu durumda birleştirmeye yarar.

let s = "my" + "string";

console.log(s); // mystring


// Dikkat edin eğer iki operand’dan birisi karakter dizisi ise diğeri ne olursan olsun karakter dizisine çevrilir.

console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"


// Gördüğünüz gibi, ilk operand veya ikinci operandın karakter dizisi olması bir şeyi değiştirmiyor. Kural basit, her iki
// taraftan birisi karakter dizisi ise diğerini de karakter dizisine çevir ve birleştir. Yani "+" işlemi hem birleştirme
// hem de tip değiştirme yapmaktadır. Bu sadece "+" operatörüne has bir olaydır. Örneğin çıkarma ve çarpmanın davranışı
// farklıdır:

console.log(2 - '1'); // 1
console.log('6' / '2'); // 3