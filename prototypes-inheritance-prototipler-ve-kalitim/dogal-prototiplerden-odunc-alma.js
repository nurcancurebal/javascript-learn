/* -> Prototiplerden ödünç alma
Dekoratörler ve iletilme, call/apply bölümünde metod ödünç almadan bahsetmiştik. */

function showArgs() {

    // Array'den join i ödünç al ve argüman kaynağında çağır.
    console.log([].join.call(arguments, " - ")); // John - Pete - Alice
}

showArgs("John", "Pete", "Alice");

// join Array.prototype içerisinde bulunduğundan dolayı, oradan doğrudan çağırabilir ve şu şekilde tekrar yazabiliriz:

function showArgs2() {

    console.log(Array.prototype.join.call(arguments, " - ")); // John - Pete - Alice
}

showArgs2("John", "Pete", "Alice");

// Bu daha etkin çünkü ayrıca bir dizi [] objesi yaratmaktan kaçınılmıştır. Fakat biraz uzun sürmüştür.