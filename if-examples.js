let day= 'sunday'
day = day.toLowerCase()
if (day=='monday' || day=='tuesday' || day=='wednesday' || day== 'thursday' || day== 'friday'){
    console.log(`${day} is a working day.`)
}
else if(day=='Saturday' || day=='sunday'){
    console.log(`${day} is a weekend.`)
}