// Artırma/Azaltma sadece değişkenlere uygulanabilirler. 5++ gibi bir kullanım hata verecektir.

// 1.Pre-increment

let countOne = 0;

console.log(++countOne);        // 1

console.log(countOne);          // 1


// 2.Post-increment

let countTwo = 0;

console.log(countTwo++);        // 0

console.log(countTwo);          // 1


// Diğer operatörler arasında arttırma/azaltma
// ++/-- operatörleri ayrıca bir ifadenin içinde kullanılabilirler. Öncelikleri diğer tüm operatörlerden daha yüksektir.

let counter = 1;
console.log(2 * ++counter); // 4

let counterTwo = 1;
console.log(2 * counterTwo++); // 2, çünkü counter++ "eski" değeri döndürecektir