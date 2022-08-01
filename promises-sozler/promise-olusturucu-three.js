// Promise yapıcısını kullanarak bir söz oluşturabiliriz. Yeni anahtar sözcüğünü, ardından Söz verme sözcüğünü ve ardından
// bir parantez kullanarak yeni bir söz oluşturabiliriz. Parantez içinde bir geri arama işlevi(callback) alır. Sözlü geri
// çağırma işlevi, çözme ve reddetme işlevleri olmak üzere iki parametreye sahiptir.


const promiseOne = new Promise((resolve, reject) => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        if (skills.length > 0) {

            resolve(skills);    // true ise

        } else {

            reject('Something wrong has happened'); // false ise
        }

    }, 2000);
});

promiseOne
    .then(result => {   // doğru ise bu kod çalışmaya devam eder; result resolve dan gelir

        console.log(result + " Bu kod resolve' un devamıdır.");
    })
    .catch(error => console.log(error + " Bu kod reject' un devamıdır."));

// HTML,CSS,JS Bu kod resolve' un devamıdır.


// Yukarıdaki söz kararlılıkla yerine getirildi. Sözün ret ile karara bağlanmasından bir örnek verelim.

const promiseTwo = new Promise((resolve, reject) => {

    setTimeout(() => {

        const skills = ['HTML', 'CSS', 'JS'];

        if (skills.includes('Node')) {

            resolve('fullstack developer');

        } else {

            reject('Something wrong has happened');
        }

    }, 2000);
});

promiseTwo
    .then(result => {

        console.log(result + " Bu kod resolve' un devamıdır.");
    })
    .catch(error => console.error(error + " Bu kod reject' un devamıdır."));

// Something wrong has happened Bu kod reject' un devamıdır.