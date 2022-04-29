console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));

function modifyArray(array) {

    let newArray = [];

    if (array.length < 5) {

        newArray = 'item not found';
    } else {

        for (let index = 0; index < array.length; index++) {


            if (index == 4) {

                array[index] = array[index].toUpperCase();
            };

            newArray.push(array[index]);
        };
    };
    return newArray;
};