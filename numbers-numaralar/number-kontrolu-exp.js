/* sayiOku adında bir fonksiyon oluşturun. Bu fonksiyon girilen sayıları değer alsın.
Sonuç sayı döndürmelidir.
boş değer varsa veya null varsa. Bu durumda fonksiyon null döndürmelidir. */

function sayiOku() {

    for (let index = 0; index < arguments.length; index++) {

        if (arguments[index] === 'null' || arguments[index] === '') {

            console.log('null');
        }

        if (isFinite(arguments[index])) {

            return console.log(`Girilen sayı number ${arguments[index]}`);
        }
    }
}

sayiOku('2', 'Nurcan', '', 3, 'null');