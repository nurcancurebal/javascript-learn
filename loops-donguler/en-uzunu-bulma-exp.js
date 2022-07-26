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

const countriesLenght = [0];

for (let index = 0; index < countries.length; index++) {

    if (countriesLenght[0] < countries[index].length) {

        countriesLenght[0] = countries[index].length;

        countriesLenght[1] = countries[index];
    };
};

console.log(countriesLenght[1]);