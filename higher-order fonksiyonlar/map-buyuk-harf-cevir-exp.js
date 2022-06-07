const names = ['Nurcan', 'Cürebal', 'Bal', 'Erdinç'];


names.map(function (bigNames) {

    console.log(bigNames.toUpperCase());   
});
// ekran çıktısı:
// NURCAN
// CÜREBAL
// BAL
// ERDINÇ


const namesToUpperCase = names.map(function (bigNames) {

    return bigNames.toUpperCase();
});

console.log(namesToUpperCase);  // [ 'NURCAN', 'CÜREBAL', 'BAL', 'ERDINÇ' ]