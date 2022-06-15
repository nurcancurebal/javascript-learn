const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Argentina'];

const countriesMap = countries.map(function (country) {

    let countrySplit = country.split("");

    const data = { letter: countrySplit[0], country: country };

    return data;
});

console.log(countriesMap);


// [
//     {letter: G, country: Germany},
//     {letter: D, country: Denmark},
//     {letter: S, country: Swiss,  Sweden}, bu şekilde mi
//     {Letter: A, country: Australia, country: Austria, country: Arjantin }, bu şekilde mi
// ]

//TODO