const products = [
    { product: 'banana', price: 3 }, // entries: 0: (2) ['product', 'banana']
    { product: 'mango', price: 6 },           // 1: (2) ['price',3] şelinde arreye çevirir.
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

const newProducts = []

products.forEach(function (productUpper) {

    const convertObjectToArray = Object.entries(productUpper);

    convertObjectToArray[0][1] = String(convertObjectToArray[0][1]).toUpperCase();

    const oldConvert = Object.fromEntries(convertObjectToArray); // Entries üzerinden nesne klonu oluşturmak için kullanılır.

    newProducts.push(oldConvert);
});

console.log(newProducts);


