// Bir personAccount çıkışı işlevi(fonksiyonu) oluşturun. Ad, soyad, gelirler, giderler iç değişkenlerine sahiptir.
// totalIncome, totalExpense, accountInfo,addIncome, addExpense ve accountBalance iç fonksiyonlarına sahiptir. Gelirler bir
// dizi gelirdir ve tanımı ve giderleri de bir dizi gider ve tanımıdır.


function personAccount() {

    const obj = {};

    const callbackClouse = { totalExpense, totalIncome, totalExpense, accountBalance, addExpense, addIncome, accountInfo };

    return person()

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

        return callbackClouse;
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

            Object.values(item).forEach(inItem => {

                allExpensePrices.push(inItem);
            });
        });

        const total = allExpensePrices.reduce(function (oldValue, currentValue) {

            return oldValue + currentValue;
        });

        return total;
    };

    function accountInfo() {

        let stringConcatIncome = obj.income;

        stringConcatIncome = stringConcatIncome.reduce((a, b) => {

            return { ...a, ...b };
        });

        stringConcatIncome = Object.entries(stringConcatIncome).reduce((a, b, index) => {

            if (index == 1) {

                return `${a[0]}: ${a[1]} , ${b[0]}: ${b[1]} `;

            } else {

                return a + `, ${b[0]}: ${b[1]}`;
            }
        });

        let stringConcatExpense = obj.expense;

        stringConcatExpense = stringConcatExpense.reduce((a, b) => {

            return { ...a, ...b };
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

    function accountBalance() {

        return totalIncome() - totalExpense();
    };
};

const accountPerson = personAccount()
    .addExpense({
        yakit: 8000,
        araba: 4000
    })
    .addIncome({
        balMass: 20000,
    })
    .addIncome({
        sandalyeMass: 20000,
    })

const totalExpese = accountPerson.totalExpense();

const accontBal = accountPerson.accountBalance();

const accountInfocuk = accountPerson.accountInfo();

console.log(accountInfocuk);