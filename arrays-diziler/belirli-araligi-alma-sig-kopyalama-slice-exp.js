const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

let length = countries.length;

let middle = length / 2;

middle = Math.floor(middle);

console.log(countries[middle]);  // Finland

console.log(countries.slice(9, 11));  // [ 'Japan', 'Kenya' ]