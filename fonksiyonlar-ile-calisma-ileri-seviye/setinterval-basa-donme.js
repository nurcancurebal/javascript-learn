
const cities = ["Bursa", "İstanbul", "Ankara", "İzmir"];
let index = 0;


console.log(cities[index]);

index++;

setInterval(() => {

    console.log(cities[index]);

    index++;

    if (index == 4) {
        index = 0;
    };

}, 1000);