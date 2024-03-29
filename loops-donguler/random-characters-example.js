// Altı karakterlik rastgele bir kimlik oluşturan küçük bir komut dosyası geliştirin:


//  rakamlar ve alfabe bir dizine manuel olarak yazılır.
const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//  Bu değişken for döngüsüyle oluşan çıktı parametresidir.
const key = [];

//  For döngüsü index parametresi oluşturulacak key uzunluğudur, index parametresi kadar for döngüsü döner ve key dizininin sonuna elamanı ekler.
for (let index = 0; index < 6; index++) {

    // Yukardaki data dizini kaç elemandan oluştuğu bulunur ve rastgele bir sayı üretilir max sayı büyüklüğü data elemanına eşittir.
    const randomChar = data[Math.floor((Math.random() * data.length) + 1)];

    // Yukarda bulunan rastgele karakter for döngüsü her döndüğünde sondan bir karaker ekler = elaman.
    key.push(randomChar);
};

// key değişkeninin içindeki array değeri join ile birleştirip string olarak yazdırdık.
console.log(key.join(""));