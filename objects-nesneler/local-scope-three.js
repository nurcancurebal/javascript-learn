// belli bir kapsam çerçevesinde erişebildiğimiz değişkenler, kapsamın dışında değişkene erişemeyiz kapsam= süslü parantezin içi

// Yerel olarak bildirilen bir değişkene yalnızca belirli blok kodunda erişilebilir.
// 1. Block Scope(if, for...) 2. Function Scope

// Function Scope

function letsLearnScope() {

    if (true) {

        let name = 'Nurcan';
        let surname = 'Cürebal';

        console.log(name, surname); // bunu yazar
    }

    console.log(name, surname); // ReferenceError: name is not defined
};

letsLearnScope();

console.log(name, surname); // ReferenceError: name is not defined