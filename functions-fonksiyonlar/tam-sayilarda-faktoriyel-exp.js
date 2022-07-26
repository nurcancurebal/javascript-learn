// Fonksiyonunuzu faktöriyel olarak adlandırın, parametre olarak bir tam sayı alır ve sayının faktöriyelini döndürür.

factorial(-1);
factorial(10);
factorial(3);
factorial(-3);
factorial(1);

function factorial(value) {

    if (value > 0) {

        let sumValue = 1;

        for (let index = 1; index <= value; index++) {

            sumValue = sumValue * index;
        };
        console.log(`faktöriyel = ${sumValue}`);

    } else if (value < 0) {

        let sumValue = 1;

        for (let index = value; index < 0; index++) {

            sumValue = sumValue * index;
        };

        console.log(`faktöriyel = ${sumValue}`);
    };
};