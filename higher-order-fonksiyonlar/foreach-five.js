// forEach= Döngüye sokmak için. fonksiyonlarla çalışır.3 parametre alabilir: bir elemanları, iki index değeri, üç arrayin kendisi
//! forEach = return dönmez

const arr = [1, 2, 3, 4, 5];

arr.forEach(function (element, index, arr) { // element = arrayin elemanları

    console.log(element, index, arr);
});

// daha kısa yolu arrow function

arr.forEach((element, index, arr) => {

    console.log(element + index, arr);
});

// daha kısa yolu

arr.forEach((element, index, arr) => console.log(index + 1, element + 1, arr)); 