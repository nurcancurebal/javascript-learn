function arrayOfHexaColors(sayi) {

    for (let index = 0; index < sayi; index++) {

        const newArray = [];
        const randomNumbers = [];

        for (let index = 0; index < 5; index++) {

            const numberGenerator = Math.floor((Math.random() * 100) + 1);
            randomNumbers.push(numberGenerator);
        };

        let unite = randomNumbers.join('');
        let convertHexa = Number(unite).toString(16);
        newArray.push(convertHexa);

        return newArray;

    };
};

console.log(arrayOfHexaColors(5));

//TODO dışarıdan girdiğim sayı kadar arrayin içinde farklı hexa number olacak çıktı array şeklinde