const array = [3, 5, 7, 9, 1, 3, 5, 7, 11, 12, 1];

console.log(uniqueArray(array));

function uniqueArray(arrays) {

    let newArray = [];

    for (let index = 0; index < arrays.length; index++) {

        if (!newArray.includes(arrays[index])) {

            newArray.push(arrays[index]);
        };
    };
    return newArray;
};