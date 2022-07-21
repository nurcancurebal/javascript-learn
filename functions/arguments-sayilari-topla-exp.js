function topla() {

    let total = 0;

    for (let index = 0; index < arguments.length; index++) {

        total += arguments[index];
    };
    
    return total;
};

console.log(topla(3, 5, 10));