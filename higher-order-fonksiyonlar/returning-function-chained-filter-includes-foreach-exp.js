// filtre kullanarak bir search atacak aradığın şeyde 4 taraftada arayacak uygun olan gelecek

const countries = [
    { nameEng: "Germany", nameTr: "Almanya", capital: "Berlin", stars: 17 },
    { nameEng: "Denmark", nameTr: "Danimarka", capital: "Kopenhag", stars: 17 },
    { nameEng: "Swiss", nameTr: "isviçre", capital: "Bern", stars: 17 },
    { nameEng: "Finland", nameTr: "Finlandiya", capital: "Helsinki", stars: 16 },
    { nameEng: "Norway", nameTr: "Norveç", capital: "Oslo", stars: 16 },
    { nameEng: "Australia", nameTr: "Avustralya", capital: "Kanberra", stars: 15 },
    { nameEng: "Sweden", nameTr: "İsveç", capital: "Stokholm", stars: 14 },
    { nameEng: "Holland", nameTr: "Hollanda", capital: "Amsterdam", stars: 14 },
    { nameEng: "Austria", nameTr: "Avusturya", capital: "Viyana", stars: 14 }
];

searchArray(17, countries).forEach(item => {    // chained : zincirleme

    const { nameEng, nameTr, capital, stars } = item;

    console.log(`Ülkenin ismi İngilizce/Türkçe : ${nameEng}/${nameTr} Başkenti : ${capital} Star : ${stars} `);
});


function searchArray(value, array) {    // returning function

    const result = array.filter(function (item) {

        return item.nameEng.includes(value) || item.nameTr.includes(value) || item.capital.includes(value) || item.stars == value;
    });

    return result;
};