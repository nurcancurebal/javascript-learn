let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];

const a = 'Facebook'.toLowerCase();

itCompaniesOne = itCompanies.includes(a); // true/false döner

console.log(itCompaniesOne == true ? 'there is a company' : 'a company is not found');

itCompaniesTwo = itCompanies.includes('Meta');

console.log(itCompaniesTwo == true ? 'there is a company' : 'a company is not found');