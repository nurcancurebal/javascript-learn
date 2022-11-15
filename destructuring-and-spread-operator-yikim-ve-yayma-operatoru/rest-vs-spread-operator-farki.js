/* JavaScript, ...hem dinlenme(rest) hem de yayılma(spread) operatörleri için üç nokta ( ) kullanır. Ancak bu iki operatör aynı değildir.

Rest ve spread arasındaki temel fark, rest operatörünün, kullanıcı tarafından sağlanan bazı belirli değerlerin geri kalanını bir JavaScript dizisine koymasıdır. Ancak yayılma sözdizimi, yinelenebilirleri tek tek öğelere genişletir.

Örneğin, bazı değerleri bir diziye dahil etmek için rest kullanan bu kodu düşünün: */

// Rest(Dinlenme)

function myBio(firstName, lastName, ...otherInfo) {

    return otherInfo;
}

console.log(myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"));
// [ 'CodeSweetly', 'Web Developer', 'Male' ]


// Spread (Yayılma) operatörü

function myBioTwo(firstName, lastName, company) {

    return `${firstName}, ${lastName}, ${company}`;
}

// Bir dizinin öğelerini tek tek bağımsız değişkenlere genişletmek için yayılmayı kullanın:
console.log(myBioTwo(...["Oluwatobi", "Sofela", "CodeSweetly"]));
// Oluwatobi, Sofela, CodeSweetly