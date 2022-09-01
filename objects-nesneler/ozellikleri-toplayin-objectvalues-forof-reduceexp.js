/* Özellikleri toplayınız

maaslar objesindeki maaşları toplayınız.

toplamMaas(maaslar) aında bir fonksiyon yazınız ve bu Object.values ve for..of döngüsü kullanarak tüm maaşların toplamını dönsün.

Eğer maaslar boş ise sonuç 0 olmalıdır.

Örneğin: */

/* let maaslar = {
    "Ahmet": 100,
    "Mehmet": 300,
    "Muzaffer": 700
};

console.log(toplamMaas(maaslar)); // 1100 */

/* Testler ile korunaklı olan aç.

çözüm */

function sumSalaries(maaslar) {

    let sum = 0;

    for (let salary of Object.values(maaslar)) {

        sum += salary;
    }

    return sum; // 650
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650

// Veya isteğe bağlı olarak, toplamı Object.values ve reduce kullanarak da alabiliriz:

// reduce loops over array of salaries,
// adding them up
// and returns the result

function sumSalariesTwo(salaries) {

    return Object.values(salaries).reduce((a, b) => a + b, 0);
}

console.log(sumSalariesTwo(salaries)); // 650