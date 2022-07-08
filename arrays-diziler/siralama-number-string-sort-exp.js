// sort() : sayılarda sıralama yaparken yalnızca 1. karaktere göre sıralama yapar ve negatif sayıları sıralayamaz

//number

let numbers = [4, 7, 2, 9, 123, 236, 1];

numbers.sort();

console.log(numbers); // sıfıncı diziye bakıyor hangisi küçük onu yazıyor 2. diziye bakıyor sıralamayı ona göre yapıyor
// (7) [1, 123, 2, 236, 4, 7, 9]


//string

let name = ['nurcan', 'ayşe', 'erdinç', 'fatma', 'timur'];

console.log(name.sort()); // (5) ['ayşe', 'erdinç', 'fatma', 'nurcan', 'timur']
// a' dan z' ye sıralar