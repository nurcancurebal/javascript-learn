// Bir personAccount çıkışı işlevi(fonksiyonu) oluşturun. Ad, soyad, gelirler, giderler iç değişkenlerine sahiptir.
// totalIncome, totalExpense, accountInfo, addIncome, addExpense ve accountBalance iç fonksiyonlarına sahiptir. Gelirler bir
// dizi gelirdir ve tanımı ve giderleri de bir dizi gider ve tanımıdır.


function personAccount() {

    const obj = {};

    const callbackClouse = { addIncome, addExpense, totalIncome, totalExpense, accountBalance, accountInfo };

    return person();

    function person() {

        obj.name = "Nurcan";
        obj.surname = "Cürebal";
        obj.income = [{
            nurcanMaas: 15000,
            erdincMaas: 20000
        }];

        obj.expense = [{
            elektrik: 5000,
            su: 4000,
            dogalgaz: 8000,
            kira: 9000,
            okul: 2000
        }];

        return callbackClouse;
    };

    function addIncome(item) {

        obj.income.push(item);

        return callbackClouse;  // return callbackClouse aşağıda ekleme işlemini gerçekliştirmek için
    };

    function addExpense(item) {

        obj.expense.push(item);

        return callbackClouse;
    };

    function totalIncome() {

        let allIncomePrices = [];

        obj.income.forEach(item => {

            Object.values(item).forEach(inItem => {

                allIncomePrices.push(inItem);
            });
        });

        const total = allIncomePrices.reduce(function (oldValue, currentValue) {

            return oldValue + currentValue;
        });

        return total;
    };

    function totalExpense() {

        let allExpensePrices = [];

        obj.expense.forEach(item => {

            Object.values(item).forEach(inItem => { // objelerin value larını arrayin içine push ladık

                allExpensePrices.push(inItem);
            });
        });

        const total = allExpensePrices.reduce(function (oldValue, currentValue) {

            return oldValue + currentValue;
        });

        return total;
    };

    function accountBalance() {

        return totalIncome() - totalExpense();
    };

    function accountInfo() {

        let stringConcatIncome = obj.income.reduce((a, b) => {

            return { ...a, ...b };  // objeleri tek bir obje içinde birleştirdik
        });

        stringConcatIncome = Object.entries(stringConcatIncome).reduce((a, b, index) => {

            if (index == 1) {   // burası string olarak objeyi(incomeları) yan yana yazdırma işlemi

                return `${a[0]}: ${a[1]} , ${b[0]}: ${b[1]} `;  // ilk yaptığının sonucunu a değişkenine attı

            } else {

                return a + `, ${b[0]}: ${b[1]}`;
            }
        });

        let stringConcatExpense = obj.expense.reduce((a, b) => {

            return { ...a, ...b };  // tek bir objenin içine aldık
        });

        stringConcatExpense = Object.entries(stringConcatExpense).reduce((a, b, index) => {

            if (index == 1) {

                return `${a[0]}: ${a[1]} , ${b[0]}: ${b[1]} `;

            } else {

                return a + `, ${b[0]}: ${b[1]}`;
            }
        });

        return `
        Adı: ${obj.name}
        Soyadı: ${obj.surname}
        Gelirleri: ${stringConcatIncome}
        Giderleri: ${stringConcatExpense}
        Toplam Gelir: ${totalIncome()}
        Toplam Gider: ${totalExpense()}
        Hesap Bakiyesi: ${accountBalance()}
        `;
    };
};

const accountPerson = personAccount()
    .addIncome({
        balMass: 20000,
    })
    .addIncome({
        timurMass: 20000,
    })
    .addExpense({
        yakit: 8000,
        araba: 4000
    })

console.log(accountPerson.totalIncome());   // 75000
console.log(accountPerson.totalExpense());   // 40000
console.log(accountPerson.accountBalance());  // 35000
console.log(accountPerson.accountInfo());

// Adı: Nurcan
// Soyadı: Cürebal
// Gelirleri: nurcanMaas: 15000 , erdincMaas: 20000 , balMass: 20000, timurMass: 20000
// Giderleri: elektrik: 5000 , su: 4000 , dogalgaz: 8000, kira: 9000, okul: 2000, yakit: 8000, araba: 4000
// Toplam Gelir: 75000
// Toplam Gider: 40000
// Hesap Bakiyesi: 35000