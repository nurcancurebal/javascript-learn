/* 5 dizi işleminin üzerinden geçin:

styles adında bir dizi oluşturun. İçerisinde “Jazz” ve “Blues” elemanları olsun.
“Rock-n-Roll” elemanını sona ekleyin.
Ortada bulunan elemanı “Classics” ile değiştirin. Yazacağınız kod tek elemanlı değerler için çalışmalı. 1-3-5-7 gibi
Dizinin ilk değerini sil ve göster.
Dizinin başlangıcına Rap ve Reggae gibi elemanlar ekleyiniz.
İşlemler aşağıdaki gibi olmalıdır:

Jazz, Blues
Jazz, Bues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll */


let styles = ['Jazz', 'Blues'];

console.log(styles);    // [ 'Jazz', 'Blues' ]

styles.push('Rock-n-Roll');

console.log(styles); // [ 'Jazz', 'Blues', 'Rock-n-Roll' ]

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

console.log(styles); // [ 'Jazz', 'Classics', 'Rock-n-Roll' ]

styles.shift();

console.log(styles); // [ 'Classics', 'Rock-n-Roll' ]

styles.unshift('Rap', 'Reggae');

console.log(styles); // [ 'Rap', 'Reggae', 'Classics', 'Rock-n-Roll' ]