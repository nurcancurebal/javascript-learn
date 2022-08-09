// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b    (kalan bulma)
// Exponential(**): a ** b  (Üssünü alma)


const PI = 3.14;

let radius = 100;          // metre cinsinden uzunluk

const areaOfCircle = PI * radius * radius;  //Bir dairenin alanını hesaplayalım

console.log(areaOfCircle);  //  314 m


const gravity = 9.81;      // in m/s2

let mass = 72;             // in Kilogram

const weight = mass * gravity;  // Bir cismin ağırlığını hesaplayalım

console.log(weight);        // 706.32 N(Newton)


const boilingPoint = 100;  // oC cinsinden sıcaklık, suyun kaynama noktası

const bodyTemp = 37;       // oC cinsinden vücut ısısı

// Dize enterpolasyonu kullanarak dizeyi sayılarla birleştirme
// Suyun kaynama noktası 100 oC'dir.İnsan vücut sıcaklığı 37 oC'dir.Dünyanın yerçekimi 9.81 m

console.log(
    `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
);