isPrime(3, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17);

function isPrime() {

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] < 0) {

            console.log('Girilen sayı negatiftir, asal olamaz.');

        } else {

            let control = 0;

            for (let index = 1; index <= arguments[i]; index++) {

                if (arguments[i] % index == 0) {

                    control++;
                };
            };

            if (control == 2) {

                console.log(`Sayı asal sayıdır ${arguments[i]}`);
            };
        };
    };
};