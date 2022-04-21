function oddsEvens(sayi) {

    let evensTotal = 0;
    let oddsTotal = 0;

    for (let index = 0; index <= sayi; index++) {

        if (index % 2 == 0) {

            evensTotal++;
        } else {

            oddsTotal++;
        };
    };
    console.log(`The number of odds are ${oddsTotal}`)
    console.log(`The number of evens are ${evensTotal}`)

    return [evensTotal, oddsTotal];
};

oddsEvens(100);