const resultOne = generateColor("hex", 4);
const resultTwo = generateColor("hex", 1);
const resultThree = generateColor("rgb", 2);
const resultFour = generateColor("rgb", 1);
const resultFive = generateColor("adasda", 6555645, "asdasdas");

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);
console.log(resultFour);
console.log(resultFive);

function generateColor(type, loop = 0) {

    const items = [];

    for (let index = 0; index < loop; index++) {

        if (type === "hex") {

            const array = [];

            for (let index = 0; index < 3; index++) {

                const numberGenerator = Math.floor((Math.random() * 238) + 17); //238+17= 255, floor ifadesi sayıyı aşağıya yuvarladığı için 255 e kadar sayı bulur
                const convertHexa = Number(numberGenerator).toString(16); //hexaya çevirdi
                array.push(convertHexa);    // 3 kere dönecek, her dönüşte 2 tane hex sayısını arrayin içine atıyor
            };

            let string = array.join('');
            string = "#" + string;

            items.push(string); // stringe dönen hex sayısını loopda girilen sayı kadar item arrayinin içine attı

        } else if (type === "rgb") {

            const array = [];

            for (let index = 0; index < 3; index++) {

                array.push(Math.floor((Math.random() * 255) + 1));
            };

            items.push(`rgb(${array})`);

        } else {
            return "Yanlış Parametre!";
        };
    };
    if (items.length === 0) {

        return "Yanlış Parametre!";

    } else if (items.length === 1) {

        return items[0];

    } else {

        return items;
    };
};