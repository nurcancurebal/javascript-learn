const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];

setOfCompanies = new Set(companies);

console.log(setOfCompanies.has('Apple')); // false

console.log(setOfCompanies.has('Google')); // true