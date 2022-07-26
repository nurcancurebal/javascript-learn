console.log(sumOfOdds(3, 5, 7, 9, 10));

function sumOfOdds() {

    let toplam = 0;

    for (let index = 0; index < arguments.length; index++) {
        if (!(arguments[index] % 2 == 0)) {
            toplam += arguments[index];
        };
    };
    return toplam;
};