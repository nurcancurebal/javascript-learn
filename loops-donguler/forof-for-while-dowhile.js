const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {

    console.log('for of', num);

}; // ekran çıktısı aşağıya doğru for of 1 for of 2 for of 3 for of 4 for of 5
// içindeki ürün kadar saydırma yapar


for (let i = 0; i <= 4; i++) {

    console.log('for', numbers[i]);

};  // ekran çıktısı aşağıya doğru for 1 for 2 for 3 for 4 for 5



let a = 0;

while (a <= 4) {

    console.log('while', numbers[a]);
    a++;
};   // ekran çıktısı aşağıya doğru while 1 while 2 while 3 while 4 while 5


let b = 0;

do {

    console.log('do while', numbers[b]);
    b++;

} while (b <= 4);  //ekran çıktısı aşağıya doğru do while 1 do while 2 do while 3 do while 4 do while 5