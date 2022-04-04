// ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

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

const countriesLenght = 0;

for (let index = 0; index < countries.length; index++) {

    let length = countries[index].length;


    if (countriesLenght < length) {

        countriesLenght = length;

    }
}
console.log(countries[countriesLenght]);

//TODO yapamadımmm :(