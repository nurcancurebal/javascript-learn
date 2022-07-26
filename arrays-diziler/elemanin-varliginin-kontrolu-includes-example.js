let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'ibm', 'oracle', 'amazon'];

const a = 'Facebook'.toLowerCase();

itCompaniesOne = itCompanies.includes(a); // true döner

console.log(itCompaniesOne == true ? 'there is a company' : 'a company is not found');  // there is a company

itCompaniesTwo = itCompanies.includes('Meta');  // false döner

console.log(itCompaniesTwo == true ? 'there is a company' : 'a company is not found');  // a company is not found