// büyükten küçüğe ya da küçükten büyüğe sıralama işlemleri için kullanılır. Varsayılan olarak sırlayacağı elemanları stringe çevirir.
// Stringlerde işe yararken sayılarda yaramaz. Eğer sayıları sıralamaya çalışırsanız hata alırsınız. Bu methot kullanıldığında orijinal
// arrayde değişir. Sortu kullanmadan önce orijinal verinizi kopyalayabilrsiniz.

const names = ['Nurcan', 'Erdinç', 'Bal', 'Kanada', 'Irlanda'];

names.sort();

console.log(names); // [ 'Bal', 'Erdinç', 'Irlanda', 'Kanada', 'Nurcan' ];