/*
\n = yeni satıra geçecek
\t = tab yani 8 karakterlik boşluk bırakır
\\ = \ işaretini göstermek için 2 tane back slash koyarız ekran çıktısı tek back slash olur
\' = console.log('Nurcan\'ın kocası') ekran çıktısı Nurcan'ın kocası şeklinde olur
\" = aynı şekilde tırnak içinde yazdığın cümlede " geçiyorsa bunu \" şeklinde yazarsın
\b = Backspace(geri tuşu)
\f = Form feed(form besleme)
\r = Carriage return(satır başı)
\uNNNN = hex kodu ile bir unicode NNNN, örneğin \u00A9 – © kopyalama hakkı için kullanılan işaret. Kesinlikle 4 basamaklı
hex değeri olmalıdır.
\u{NNNNNNNN} = Bazı karakterler nadirde olsa iki unicode sembolü ile ifade edilirler. 4 bytten oluşan uzun bir yazımı
vardır. Karakterlerin süslü parantez içine alınması gerekmektedir. */

/* Tüm özel karakterler her zaman \ karakteri ile başlarlar. Karakterler normal akışında giderken başka bir iş yapması için
var olan işlemi kesmesinden dolayı “kesme karakteri” denebilir… */


// Unicode örnekleri:

console.log("\u00A9"); // ©
console.log("\u{20331}"); // 佫, Uzun bir çince hiyerograf (uzun unicode)
console.log("\u{1F60D}"); // 😍, gülen yüz sembolü (uzun unicode)


let yasim = 26;

let adim = "Nurcan Cürebal";

let bilgilerim = "Adım: " + adim + "  \nYaşım: " + yasim;

console.log(bilgilerim);

// Adım: Nurcan Cürebal
// Yaşım: 26


console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?');

console.log('Days\tTopics\tExercises');

console.log('Day 1\t3\t5');

console.log('Day 2\t3\t5');

console.log('Day 3\t3\t5');

console.log('Day 4\t3\t5');

console.log('This is a backslash  symbol (\\)');

console.log('In every programming language it starts with \"Hello, World!\"');

console.log("In every programming language it starts with \'Hello, World!\'");

console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020');


// I hope everyone is enjoying the 30 Days Of JavaScript challenge.
// Do you ?
// Days   Topics   Exercises
// Day 1 3 5
// Day 2 3 5
// Day 3 3 5
// Day 4 3 5
// This is a backslash  symbol (\)
// In every programming language it starts with "Hello, World!"
// In every programming language it starts with 'Hello, World!'
// The saying 'Seeing is Believing' isn't correct in 2020