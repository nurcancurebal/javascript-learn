// Bir fonksiyon parametresi olarak anahtarları yok etme. Bir dikdörtgen nesne alan ve bir dikdörtgenin çevresini döndüren bir fonksiyon oluşturalım.


// Tahribatsız nesne parametresi

const rect = {
    width: 20,
    height: 10
};

const calculatePerimeter = function (rectangle) {

    return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect));  // 60 



// İmha etme ile nesne parametresi

const calculatePerimeterTwo = function ({ width, height }) {

    return 2 * (width + height);
};

console.log(calculatePerimeterTwo(rect));