const numbers = [3, 4, 6, [1, 3, 7], 10];

console.log(numbers); // (5) [3, 4, 6, Array(3), 10]

console.log(numbers[0]); // 3 = arrayin içindeki sıfırıncı elemanı çağırdık

console.log(numbers[3]); // (3) [1, 3, 7] arrayin içindeki 3. elemanı çağırdık

console.log(numbers[3][2]); // 7 = 3. elemanın içindeki 2. elemanı çağırdık