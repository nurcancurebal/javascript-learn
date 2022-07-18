// Bir dizeden en sık kullanılan on sözcüğü alan tenMostFrequentWords adlı bir işlev yazın?

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


console.log(tenMostFrequentWords(paragraph, 15));

console.log(tenMostFrequentWords(paragraph, 10));

console.log(tenMostFrequentWords(paragraph, 3));


function tenMostFrequentWords(text, number) {

    const pattern = /[A-Za-z]+/g;

    const matches = text.match(pattern);

    let result = {};

    matches.forEach(function (label) {

        const string = String(label).toLowerCase();

        if (!result[string]) {  // key oluşturma bir sonraki dönüşte keyi kontrol etme

            result[string] = 1;

        } else {

            result[string]++;
        }
    });

    result = Object.entries(result);

    result = result.map(item => {

        return { word: item[0], count: item[1] };
    });

    const resultSort = result.sort(function (a, b) {

        return b.count - a.count;
    });


    const filter = resultSort.filter(function (item, index) {

        if (index < number) {

            return item;
        }
    });

    return filter;
};