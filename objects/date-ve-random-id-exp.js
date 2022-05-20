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


function date() {

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

    } else if (hourZero >= 12 && hourZero <= 23) {

        time = `${dayNumberZero}/${mounthZero}/${year} ${hourZero}:${minuteZero} PM`;
    };
    return time;
};

console.log(date());


