let uniqueKey = "";

while (uniqueKey.length < 5) {

    let randomNumber = Math.floor((Math.random() * 9) + 1);

    if (!uniqueKey.includes(randomNumber)) {
        uniqueKey = uniqueKey + randomNumber;  // stringde yan yana yazdırma, string değer olduğu için yan yana yazar
    }
}

console.log(uniqueKey)