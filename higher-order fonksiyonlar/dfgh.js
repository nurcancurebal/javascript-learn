// 20 ülke olacak, ortadan beş tane getir veya soldan 5 veya sağdan 5 tane getir, fonksiyon 2 parametre alır 1. parametre nereden getireceği 2. kaç adet getirecek forEach yada reduce

const countries = [
  "Germany",
  "Denmark",
  "Swiss",
  "Finland",
  "Norway",
  "Australia",
  "Sweden",
  "Holland",
  "Austria",
  "Canada",
  "China",
  "India",
  "United States of America",
  "Indonesia",
  "Brazil",
  "Pakistan",
  "Nigeria",
  "Bangladesh",
  "Japan",
  "Russian Federation",
];


console.log(getFirstTenCountries(countries, 5));


function getFirstTenCountries(array, number) {

  const result = countries.forEach(function (_country, index, arr) {

    if (index < number) {

      return array[index];

    } else if (arr.lenght / 2 - 3 < index < arr.lenght / 2 + 3) {

      return array[index];

    } else if (arr.lenght - number <= index) {

      return array[index];

    }
  });

  return result;
}

// TODO
