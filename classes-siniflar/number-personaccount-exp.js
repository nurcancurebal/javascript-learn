class PersonAccount {
    constructor(firstname, lastname) {

        this.firstname = firstname;
        this.lastname = lastname;
        this.incomes = [];
        this.expense = [];
    };

    set setIncomes(incom) {

        this.incomes.push(incom);
    };

    set setExpense(expen) {

        this.expense.push(expen);
    };
};

class TotalPersonAccount extends PersonAccount {
    constructor(firstname, lastname) {

        super(firstname, lastname);
    };

    totalIncome() {

        const total = this.incomes.reduce((store, prev) => {

            return store + prev;
        });

        return total;
    };

    totalExpense() {

        const total = this.expense.reduce((store, prev) => {

            return store + prev;
        });

        return total;
    };

    accountBalance() {

        const result = this.totalIncome() - this.totalExpense();
        
        return result;
    };

    accountInfo() {

        return `Adı: ${this.firstname}\nSoyadı: ${this.lastname}\nGelirleri: ${this.incomes}\nGiderleri: ${this.expense}\nToplam Gelir: ${this.totalIncome()}\nToplam Gider: ${this.totalExpense()}\nHesap Bakiyesi: ${this.accountBalance()}`
    };
};

const s1 = new TotalPersonAccount("Nurcan", "Cürebal");

s1.setIncomes = 10000;
s1.setIncomes = 20000;
s1.setIncomes = 5000;

s1.setExpense = 1000;
s1.setExpense = 2500;
s1.setExpense = 10000;
s1.setExpense = 7200;


console.log(s1);
console.log(s1.incomes);
console.log(s1.expense);
console.log(s1.totalIncome());
console.log(s1.totalExpense());
console.log(s1.accountBalance());
console.log(s1.accountInfo());