const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria'];

const objectCountries = countries.map(function (country) {


    return { country, letters: countingLetters(country) };

    function countingLetters(value) {



        return {}
    };
});

console.log(objectCountries);













/* const output = [
    {
        name: "turkiye",
        letters: {
            t: 1,
            u: 1,
            r: 1,
            k: 1,
            i: 1,
            y: 1,
            e: 1
        }
    },
    {
        name: "conono",
        letters: {
            c: 1,
            o: 3,
            n: 2
        }
    }
]
 */
