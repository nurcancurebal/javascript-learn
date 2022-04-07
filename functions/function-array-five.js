function sumArrayValues(array) {

    let total = 0;

    for (let i = 0; i < array.length; i++) {

        total += array[i];

    };

    return total;

};

let dizi = [2, 4, 6, 8, 10]; //TODO burada sumArrayValues değişkeninin içindeki arrayleri yazdık ama bunun ona ait olduğunu nasıl gösterdik

console.log('toplam', sumArrayValues(dizi)); // burada ekrana yazdırma olayının nasıl olduğunu hiç anlamadım