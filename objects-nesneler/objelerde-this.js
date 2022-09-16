let obj = {

    names: 'Nurcan',

    surname: this.names // surname: undefined çünkü: henüz tanımlanmadı eğer function olsaydı okurdu
}

console.log(obj);


let obj2 = {

    names: 'Nurcan',

    surname: function () {

        return this.names
    }
}

console.log(obj2.surname()); // Nurcan


let obj3 = {

    names: 'Nurcan',

    surname: () => {

        this.names
    }
}

console.log(obj3.surname()); // undefined // TODO çalış