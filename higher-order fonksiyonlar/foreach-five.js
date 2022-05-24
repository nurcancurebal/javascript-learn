// forEach= fonksiyonlarla çalışır.3 parametre alabilir birincisi elemanları ikincisi index değeri üçüncüsü arrayin kendisi

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index, arr) {

    console.log(element, index, arr);
});

// daha kısa yolu arrow function

arr.forEach((element, index, arr) => {

    console.log(element + index, arr);
});

// daha kısa yolu

arr.forEach((element, index, arr) => console.log(index + 1, element + 1, arr));