const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "B", "c", "D", "e", "F", "g", "H", "i", "J", "k", "L", "m", "N", "o", "P", "q", "R", "s", "T", "u", "V", "w", "X", "y", "Z",];

console.log(userIdGenerator());

function userIdGenerator() {

    const key = [];

    for (let index = 0; index < 7; index++) {

        const randomChar = data[Math.floor((Math.random() * data.length) + 1)];
        key.push(randomChar);
    };

    let randomKey = key.join('');

    return randomKey;
};