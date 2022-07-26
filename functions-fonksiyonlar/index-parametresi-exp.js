// indeks parametresi alır ve  bir öğeyi çıkardıktan sonra bir array döndürür,

const array = ["Bursa", "Antalya", "İzmir", "Ankara"];


console.log(removeItem(array, 2));

function removeItem(funcArray, index) {

    const newArray = [];

    for (let index = 0; index < funcArray.length; index++) {

        newArray.push(funcArray[index]);
    };

    newArray.splice(index, 1);

    return newArray;
};