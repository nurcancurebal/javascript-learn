let day= 'sunday'
day = day.toLowerCase()
if (day=='monday' || day=='tuesday' || day=='wednesday' || day== 'thursday' || day== 'friday'){
    console.log(`${day} is a working day.`)
}
else if(day=='Saturday' || day=='sunday'){
    console.log(`${day} is a weekend.`)
}
else {
    console.log('gün bulunamadı')
}


let days='Monday'
days= days.toLowerCase()
switch(days){
    case "days=='monday' || days=='tuesday' || days=='wednesday' || days== 'thursday' || days== 'friday'":
        console.log(`${days} is a working day.`)
        break
    case "days=='Saturday' || days=='sunday'":
        console.log(`${days} is a weekend.`)
        break
    default:
        console.log('gün bulunamadı')  //! neden gün bulunamıyor?
}