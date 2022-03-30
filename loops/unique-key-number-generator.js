let uniqueKey = "";

while (uniqueKey.length < 5) {

    let randomNumber = Math.floor((Math.random() * 9) + 1);

    if (!uniqueKey.includes(randomNumber)) {
        uniqueKey = uniqueKey + randomNumber;
    }
}

console.log(uniqueKey)