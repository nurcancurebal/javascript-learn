/* Aşağıda setTimeout ile bir görevi parçalara ayıran bir fonksiyon bulunmaktadır.

Bu fonksiyonu setInterval ile tekrar yazınız: */

let i = 0;

let start = Date.now();

function count() {

    if (i == 1000000000) {

        console.log("Done in " + (Date.now() - start) + 'ms');

    } else {

        setTimeout(count, 0);
    }

    // zorlu bir görev
    for (let j = 0; j < 1000000; j++) {

        i++;
    }
}

count();

// çözüm

let i2 = 0;

let start2 = Date.now();

let timer = setInterval(count2, 0);

function count2() {

    for (let j = 0; j < 1000000; j++) {

        i2++;
    }

    if (i2 == 1000000000) {

        console.log((Date.now() - start2) + 'ms içerisinde tamamlandı');

        cancelInterval(timer);
    }
}