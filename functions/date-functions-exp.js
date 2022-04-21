function showDateTime() {

    const date = new Date();

    let day = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let dayZero = day < 10 ? `0${day}` : day;
    let mounthZero = mounth < 10 ? `0${mounth}` : mounth;
    let hoursZero = hours < 10 ? `0${hours}` : hours;
    let minutesZero = minutes < 10 ? `0${minutes}` : minutes;

    console.log(dayZero + '/' + mounthZero + '/' + year + ' ' + hoursZero + ':' + minutesZero);
    console.log(`${dayZero}/${mounthZero}/${year} ${hoursZero}:${minutesZero}`);
    console.log(dayZero,'/', mounthZero,'/',year,hoursZero,':',minutesZero);

};

showDateTime();

// 08/01/2020 04:08