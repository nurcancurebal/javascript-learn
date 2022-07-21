const RANDOM_ID_CHARSET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];


signUp("Nurcan", "nurcancurebal@hotmail.com", "123456");

console.log("Mevcut kullanıcılar:", users);


function signUp(username, email, password) {

    const user = {

        _id: randomIdGenerator(),
        username,
        email,
        password,
        createdAt: dateNowGenerator(),
        isLoggedIn: false
    };

    for (let index = 0; index < users.length; index++) {

        if (user._id == users[index]._id) {

            user._id = randomIdGenerator();
        }

        if (user.username == users[index].username) {

            console.log("Benzer kullanıcı adı bulunmakta!");
            return; // Üstünde funksiyon blogu bulursa ve return parametresi kullanılırsa fonksiyon durur ve boş return cıkar, fonsiyon devam etmez. Users'a ekleme yapmaz.
        }

        if (user.email == users[index].email) {

            console.log("Benzer e posta bulunmakta!");
            return;
        }
    };

    users.push(user);

    console.log("Kullanıcı ekleme işlemi başarılı.");

    // ! Alt fonksiyonlar - burası cagırılmadıgı sürece çalışmaz.

    function dateNowGenerator() {

        const date = new Date();

        let year = date.getFullYear();
        let mounth = date.getMonth();
        let dayNumber = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        mounth = mounth + 1;

        let mounthZero = mounth < 10 ? `0${mounth}` : mounth;
        let dayNumberZero = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
        let hourZero = hour < 10 ? `0${hour}` : hour;
        let minuteZero = minute < 10 ? `0${minute}` : minute;

        let time = '';

        if (hourZero >= 00 && hourZero < 12) {

            time = `${dayNumberZero}/${mounthZero}/${year} ${hourZero}:${minuteZero} AM`;

            console.log(id(data));

        } else if (hourZero >= 12 && hourZero <= 23) {

            time = `${dayNumberZero}/${mounthZero}/${year} ${hourZero}:${minuteZero} PM`;
        }

        return time;
    };

    function randomIdGenerator() {

        const randomId = [];

        for (let index = 0; index < 6; index++) {

            const randomChar = RANDOM_ID_CHARSET[Math.floor((Math.random() * RANDOM_ID_CHARSET.length) + 1)];

            if (!randomId.includes(randomChar)) {

                randomId.push(randomChar);
            }
        };

        let randomKey = randomId.join('');

        return randomKey;
    };
};


//  bir fonksiyon olacak ismi signIn fonksiyon 2 parametre alır 1 username 2 password bu
// bilgilerle yukarıda var olan user listesine göre böyle bir kullanıcı varsa şifresi doğruysa true dönecek

function signIn(username, password) {

    for (let index = 0; index < users.length; index++) {

        if (username == users[index].username && password == users[index].password) {

            return "Böyle bir kullanıcı mevcut: True";

        } else {

            return "Böyle bir kullanıcı mevcut değil: False";
        }
    };
};

console.log(signIn('Alex', "123123"));

console.log(signIn('sdfgyhu', "3456789"));