// break= işlemi durdurma anlamına gelir


for (let i = 0; i < 6; i++) {

    if (i == 3) { break };

    console.log(i);
};  // 0 1 2 




const names = ['nurcan', 'erdinç', 'bal', 'selin', 'seçil'];

for (let name of names) {

    if (name == 'bal') {

        console.log(`${name} bulundu`);
        break;
    };

    console.log('isim', name);
};