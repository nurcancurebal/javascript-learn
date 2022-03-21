const date = new Date()
let year= date.getFullYear, //! değişken atarken hepsinin başına let yazmamamızın sebebi?
 mounth= date.getMonth,
 dayNumber= date.getDate,
 hour= date.getHours,
 minute= date.getMinutes,
 second= date.getSeconds,
 day= date.getDay
let dateTime= `${year}` //! year değişkenini dateTime değişkenini atama işlemi bu şekilde mi yapılır?
console.log(dateTime)