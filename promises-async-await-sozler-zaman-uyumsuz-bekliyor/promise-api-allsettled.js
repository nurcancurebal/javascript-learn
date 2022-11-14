// -> Promise.allSettled


/* -> Yeni eklendi
Bu dile yeni eklenen bir özelliktir. Eski tarayıcılar pollyfill gerektirebilir */

/* Herhangi bir söz reddederse Promise.all bir bütün olarak eder. Devam etmek için all sonuçlarına ihtiyacımız olduğunda bu iyidir: */

Promise.all([
    fetch('/template.html'),
    fetch('/style.css'),
    fetch('/data.json')
]).then(render); // render yöntemi hepsine ihtiyaç duyuyor

/* Promise.allSettled tüm sözlerin yerine getirilmesini bekler: biri reddetse bile diğerini bekler. Sonuçta ortaya çıkan dizin:

. {status:"fulfilled", value:result} başarılı cevap için,
. {status:"rejected", reason:error} hatalar için.

Örneğin, birden fazla kullanıcı hakkında bilgi edinmek istiyoruz. Bir istek başarısız olsa bile diğerleriyle de ilgileniyoruz

Hadi Promise.allSettled kullanalım: */

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))

    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {

                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });

// Yukarıdaki satırdaki results (*) olacak:

[
    { status: 'fulfilled', value/* : ...response... */ },
    { status: 'fulfilled', value/* : ...response... */ },
    { status: 'rejected', reason/* : ...error object... */ }
]

// Dolayısıyla, her söz için onun satütüsünü ve değer/sebep bilgisini alırız.