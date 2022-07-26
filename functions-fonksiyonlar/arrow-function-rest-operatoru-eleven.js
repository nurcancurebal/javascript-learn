//NOT: Arrow function'da arguments kavramı yoktur. Onun yerine rest operatörü kullanırız.

const toplama = (...numbers) => {

    console.log(numbers)
};

toplama(2, 5, 7, 8, 9); // (5) [2, 5, 7, 8, 9]


const toplamaIki = (num1, num2, ...numbersIki) => {

    console.log(num1, num2);    // 2 5

    console.log(numbersIki);    // (3) [7, 8, 9]
};

toplamaIki(2, 5, 7, 8, 9);

// tek satırlık işlemlerde


const square = n => n * n;

console.log(square(11));    //121