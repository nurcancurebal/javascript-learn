/* Bir maksimum alt dizi
Giriş, bir sayı dizisidir, örneğin arr = [1, -2, 3, 4, -9, 6].

Görev şudur: arr öğelerin maksimum toplamı ile bitişik alt diziyi bulun.

getMaxSubSum(arr)Bu toplamı döndürecek işlevi yazın . */

getMaxSubSum([-1, 2, 3, -9]) // 2 + 3 = 5
getMaxSubSum([2, -1, 2, 3, -9]) // 2 + -1 + 2 + 3 = 6
getMaxSubSum([-1, 2, 3, -9, 11]) // = 11
getMaxSubSum([-2, -1, 1, 2]) // 1 + 2 = 3
getMaxSubSum([100, -9, 2, -3, 5]) // = 100
getMaxSubSum([1, 2, 3]) // 1 + 2 + 3 = 6 (hepsini al)

// Tüm öğeler negatifse, hiçbirini almadığımız anlamına gelir (alt dizi boştur), yani toplam sıfırdır:

getMaxSubSum([-1, -2, -3]) // = 0


/* Diziyi yürütelim ve değişkendeki öğelerin mevcut kısmi toplamını tutalım s. Bir snoktada negatif olursa, atayın s=0. Tüm bunların maksimumu scevap olacaktır.

Açıklama çok belirsizse, lütfen koda bakın, yeterince kısa: */

function getMaxSubSum(arr) {

    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr

        partialSum += item; // add it to partialSum

        maxSum = Math.max(maxSum, partialSum); //maxSum, partialSum içinden hangisi büyükse onu gatirir

        if (partialSum < 0) {

            partialSum = 0; // zero if negative
        }
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0

/* Algoritma tam olarak 1 dizi geçişi gerektirir, bu nedenle zaman karmaşıklığı O(n) olur.

Algoritma hakkında daha detaylı bilgiyi burada bulabilirsiniz: Maksimum alt dizi sorunu . Bunun neden işe yaradığı hala açık değilse, lütfen yukarıdaki örneklerde algoritmayı takip edin, nasıl çalıştığını görün, bu herhangi bir kelimeden daha iyidir. */