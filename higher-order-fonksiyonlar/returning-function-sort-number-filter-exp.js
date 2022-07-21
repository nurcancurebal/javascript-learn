const countries = [
  { country: "English", count: 45 },
  { country: "French", count: 30 },
  { country: "Arabic", count: 25 },
  { country: "Spanish", count: 24 },
  { country: "Russian", count: 9 },
  { country: "Portuguese", count: 91 },
  { country: "Dutch", count: 80 },
  { country: "German", count: 73 },
  { country: "Chinese", count: 5 },
  { country: "Swahili", count: 4 },
];

console.log(mostSpokenLanguages(countries, 10));

console.log(mostSpokenLanguages(countries, 3));



function mostSpokenLanguages(loopCountry, number) {

  const sortAesArray = loopCountry.sort(function (a, b) {

    return b.count - a.count;
  });


  const lastNumberArray = sortAesArray.filter(function (item, index) {

    if (index < number) {

      return item;
    }
  });

  return lastNumberArray;
};