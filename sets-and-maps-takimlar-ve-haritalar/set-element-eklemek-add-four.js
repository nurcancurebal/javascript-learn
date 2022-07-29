// set' e eleman eklemek

const companies = new Set();

console.log(companies.size); // 0

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');

console.log(companies.size); // 5

console.log(companies); // Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }