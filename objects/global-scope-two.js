// global olarak tanımlanmış değişken aynı dosyada her yerden erişelebilir. global dediğimiz bütün dosya içindede global
// olabilir yada bir kod bloğu üzerindede globalolarak tanımlanmış olabilir

let a = 'JavaScript'; // bu dosyanın her hangi bir yerinden ulaşılabilir.
let b = 10;

function letsLearnScope() {

    console.log(a, b); // JavaScript 10

    if (true) {         //! burada bir blok var. blok= süslü parantezlerin içerisinde kalan kısım

        let a = 'Python';
        let b = 100;

        console.log(a, b); //! Python 100 (yalnızca bloğun içinde erişebiliyoruz)
    }

    console.log(a, b);   // JavaScript 10
};

letsLearnScope();

console.log(a, b); // JavaScript 10