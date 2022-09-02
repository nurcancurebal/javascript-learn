function checkSeason(month) {

    if (month == 'aralık' || month == 'ocak' || month == 'şubat') {

        console.log('Kış mevsimindesiniz');

    } else if (month == 'mart' || month == 'nisan' || month == 'mayıs') {

        console.log('İlkbahar mevsimindesiniz');

    } else if (month == 'haziran' || month == 'temmuz' || month == 'ağustos') {

        console.log('Yaz mevsimindesiniz');

    } else {

        console.log('Sonbahar mevsimindesiniz');
    };
};

checkSeason('eylül');