// Parametre olarak iletilen fonksiyonlara callback denir.

const callback = (n) => { //! bunu bu şekildede yazabiliriz, const callback = n => n ** 2;

    return n ** 2;          //! önce burayı yaptı 9 buldu
};


function cube(callback, n) {

    return callback(n) * n;   //! sonra burayı yaptı 27 buldu.
};

console.log(cube(callback, 3));