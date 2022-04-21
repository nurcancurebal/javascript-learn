function showDateTime() {

    const date = new Date();

    let day = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    mounth<10 ? 

    console.log(day + '/' + mounth + '/' + year + ' ' + hours + ':' + minutes);

};

showDateTime();

// 08/01/2020 04:08