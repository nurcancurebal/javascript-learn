// shift(): bir diziden ilk öğeyi kaldırır, kaldırılan öğeyi döndürür, dizinin uzunluğu değişir

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let itCompaniesThree = itCompanies.shift();

console.log(itCompaniesThree);  // Facebook

itCompanies.shift();

itCompanies.shift();

console.log(itCompanies);   // [ 'Apple', 'IBM', 'Oracle', 'Amazon' ]