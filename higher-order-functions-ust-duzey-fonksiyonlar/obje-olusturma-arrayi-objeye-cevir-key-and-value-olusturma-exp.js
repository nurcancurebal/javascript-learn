const countries = ['Germany', 'Denmark', 'Swiss', 'Finland', 'Norway', 'Australia', 'Sweden', 'Holland', 'Austria', 'Argentina'];


const data = {};

countries.forEach(function (country) {

    if (!data[country[0]]) { //objenin içerisine key ekleme bu şekilde yapılır, değişkeni dinamik olarak kullanmak

        data[country[0]] = []; // önce arrayi oluşturduk push işlemini kullanabilmek için

        data[country[0]].push(country);

    } else {

        data[country[0]].push(country);
    }
});


Object.entries(data).forEach(function (item) {

    console.log(`${item[0]} : ${item[1].join(', ')}`);
});

// G : Germany
// D : Denmark
// S : Swiss, Sweden
// F : Finland
// N : Norway
// A : Australia, Austria, Argentina
// H : Holland