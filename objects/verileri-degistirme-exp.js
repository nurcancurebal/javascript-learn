const personAccount = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    incomes: ['Erdinç maaşı', 'Nurcan maaşı'],
    expenses: ['mutfak masrafları', 'elektrik faturası', 'su faturası', 'doğalgaz faturası', 'internet faturası', 'kira', 'telefon faturası'],
    totalIncome: 20000,
    totalExpense: 17000,
    accountInfo: {
        bankaAdi: 'GARANTİ BANKASI',
        subeKodu: 448,
        subeAdi: 'MASLAK',
        hesapNo: 6277342,
        iban: `TR78-0006-2000-4480-0006-2773-42`
    },
    addIncome: ['Nurcan\'ın babasından harçlık', 'Erdinç\'in babasından harçlık'],
    addExpense: 'Bal\'ın masrafları',
    accountBalance: 0
};


personAccount.accountBalance = personAccount.totalIncome - personAccount.totalExpense;

personAccount.incomes.push(...personAccount.addIncome);

personAccount.expenses.push(personAccount.addExpense);

console.log(personAccount);