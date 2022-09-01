// parametreye gondermeden function tanımlamak
// function geriye bir şeyler döndürür dolayısıyla parametre alır

let msg = 'merhaba dünya'; // NOT: Functionun içerisindeki ddeeğişken ile dışarıdaki değişken isimleri aynı 
// olabilir ancak functionun süslü parantezlerinin içi kendi başına bir blok olduğu için blok kapsamında bu yüzden 
// functiondaki değişkene dışarıdan ulaşılamaz

let name = 'nurcan'

function sayHello() {

    let msg = 'Hello World';

    console.log(msg, name);  // dışarıdaki bir değişkene functionun içinde müdahale edilebilir ancak functionun içindeki bir değişkene dışarıdan müdehala edilemez
};

sayHello(); // functiondaki msg değişkenini çağırdık


// geriye her hangi bir şey döndürmediğimiz zaman functionlar " undefined " döndürür