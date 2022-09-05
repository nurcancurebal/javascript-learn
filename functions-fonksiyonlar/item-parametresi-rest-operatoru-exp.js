// bir item parametresi alır ve itemi ekledikten sonra bir array döndürür

const array = ["Bursa", "Antalya", "İzmir", "Ankara"];

console.log(addItem(array, "Bodrum", "Kıbrıs"));

function addItem(funcArray, ...arg) { //...arg bundan sonrakileri al manasında kullanılmıştır.

    const newArray = [];

    for (let index = 0; index < funcArray.length; index++) {

        newArray.push(funcArray[index]);
    };

    for (let index = 0; index < arg.length; index++) {

        newArray.push(arg[index]);
    };

    return newArray;
};