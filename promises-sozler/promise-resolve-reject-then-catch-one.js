new Promise((resolve, reject) => {

    // işlem bitmiş ve başarılı ise
    resolve({

        name: "Nurcan",
        surname: "Cürebal"
    });

    // işlem hatalı ise
    reject("Hata");
})
    .then(data => {     // resolve oluyorsa then çalışır. Buradaki data yukarıdaki resolve() un içine yazdığımızdan geliyor

        console.log(data);
    })
    .catch(data => {    // reject oluyorsa catch çalışır. Buradaki data yukarıdaki reject() in içine yazdığımızdan geliyor

        console.log(data);
    });

// { name: 'Nurcan', surname: 'Cürebal' }


