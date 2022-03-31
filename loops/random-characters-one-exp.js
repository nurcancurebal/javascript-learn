const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "v", "y", "z"];

let key = "";

for (let index = 0; index < 6; index++) {
    let randomNumber = data[Math.floor((Math.random() * data.length) + 1)];
    key = key + randomNumber;
}

console.log(key);


//! bunu tekrar anlatabilir misin kocacığım seniseviyor ve öpüyorum