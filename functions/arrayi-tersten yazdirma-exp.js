// parametre olarak array alsın ve arrayin tersini döndürür (yöntem kullanmayın)


const array = [1, 2, 3];


console.log(reverseArray(array));


function reverseArray(funcArray) {

    let items = [];         // çıktıyı array olarak verir

    for (let index = (funcArray.length - 1); 0 <= index; index--) {

        items.push(funcArray[index]);

    };

    return items;

};