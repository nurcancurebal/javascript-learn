let i = 0;

while (i <= 5) {

    console.log(i);
    i++;
};
// koşul doğru olduğu sürece süslü parantezin içindeki işlemi yapar


let a = 0;

do {

    console.log(a);
    a++;

} while (i <= 5);

// koşul true olmasa bile do' nun altındaki kodu bir kere çalıştırır



let names = ['nurcan', 'erdinç', 'bal', 'çisem', 'turhan'];
let b = 0;

while (b < names.length) {

    console.log('isim:', names[b]);
    b++;
};


let c = 5;

do {
    console.log('isim:', names[c]);
    c++;

} while (c < names.length);  // isim: undefined koşul doğru olmasada 1 kez çalıştı