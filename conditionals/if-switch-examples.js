let day = 'sunday';
day = day.toLowerCase();

if (day == 'monday' || day == 'tuesday' || day == 'wednesday' || day == 'thursday' || day == 'friday') {

    console.log(`${day} is a working day.`);

} else if (day == 'Saturday' || day == 'sunday') {

    console.log(`${day} is a weekend.`);

} else {

    console.log('gün bulunamadı');
};



let days = 'monday';

days = days.toLowerCase();

switch (days) {

    case 'monday':
        console.log(`${days} is a working day.`);
        break;

    case 'tuesday':
        console.log(`${days} is a working day.`);
        break;

    case 'wednesday':
        console.log(`${days} is a working day.`);
        break;

    case 'thursday':
        console.log(`${days} is a working day.`);
        break;

    case 'friday':
        console.log(`${days} is a working day.`);
        break;

    case 'saturday':
        console.log(`${days} is a weekend.`);
        break;

    case 'sunday':
        console.log(`${days} is a weekend.`);
        break;

    default:

        console.log('gün bulunamadı');
};