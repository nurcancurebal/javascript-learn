/* -> Tarih bileşenini ayarlama
Aşağıdaki metodlar tarih bileşenlerini ayarlamaya yarar:

setFullYear(year [, month, date])
setMonth(month [, date])
setDate(date)
setHours(hour [, min, sec, ms])
setMinutes(min [, sec, ms])
setSeconds(sec [, ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
setTime() haricinde hepsinin UTC tipi de vardır, örneğin: setUTCHours()

Gördüğünüz gibi,setHours gibi bazı metodlar birden fazla bileşeni aynı anda ayarlamaya yarar. Bahsi geçmeyen bileşenlerde bir değişiklik yapılmaz. */


let today = new Date();

today.setHours(0);
console.log(today); // 2022-09-01T21:29:22.555Z, bugün ve saat 0

today.setHours(0, 0, 0, 0);
console.log(today); // 2022-09-01T21:00:00.000Z, bugün ve saniye 00:00:00.