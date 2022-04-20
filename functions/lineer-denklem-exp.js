function solveLinEquation(a, b, c) {

    let x = -c / a;
    let y = -c / b;

    return [x, y];

};

const print = solveLinEquation(3, 5, 7);

console.log(`X ekseni= ${print[0]}, Y ekseni= ${print[1]}`);



// 2. yol bu daha basit

function solveLinEquationTwo(d, e, f) {

    let xx = -f / d;
    let yy = -f / e;

    console.log(`X ekseni= ${xx}, Y ekseni= ${yy}`)
};

solveLinEquationTwo(3, 5, 7);
