const randomFiveNumberArray = [];


for (let index = 0; index < 5; index++) {
    randomFiveNumberArray.push(Math.floor((Math.random() * 100) + 1))

}

console.log(randomFiveNumberArray);