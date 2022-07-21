console.log(capitalizeArray(['nurcan', 'erdinç', 'bal']));

function capitalizeArray(names) {

    const big = []

    for (let index = 0; index < names.length; index++) {

        big.push(names[index].toUpperCase());
    };
    
    return big;
};