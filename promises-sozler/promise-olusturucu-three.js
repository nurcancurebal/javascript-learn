// Promise yapıcısını kullanarak bir söz oluşturabiliriz. Yeni anahtar sözcüğünü, ardından Söz verme sözcüğünü ve ardından
// bir parantez kullanarak yeni bir söz oluşturabiliriz. Parantez içinde bir geri arama işlevi(callback) alır. Sözlü geri
// çağırma işlevi, çözme ve reddetme işlevleri olmak üzere iki parametreye sahiptir.

const promise = new Promise((resolve, reject) => {

    resolve('success');
    reject('failure');
});


// Promise
const doPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        if (skills.length > 0) {

            resolve(skills);

        } else {

            reject('Something wrong has happened');
        }

    }, 2000);
});

doPromise
    .then(result => {

        console.log(result);
    })
    .catch(error => console.log(error));

// [ 'HTML', 'CSS', 'JS' ]


// Yukarıdaki söz kararlılıkla yerine getirildi. Sözün ret ile karara bağlanmasından bir örnek daha verelim.


// Promise
const doPromiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        if (skills.includes('Node')) {

            resolve('fullstack developer');

        } else {

            reject('Something wrong has happened');
        }

    }, 2000);
});

doPromiseTwo
    .then(result => {

        console.log(result);
    })
    .catch(error => console.error(error));

// Something wrong has happened