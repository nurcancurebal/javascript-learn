// Console.assert() yöntemleri, eğer iddia yanlışsa konsola bir hata mesajı yazar. Eğer iddia doğruysa, hiçbir şey olmaz. İlk parametre
// bir iddia ifadesidir. Bu ifade yanlış ise, Onaylama başarısız hata mesajı görüntülenir.

console.assert(4 > 3, '4 is greater than 3');   // hiç bir şey yazmadı


console.assert(3 > 4, '3 is not greater than 4');   // Assertion failed: 3 is not greater than 4


for (let i = 0; i <= 10; i += 1) {

    let errorMessage = `${i} is not even`;  // even: çift

    console.log('the # is ' + i);

    console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
};

// the # is 0
// the # is 1
// Assertion failed: {number: 1, errorMessage: '1 is not even'}
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMessage: '3 is not even'}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMessage: '5 is not even'}
// the # is 6
// the # is 7
// Assertion failed: {number: 7, errorMessage: '7 is not even'}
// the # is 8
// the # is 9
// Assertion failed: {number: 9, errorMessage: '9 is not even'}
// the # is 10