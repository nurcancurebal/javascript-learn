function sumArrayValues(array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i];

    };

    return total;

};

let dizi = [2, 4, 6, 8, 10];

console.log('toplam', sumArrayValues(dizi));