console.log(sumArguments(2, 5));
console.log(sumArguments(2, 5, 7));
console.log(sumArguments(2, 5, 7, 5));



function sumArguments() {

    let total = 0;

    for (let index = 0; index < arguments.length; index++) {

        total += arguments[index];
    };
    return total;
};