// Global olarak bildirilen bir değişkene, aynı dosyanın her yerinden erişilebilir. Ancak küresel terimi görecelidir. Dosya
// için global olabilir veya bazı kod bloklarına göre global olabilir.

let a = 'JavaScript'; // bu dosyanın her hangi bir yerinden ulaşılabilir.
let b = 10;

letsLearnScope();

function letsLearnScope() {

    console.log(a, b); // JavaScript 10, erişilebilir

    if (true) {         //! burada bir blok var. blok= süslü parantezlerin içerisinde kalan kısım

        let a = 'Python';
        let b = 100;

        console.log(a, b); //! Python 100 (yalnızca bloğun içinde erişebiliyoruz)
    }

    console.log(a, b);   // JavaScript 10
};

console.log(a, b); // JavaScript 10, erişilebilir