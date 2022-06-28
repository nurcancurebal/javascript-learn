// Sınırsız sayıda argüman alan bir arrow fnction yazmak istediğimizde bir yayılma operatörü kullanırız. Parametre olarak bir yayılma operatörü kullanırsak, bir işlevi çağırdığımızda iletilen argüman bir diziye dönüşecektir.

const sumAllNums = (...args) => {

    console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);  // [ 1, 2, 3, 4, 5 ]


const sumAllNumsTwo = (...args) => {

    let sum = 0;

    for (let num of args) {

        sum += num;
    };

    return sum;
};

console.log(sumAllNumsTwo(1, 2, 3, 4, 5));  // 15