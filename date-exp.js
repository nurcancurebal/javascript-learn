const date = new Date()
let year= date.getFullYear(), //! değişken atarken hepsinin başına let yazmamamızın sebebi?
 mounth= date.getMonth(),
 dayNumber= date.getDate(),
 hour= date.getHours(),
 minute= date.getMinutes(),
 second= date.getSeconds(),
 day= date.getDay()

 let months = [
    'ocak',
    'şubat',
    'mart',
    'nisan',
    'mayıs',
    'haziran',
    'temmuz',
    'ağustos',
    'eylül',
    'ekim',
    'kasım',
    'aralık']


    let days = [
        'pazar',
        'pazartesi',
        'salı',
        'çarşamba',
        'perşembe',
        'cuma',
        'cumartesi']

let dateTime= ` ${dayNumber} ${months[mounth]} ${year} ${hour}:${minute}:${second} `
console.log(dateTime)