console.log(sumOfNumbers(3, 5, 7, 9, 10));

function sumOfNumbers() {

    let toplam = 0;

    for (let index = 0; index < arguments.length; index++) {

        toplam += arguments[index];
    };
    return toplam;
};