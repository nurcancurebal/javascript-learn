console.log(sumOfEven(3, 5, 7, 9, 10, 20));

function sumOfEven() {

    let toplam = 0;

    for (let index = 0; index < arguments.length; index++) {
        if (arguments[index] % 2 == 0) {
            toplam += arguments[index];
        };
    };
    return toplam;
};