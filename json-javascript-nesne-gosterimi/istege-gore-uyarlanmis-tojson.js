/* İsteğe göre uyarlanmış “toJSON”
Karakterlerin çeviriminde toString metodunun kullanılabileceğini daha önce söylemiştil. Objeler için toJSON metodu varsa JSON.stringify çağırıldığında bu otomatik olarak çağrılır. */

let oda1 = {
    sayi: 23
};

let toplanti2 = {
    baslik: "Konferans",
    tarih: new Date(Date.UTC(2017, 0, 1)),
    oda1
};

console.log(JSON.stringify(toplanti2));
// {"baslik":"Konferans","tarih":"2017-01-01T00:00:00.000Z","oda1":{"sayi":23}}

/* Gördüğünüz gibi date (1) karaktere dönüştü. Bunun nedeni date objesinin toJSON metoduna sahip olmasıdır.

Eğer toJSON metodunu oda objesine uygularsanız: */

let oda = {
    sayi: 23,
    toJSON() {
        return this.sayi;
    }
};

let toplanti = {
    baslik: "Konferans",
    oda
};

console.log(JSON.stringify(oda)); // 23

console.log(JSON.stringify(toplanti)); // {"baslik":"Konferans","oda":23}

// Gördüğünüz gibi toJSON hem doğrudan çağrı için hem de iç içe objeler için kullanılabilir.