/* -> async/await kullanarak yeniden yaz
Promise Zinciri bölümündeki örneklerden birini async/awaityerine kullanarak yeniden yazınız .then/catch: */

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(console.log); // Error: 404

/* çözüm
Notlar kodun altındadır: */

async function loadJson(url) { // (1)

    let response = await fetch(url); // (2)

    if (response.status == 200) {

        let json = await response.json(); // (3)
        return json;
    }

    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(console.log); // Error: 404 (4)

/* Notlar:

1. Fonksiyon loadJson olur async.

2. Tüm .theniç ile değiştirilir await.

3. return response.json()Bunu beklemek yerine şöyle yapabiliriz : */

if (response.status == 200) {

    return response.json(); // (3)
}

/* await O zaman bu sözün çözülmesi için dış kodun olması gerekirdi . Bizim durumumuzda önemli değil.

4. Atılan hata loadJsontarafından işlenir .catch. Orada kullanamayız çünkü bir fonksiyonda await loadJson(…)değiliz .async */