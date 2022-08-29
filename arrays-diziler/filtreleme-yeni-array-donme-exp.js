/* filterRange(arr, a, b) adında bir fonksiyon yazın. arr argümanı alsın, a ile b arasını alsın ve döndersin.

Fonksiyon diziyi modifiye etmemeli. Yeni bir dizi döndürmeli. */


/* let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (eşleşen değerler)

console.log(arr); // 5,3,8,1 (modifiye edilmedi) */

function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [ 3, 1 ] (matching values)

console.log(arr); // [ 5, 3, 8, 1 ] (not modified)