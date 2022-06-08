const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

let namesSome = names.some(function (item) {

    return item.length > 7;
});

console.log(namesSome);