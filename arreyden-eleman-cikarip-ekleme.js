const numbers= [1, 2, 3, 4, 5, 6]
let newNumbers=numbers.splice(1, 4, 'tuğçe', 'nurcan')  //(4) [2, 3, 4, 5] = çıkartılan elemanları buraya yazar
// başlangıç indeksi, kaç tane eleman silinecek, eklenen elemanlar (3 tane değer giriyoruz)

console.log(numbers) //(4) [1, 'tuğçe', 'nurcan', 6] = son oluşan şeklide sona yazar

//! DİKKAT yeni olaşan ifade ilk baştaki numbers değişkenine atandı artık numbers değişkeni [1, 'tuğçe', 'nurcan', 6] değerleri içeriyor.
