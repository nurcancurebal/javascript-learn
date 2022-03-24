const numbers= [1, 2, 3, 4, 5, 6]
console.log(numbers.splice(1, 4, 'tuğçe', 'nurcan'))  //(4) [2, 3, 4, 5] = çıkartılan elemanları buraya yazar
// başlangıç konumu, çıkartılacak elemanlar, eklenen elemanlar (3 tane değer giriyoruz)

console.log(numbers) //(4) [1, 'tuğçe', 'nurcan', 6] = son oluşan şeklide sona yazar