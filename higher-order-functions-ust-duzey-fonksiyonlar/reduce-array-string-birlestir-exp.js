const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const countriesReduce = countries.reduce(function (country, count, index, array) {

    if (array.length === (index + 1)) {

        return country + ` ve ${count} Kuzey Avrupa ülkeleri.`;

    } else {

        return country + `, ${count}`;
    }
});

console.log(countriesReduce);