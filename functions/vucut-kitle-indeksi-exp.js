function bodyMassIndex(weight, height) {

    let bmi = weight / (height * height);
    return bmi;
};

let sonuc = bodyMassIndex(-150, 1.60);

console.log(`Vücut kitle indeksi= ${sonuc}`);

if (0 <= sonuc && sonuc <= 18.4) {

    console.log(`Underweight: BMI is less than 18.5`);

} else if (18.5 <= sonuc && sonuc <= 24.9) {

    console.log(`Normal weight: BMI is 18.5 to 24.9`);

} else if (25 <= sonuc && sonuc <= 29.9) {

    console.log(`Overweight: BMI is 25 to 29.9`);

} else if (sonuc >= 30) {

    console.log(`Overweight: BMI is 25 to 29.9`);

} else {

    console.log('Tam sayı girmediniz');
};