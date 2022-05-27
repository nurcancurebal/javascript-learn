// Reduce: Azalt demektir. Bir callback  functionu alır. Callback fonksiyonu parmetre olarak toplayıcı (accumulator),
// mevcut olanı (current) ve opsiyon olarakda varsayılan değeri alır. Geriye tek bir değer döndürür. Accumulator' e bir
// başlangıç değeri vermek iyi bir uygulamadır. Eğer varsayılan olarak bir başlangıç değeri vermezsek o zaman dizinin ilk
//  elemanını alır. Eğer dizimizde boş bir arrayse o zaman javascript hata verir.(Dizinin dönüş değeri accumulator' de saklanır.)

const numbers = [1, 2, 3, 4, 5, 6, 7];

console.log(numbers.reduce(function (oldValue, CurrentValue) {

    return oldValue + CurrentValue; // burada 0' ı oldValue(accumulator)' ya verdik

}, 0));