const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
    { product: 'teas', price: {} },
];

const productsReduce = products.reduce(productsPrice); // callback productsPrice

console.log(productsReduce);

function productsPrice(prices, currentValue, index) { // reduce da index 1 den başlar

    return numberControl(index === 1 ? prices.price : prices) + numberControl(currentValue.price); //reduce' da index 1 den başlıyor

    function numberControl(value) {

        return (typeof value === "number") ? value : 0;
    };
};