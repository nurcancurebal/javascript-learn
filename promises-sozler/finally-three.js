let loading = false;

new Promise((resolve, reject) => {

    loading = true;

    resolve({

        name: "Nurcan",
        surname: "Cürebal"
    });

    reject("Çözülmedi");
})
    .then(data => {

        data.web = "http://curebal.com";
        return data;
    })
    .then(data => {

        console.log(data)
    })
    .catch(data => {

        console.log(data);
    })
    .finally(() => {   // resolve ya da reject in çalışmasına bakmadan işlemin sonunda bu kod bloğu çalışır

        loading = false;    // kodlar çalışmaya başlamadan önce false olan loading değişkeni işlem başlayınca trueya döndürmüştük
        // burada da sonuç ne olursa olsun kod bloğu çalışmayı bitirdiğinde loading değişkeni tekrar false olacak

        console.log("sonunda bitti");
    });