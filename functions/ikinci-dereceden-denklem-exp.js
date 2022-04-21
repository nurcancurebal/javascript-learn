function solveQuadEquation(a, b, c) {

    let delta = (b ** 2) + (-4 * a * c);

    if (delta > 0) {

        let x1 = (-b + (Math.sqrt(delta))) / 2 * a;
        let x2 = (-b - (Math.sqrt(delta))) / 2 * a;

        console.log(`Çözüm kümesi iki reel kök var x1= ${x1}, x2= ${x2}`);

    } else if (delta == 0) {

        let x3 = -b / (2 * a);

        console.log(`Çözüm kümesi çakışık kök var x1=x2= ${x3}`);

    } else {

        console.log('Boş küme, kök yok');
    };
};

// solveQuadEquation(1, 5, -14); // Çözüm kümesi iki reel kök var x1= 2, x2= -7
// solveQuadEquation(9, -6, 1);  // Çözüm kümesi çakışık kök var x1=x2= 0.3333333333333333
// solveQuadEquation(1, 1, 2);   // Boş küme, kök yok