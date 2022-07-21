// for loops(for döngüsü)

for (let i = 0; i <= 5; i++) {

    console.log(i);
};
// for (başlangıç; koşul; arttırma/azaltma)


for (let i = 5; i >= 0; i--) {

    console.log(i);
};


for (i = 0; i <= 5; i++) {

    console.log(`${i} * ${i} = ${i * i}`);
};


let name = ['nurcan', 'erdinç', 'bal', 'cürebal', 'avustralya', 'kanada'];  // bu örneği incele istediğimiz kadar isim ekleyebiliyoruz

for (i = 0; i < name.length; i++) {

    console.log(name[i]);

};



const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i]  // kısa hali sum += numbers[i];
};

console.log(sum);