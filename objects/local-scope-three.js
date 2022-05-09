// belli bir kapsam çerçevesinde erişebildiğimiz değişkenler, kapsamın dışında değişkene erişemeyiz kapsam= süslü parantezin içi

function letsLearnScope() {

    if (true) {

        let name = 'Nurcan';
        let surname = 'Cürebal';

        console.log(name, surname); // bunu yazar
    };
    console.log(name, surname); // ReferenceError: name is not defined
};
letsLearnScope();

console.log(name, surname); // ReferenceError: name is not defined