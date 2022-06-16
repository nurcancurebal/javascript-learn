const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Argentina'];

const countriesMap = countries.map(function (country) {

    let countrySplit = country.split("");

    const data = { letter: countrySplit[0], country: country };

    return data;
});

console.log(countriesMap);


// 
// f: finland, fiji, france

//TODO