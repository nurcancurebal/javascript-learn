function evensAndOdds(sayi1, sayi2 = 0) {

    let evensTotal = 0;
    let oddsTotal = 0;

    for (let index = 0; index < sayi1; index++) {

        if (sayi2 % 2 == 0) {

            evensTotal += sayi2;

        } else {

            oddsTotal += sayi2;
        };

        sayi2 = sayi2 + 1;
    };

    evensAndOdds[0]=evensTotal;
    evensAndOdds[1]=oddsTotal;

    return evensAndOdds;
};

evensAndOdds(100);

console.log(`The number of evens are ${evensAndOdds[1]}`);
console.log(`The number of odds are ${evensAndOdds[0]}`);


//TODO neden çalışmadı
//TODO evensAndOdds fonksiyonu yalnızca pozitif tam sayıları alabilir olacak