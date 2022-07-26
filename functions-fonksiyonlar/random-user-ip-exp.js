const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(randomUserIp());

function randomUserIp() {

    let key = '';

    for (let index = 0; index <= 10; index++) {

        let randomCharacter = data[Math.floor((Math.random() * data.length))];
        key = key + randomCharacter;
    };
    return key;
};