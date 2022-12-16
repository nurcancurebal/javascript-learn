const countries = [
    {
        name: 'Afghanistan',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145
    },
    {
        name: 'Åland Islands',
        languages: ['Swedish'],
        population: 28875
    },
    {
        name: 'Albania',
        languages: ['Albanian'],
        population: 2886026
    },
    {
        name: 'Algeria',
        languages: ['Arabic'],
        population: 40400000
    },
    {
        name: 'American Samoa',
        languages: ['English', 'Samoan'],
        population: 57100
    },
    {
        name: 'Andorra',
        languages: ['Catalan'],
        population: 78014
    },
    {
        name: 'Angola',
        languages: ['Portuguese'],
        population: 25868000
    },
    {
        name: 'Anguilla',
        languages: ['English'],
        population: 13452
    },
    {
        name: 'Antarctica',
        languages: ['English', 'Russian'],
        population: 1000
    },
    {
        name: 'Antigua and Barbuda',
        languages: ['English'],
        population: 86295
    },
    {
        name: 'Argentina',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400
    },
    {
        name: 'Armenia',
        languages: ['Armenian', 'Russian'],
        population: 2994400
    },
    {
        name: 'Aruba',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394
    },
    {
        name: 'Australia',
        languages: ['English'],
        population: 24117360
    },
    {
        name: 'Austria',
        languages: ['German'],
        population: 8725931
    },
    {
        name: 'Azerbaijan',
        languages: ['Azerbaijani'],
        population: 9730500
    }
]

const totalPopulation = 7349137231;

/* for (let index = 0; index < countries.length; index++) {

    console.log((countries[index].population * 100) / totalPopulation);

} */
// bu şekilde her sonucu tek tek yazıyor


/* for (let index = 0; index < countries.length; index++) {

    return console.log((countries[index].population * 100) / totalPopulation);
} */

// bu şekilde yalnızca ilk bulduğu sonucu yazıp fonksiyondan çıkıyor

for (let index = 0; index < countries.length; index++) {

    const widthPopulation = (countries[index].population * 100) / totalPopulation; 

    console.log(widthPopulation);
}
// buda sonucu tek tek yazdırdı