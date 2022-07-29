new Promise((resolve, reject) => {

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
    });

// { name: 'Nurcan', surname: 'Cürebal', web: 'http://curebal.com' }