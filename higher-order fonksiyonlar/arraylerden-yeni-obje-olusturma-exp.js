const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria'];

const countriesStartLetter = countries.map(function (country) {

    const data = {};

    country.split("").forEach(function (item, index) {

        if (index == 0) {

            data.name = country;
            data.char = item;
            data.length = 1;

        } else if (data.char.toLowerCase() == item) {

            data.length++;
        };
    });

    return data;
});

console.log(countriesStartLetter);