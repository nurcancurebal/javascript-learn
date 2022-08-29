/* Olduğu yerde filtreleme

arr alan ve filterRangeInPlace(arr,a,b) fonksiyonu ile a ile b arasındaki değerleri alıp ve bunun haricindekileri bu diziden silen fonksiyonu yazınız.

Fonksiyon diziyi modifiye etmeli. Bir şey döndürmemeli.

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1 ile 4 aralığı dışındaki sayıları siliniz.

console.log( arr ); // [3, 1] */


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {

        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {

            arr.splice(i, 1); // i den başla bir tane sil
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]