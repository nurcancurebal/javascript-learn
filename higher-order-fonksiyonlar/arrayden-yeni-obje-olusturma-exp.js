// baş harfin kendi içinde kaç kere kullanıldığını bulacak

const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria'];


const countriesStartLetter = countries.map(function (country) {

    const data = {};

    country.split("").forEach(function (item, index) { // harf harf parçaladık

        if (index == 0) {

            data.name = country;
            data.char = item;
            data.length = 1;

        } else if (data.char.toLowerCase() == item) {

            data.length++;
        }
    });

    return data;
});

console.log(countriesStartLetter);


// [
//     { name: 'Germany', char: 'G', length: 1 },
//     { name: 'Denmark', char: 'D', length: 1 },
//     { name: 'Swiss', char: 'S', length: 3 },
//     { name: 'Finland', char: 'F', length: 1 },
//     { name: 'Norway', char: 'N', length: 1 },
//     { name: 'Australia', char: 'A', length: 3 },
//     { name: 'Sweden', char: 'S', length: 1 },
//     { name: 'Holland', char: 'H', length: 1 },
//     { name: 'Austria', char: 'A', length: 2 }
//   ]