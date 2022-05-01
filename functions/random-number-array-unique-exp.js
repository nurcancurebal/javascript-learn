console.log(uniqueRandomNumber());

function uniqueRandomNumber() {

    let randomNumberArray = [];

    for (let index = 0; randomNumberArray.length < 7; index++) {

        let randomNumber = (Math.floor((Math.random() * 9)));

        if (!randomNumberArray.includes(randomNumber)) {
            
            randomNumberArray.push(randomNumber);
        };
    };
    return randomNumberArray;
};