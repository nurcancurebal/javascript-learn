// Yok ettiğimizde, yok etmek için kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır.

const rectangle = {
    width: 20,
    height: 10,
    area: 200
};

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);    // 20 10 200 undefined