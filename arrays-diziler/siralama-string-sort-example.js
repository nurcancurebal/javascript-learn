// sort(): orijinal dizide değişiklik yapar

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let itCompaniesOne = itCompanies.sort(); // sıralama

console.log(itCompanies); // ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle']
// burada değişmemesi için itCompanies' in refarannsız kopyası üzerinde sıralama yapmak gerek 

console.log(itCompaniesOne); // ['Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle'] 