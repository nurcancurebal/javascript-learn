let array = [3, 5, 7, 9, 10];

console.log(sumOfArrayItems(array));

function sumOfArrayItems(arrays) {

    let sum = 0;
    for (let index = 0; index < arrays.length; index++) {

        sum += arrays[index];
    };
    return sum;
};