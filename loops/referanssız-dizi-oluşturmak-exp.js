const countries = [
  'Kenya',
  'Albania',
  'Bolivia',
  'Canada',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Denmark',
  'Ethiopia',

];

const newCountries = [];

for (let index = 0; index < countries.length; index++) {
  newCountries.push(countries[index])
}

newCountries.sort();

console.log("countries", countries);
console.log("newCounries", newCountries)

// referanslı olursa const newCountries = countries yazarsak newCountries' in içinde değişiklik yaptığımız zaman
// countriesinde içi değişir ancak bu şekilde push edersek yeni bir değişken oluşturmuş oluruz ve bu referanssız değişken
//  olmuş olur newCountries' in içinde değişiklik yaptığımız zaman countries değişmez