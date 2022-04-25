// userIdGenerator fonksiyonunu değiştirin userIdGeneratedByUser bir fonksiyon adı bildirin. Herhangi bir parametre almaz, ancak komut ()
// kullanarak iki girdi alır. Girdilerden biri karakter sayısıdır ve ikinci girdi, üretilmesi gereken kimlik sayısıdır.

const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "B", "c", "D", "e", "F", "g", "H", "i", "J", "k", "L", "m", "N", "o", "P", "q", "R", "s", "T", "u", "V", "w", "X", "y", "Z",];


let string = "";


for (let index = 0; index < 5; index++) {
    string = string + (userIdGenerator() + "\n");
};


console.log(string);

function userIdGenerator() {

    const key = [];

    for (let index = 0; index < 7; index++) {

        const randomChar = data[Math.floor((Math.random() * data.length) + 1)];
        key.push(randomChar);
    };

    let randomKey = key.join('');

    return randomKey;
};