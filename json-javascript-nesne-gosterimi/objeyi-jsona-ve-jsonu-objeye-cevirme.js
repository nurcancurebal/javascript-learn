// kullanici objesini JSON’a çevirin. Sonra başka bir değişkene JSON’u okuyup atama yapın.

let kullanici1 = {
    adi: "Nurcan Cürebal",
    yas: 27
};

// çözüm

let kullanici2 = {
    adi: "Nurcan Cürebal",
    yas: 27
};

let kullanici3 = JSON.parse(JSON.stringify(kullanici2));

console.log(kullanici3); // { adi: 'Nurcan Cürebal', yas: 27 }