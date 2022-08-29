// pop()= bir diziden son öğeyi kaldırır, o öğeyi döndürür, dizinin uzunluğunu değişir

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let itCompaniesfive = itCompanies.pop();

itCompanies.pop();
itCompanies.pop();

console.log(itCompanies); // [ 'Facebook', 'Google', 'Microsoft', 'Apple' ]

console.log(itCompaniesfive); // Amazon