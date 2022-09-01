const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft'];

let setOfCompanies = new Set();

for (const company of companies) {

    setOfCompanies.add(company);
};

console.log(setOfCompanies);    // Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }