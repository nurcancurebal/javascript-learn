/* -> async/await ile "rethrow"u yeniden yazın
Aşağıda Promise Zinciri bölümünden “rethrow” örneğini bulabilirsiniz . async/awaityerine kullanarak yeniden yazın .then/catch.

Ve bir döngü lehine özyinelemeden kurtulun demoGithubUser: bununla async/awaityapmak kolaylaşır. */

class HttpError1 extends Error1 {

    constructor(response) {

        super(`${response.status} for ${response.url}`);

        this.name = 'HttpError1';
        this.response = response;
    }
}

function loadJson1(url) {

    return fetch(url)
        .then(response => {

            if (response.status == 200) {

                return response.json();

            } else {

                throw new HttpError1(response);
            }
        })
}

// github geçerli bir kullanıcı döndürene kadar bir kullanıcı adı isteyin
function demoGithubUser1() {

    let name = prompt("Enter a name?", "iliakan");

    return loadJson1(`https://api.github.com/users/${name}`)
        .then(user => {

            console.log(`Full name: ${user.name}.`);

            return user;
        })
        .catch(err => {

            if (err instanceof HttpError1 && err.response.status == 404) {

                console.log("No such user, please reenter.");

                return demoGithubUser1();

            } else {

                throw err;
            }
        });
}

demoGithubUser1();

/* çözüm
Burada hile yok. Sadece içeride .catchile değiştirin ve gerektiğinde ekleyin :try...catchdemoGithubUserasync/await */

class HttpError extends Error {

    constructor(response) {

        super(`${response.status} for ${response.url}`);

        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {

    let response = await fetch(url);

    if (response.status == 200) {

        return response.json();

    } else {

        throw new HttpError(response);
    }
}

// github geçerli bir kullanıcı döndürene kadar bir kullanıcı adı isteyin
async function demoGithubUser() {

    let user;

    while (true) {

        let name = prompt("Enter a name?", "iliakan");

        try {

            user = await loadJson(`https://api.github.com/users/${name}`);

            break; // hata yok, döngüden çıkış

        } catch (err) {

            if (err instanceof HttpError && err.response.status == 404) {

                // console.log'dan sonra döngü devam eder
                console.log("No such user, please reenter.");

            } else {

                // bilinmeyen hata, yeniden(rethrow)
                throw err;
            }
        }
    }

    console.log(`Full name: ${user.name}.`);

    return user;
}

demoGithubUser();