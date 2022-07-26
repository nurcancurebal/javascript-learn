const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

let same = shoppingCart[0] == 'meat';

same ? console.log('available') : shoppingCart.unshift('Meat') && console.log(shoppingCart);

let end = shoppingCart[3] == 'Sugar';

end ? console.log('available') : shoppingCart.push('Sugar') && console.log(shoppingCart);

let newShoppingCart = shoppingCart.splice(3, 2, 'Green Tea');

console.log(shoppingCart);