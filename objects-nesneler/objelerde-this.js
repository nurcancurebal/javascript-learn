let obj = {

    names: 'Nurcan',

    surname: this // TODO buradaki this neden boş bir obje oldu?
}

console.log(obj);


let obj2 = {

    names: 'Nurcan',

    surname: function () {

        return this
    }
}

console.log(obj2); // surname: f


let obj3 = {

    names: 'Nurcan',

    surname: () => this
}

console.log(obj3); // TODO üsttekiyle arasında ne fark var?