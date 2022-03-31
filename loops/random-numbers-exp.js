const randomNumbers = [];

for (let index = 0; index < 16; index++) {
    randomNumbers.push(Math.floor((Math.random() * 100) + 1));
};

console.log(randomNumbers)