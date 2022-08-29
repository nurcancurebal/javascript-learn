// pop() yöntemi, bir diziden son öğeyi kaldırır ve o öğeyi döndürür. Bu yöntem dizinin uzunluğunu değiştirir.

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

let newitCompanies = itCompanies.pop();

console.log(itCompanies.join(', '), 'and', newitCompanies, ' are big IT companies.');
//Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon  are big IT companies.