const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Ethiopia',
  'Denmark',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

let countriesOne = countries.includes('Ethiopia');

console.log(countriesOne); // true

let control = countries.indexOf('Ethiopia');

console.log(control);  //3

console.log(countriesOne ? countries[control].toUpperCase() : countries.push('Ethiopia'));  // ETHIOPIA