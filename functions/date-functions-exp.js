function showDateTime() {

    const date = new Date();

    let dayNumber = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    mounth = mounth + 1; //! aylar 0 dan başladığı için ocak= 0' ıncı aydır.

    let dayZero = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
    let mounthZero = mounth < 10 ? `0${mounth}` : mounth;
    let hoursZero = hours < 10 ? `0${hours}` : hours;
    let minutesZero = minutes < 10 ? `0${minutes}` : minutes;

    console.log(`${dayZero}/${mounthZero}/${year} ${hoursZero}:${minutesZero}`);
};

showDateTime();