const catNames = new Promise((resolve, reject) => {

    setTimeout(() => {

        const cat = ["Bengal Kedisi", "British Shorthair"];

        if (cat.length > 0) {

            resolve(cat);

        } else {

            reject('Something wrong has happened');
        }

    }, 2000);
})
    .then(result => {

        return result + " ,Siyam Kedisi";
    })
    .then(result => {

        return result + " ,Devon Rex Cat";
    })
    .then(result => {

        return result + " ,Mavi Rus Kedisi";
    })
    .then(result => {

        return result + " ,Scottish Fold";
    })
    .then(result => {

        console.log(result + " ,Exotic Shorthair");
    })
    .catch(error => {

        console.log(error);
    });

console.log(catNames);