function evensAndOdds(sayi) {

    if (sayi < 0) {
        throw "Yanlış girdiniz."
    }

    let evensTotal = 0;
    let oddsTotal = 0;

    for (let index = 0; index < sayi; index++) {

        if (index % 2 == 0) {

            evensTotal += index;

        } else {

            oddsTotal += index;
        };
    };

    return [evensTotal, oddsTotal];
};

const aaa = evensAndOdds(100);

console.log(`The number of evens are ${aaa[0]}`);
console.log(`The number of odds are ${aaa[1]}`);