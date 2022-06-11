const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria'];

const objectCountries = countries.map(function (country) {


    return { country, letters: countingLetters(country) };

    function countingLetters(value) {

        value = value.toLowerCase();

        value = value.split("");

        const letters = {};

        value.forEach(function (char) {

            // DAHA KISA : !letters[char] ? letters[char] = 1 : letters[char] += 1;

            if (!letters[char]) {

                letters[char] = 1;

            } else {

                letters[char] += 1;
            }
        });

        return letters;
    };
});

console.log(objectCountries);