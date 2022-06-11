let products = [
    { product: 'banana', price: 3 }, // entries: 0: (2) ['product', 'banana']
    { product: 'mango', price: 6 },           // 1: (2) ['price',3] şelinde arreye çevirir.
    { product: 'potato', price: 2 },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: 2 },
];



// forEach 1.YOL, burada products' ı değiştirmedik
const newProducts = []

products.forEach(function (productUpper) {

    const convertObjectToArray = Object.entries(productUpper);

    convertObjectToArray[0][1] = String(convertObjectToArray[0][1]).toUpperCase();

    const oldConvert = Object.fromEntries(convertObjectToArray); // Entries üzerinden nesne klonu oluşturmak için kullanılır.

    newProducts.push(oldConvert);
});

console.log(newProducts);



// forEach 2.YOL, burada products' ın orijinalini değiştirdik
products.forEach(function (productsUpper) { // yalnızca for gibi saydırmaya yarar

    productsUpper.product = productsUpper.product.toUpperCase();
});

console.log(products); // ForEach' in diğerlerinden farkı return dönmemesi



// map, burada products' ın orijinalini değiştirdik
products.map(function (productsLower) { // forEach' ten farkı dönüştürmeye yarar

    productsLower.product = productsLower.product.toLowerCase();

    return productsLower; // forEach' ten farkı return olması
});

console.log(products);



// filter
const priceFilter = products.filter(function (findFilter) { // farkı ana dizinde değişiklik yapamıyorsun
    
    return findFilter.price == 2;
});

console.log(priceFilter);



//reduce (farkı tek bir değer dönmesi ve ana dizinde değişiklik yapamıyoruz)
const priceReduce = products.reduce(function (oldValue, CurrentValue) { //! reduce da iki parametre giriyoruz diğerlerinden farklı olarak
    
    return oldValue + CurrentValue.price;
},0);

console.log(priceReduce);