function bodyMassIndex(weight, height) {

    let bmi = weight / (height * height);
    return bmi;
};

console.log(`Vücut kitle indeksi= ${bodyMassIndex(55, 1.60)}`);