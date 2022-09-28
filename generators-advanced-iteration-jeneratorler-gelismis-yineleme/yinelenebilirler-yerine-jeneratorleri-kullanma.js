/* -> Yinelenebilirler yerine jeneratörleri kullanma
Bir süre önce Sıralı erişim bölümünde, rangedeğerleri döndüren yinelenebilir bir nesne oluşturduk from..to.

Burada kodu hatırlayalım: */

let range = {

    from: 1,
    to: 5,

    // for..of bu yöntemi en başta bir kez çağırır
    [Symbol.iterator]() {
        // ...yineleyici nesnesini döndürür:
        // ileriye, for..of yalnızca o nesneyle çalışır, sonraki değerleri ister
        return {
            current: this.from,
            last: this.to,

            // next(), for..of döngüsü tarafından her yinelemede çağrılır
            next() {

                // değeri bir nesne olarak döndürmelidir {done:.., value :...}
                if (this.current <= this.last) {

                    return { done: false, value: this.current++ };

                } else {

                    return { done: true };
                }
            }
        };
    }
};

console.log([...range]); // [ 1, 2, 3, 4, 5 ]

// Yinelenebilir diziler yapmak için bir jeneratör kullanmak çok daha şık:

function* generateSequence(start, end) {

    for (let i = start; i <= end; i++) {

        yield i;
    }
}

let sequence = [...generateSequence(1, 5)];

console.log(sequence); // [ 1, 2, 3, 4, 5 ]

// range…Ama ya özel bir nesneyi saklamak istiyorsak ?