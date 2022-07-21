// dışarıdan gelecek ülkeler arrayini arrow function kullanarak büyülterek array olarak ekrana yazdırma

const newCountries = arr => {

    const bigCountries = [];

    for (const newArr of arr) {

        bigCountries.push(newArr.toUpperCase());
    };
    
    return bigCountries;
};

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];

console.log(newCountries(countries));