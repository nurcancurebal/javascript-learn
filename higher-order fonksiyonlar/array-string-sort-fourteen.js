// büyükten küçüğe ya da küçükten büyüğe sıralama işlemleri için kullanılır. Varsayılan olarak sırlayacağı elemanları stringe çevirir.
// Stringlerde işe yararken sayılarda yaramaz. Eğer sayıları sıralamaya çalışırsanız hata alırsınız. Bu methot kullanıldığında orijinal
// arrayde değişir. Sortu kullanmadan önce orijinal verinizi kopyalayabilrsiniz.

const names = ['Nurcan', 'Erdinç', 'Bal', 'Kanada', 'Irlanda'];

names.sort();

console.log(names); // [ 'Bal', 'Erdinç', 'Irlanda', 'Kanada', 'Nurcan' ];

// a' dan z' ye ya da z' den a' ya sıralamsını istersek local compare kullanabiliriz.

const nameSort = names.sort((a, b) => b.localeCompare(a));

console.log(nameSort);