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

const newCountries = [];

for (let i = 0; i < countries.length; i++) {

  newCountries.push(countries[i].length);

};


console.log(newCountries);

// içindeki ülkelerin tek tek karakter uzunluğunu yazdırdık