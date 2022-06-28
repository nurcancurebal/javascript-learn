// Anahtar nesnede bulunamazsa, değişken tanımsıza atanır. Bazen anahtar nesnede olmayabilir, bu durumda bildirim sırasında
// varsayılan bir değer verebiliriz.


const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let { width, height, area, perimeter = 80 } = rectangle;

console.log(width, height, area, perimeter);    // 20 10 200 80



const rectangleTwo = {
    widthTwo: 15,
    heightTwo: 5,
    areaTwo: 75,
    perimeterTwo: 100
};

let { widthTwo, heightTwo, areaTwo, perimeterTwo = 99 } = rectangleTwo;

console.log(widthTwo, heightTwo, areaTwo, perimeterTwo);    // 15 5 75 100