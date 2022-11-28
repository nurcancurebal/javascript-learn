/* -> Eşzamansız üreteçler aracılığıyla yinelenebilir
Bildiğimiz gibi, bir nesneyi yinelenebilir hale getirmek için ona eklememiz Symbol.iterator gerekir. */

let range1 = {

    from: 1,
    to: 5,
    [Symbol.iterator]() { /* ...aralığı yinelenebilir yapmak için next ile nesneyi döndür...  */ }
}

/* için yaygın bir uygulama , önceki örnekte olduğu gibi Symbol.iterator düz bir nesne yerine bir jeneratör döndürmektir .next

Jeneratörler bölümünden bir örnek hatırlayalım : */

let range2 = {

    from: 1,
    to: 5,

    *[Symbol.iterator]() { // [Symbol.iterator] için bir kısayol: function*()

        for (let value = this.from; value <= this.to; value++) {

            yield value;
        }
    }
};

for (let value of range2) {

    console.log(value); // 1, 2, 3, 4, 5
}

/* Burada özel bir nesne range2 yinelenebilir ve oluşturucu *[Symbol.iterator] değerleri listelemek için mantığı uygular.

Jeneratöre async eylemleri eklemek istiyorsak, Symbol.iterator async ile değiştirmeliyiz Symbol.asyncIterator: */

let range3 = {

    from: 1,
    to: 5,

    async *[Symbol.asyncIterator]() { // [Symbol.asyncIterator] ile aynı: async function*()

        for (let value = this.from; value <= this.to; value++) {

            // değerler arasında bir duraklama yapın, bir şey bekleyin
            await new Promise(resolve => setTimeout(resolve, 1000));

            yield value;
        }
    }
};

(async () => {

    for await (let value of range3) {

        console.log(value); // 1, 2, 3, 4, 5
    }
})();

// Şimdi değerler aralarında 1 saniyelik bir gecikme ile geliyor.