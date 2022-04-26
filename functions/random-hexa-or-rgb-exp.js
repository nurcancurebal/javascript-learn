// TODO OOOOOOOOOOOOOOO
const resultOne = generateColor("rgb", 2);
const resultTwo = generateColor("hex", 1);
const resultThree = generateColor("rgb", 1);
const resultFour = generateColor("hex", 4);
const resultFive = generateColor("adasda",6555645,"asdasdas");

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

                const numberGenerator = Math.floor((Math.random() * 230) + 17);
                const convertHexa = Number(numberGenerator).toString(16);
                array.push(convertHexa);

            };

            let string = array.join('');
            string = "#" + string;

            items.push(string);

        } else if (type === "rgb") {


            const array = [];

            for (let index = 0; index < 3; index++) {

                array.push(Math.floor((Math.random() * 255) + 1));
            };

            items.push(`rgb(${array})`)

        } else {
            return "Yanlış Parametre!"
        }

    }

    if (items.length === 0) {
        return "Yanlış Parametre!"
    } else if (items.length === 1) {
        return items[0];
    } else {
        return items;
    }
}