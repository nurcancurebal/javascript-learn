const countries = [
  { country: "English", count: 91 },
  { country: "French", count: 45 },
  { country: "Arabic", count: 25 },
  { country: "Spanish", count: 24 },
  { country: "Russian", count: 9 },
  { country: "Portuguese", count: 9 },
  { country: "Dutch", count: 8 },
  { country: "German", count: 7 },
  { country: "Chinese", count: 5 },
  { country: "Swahili", count: 10 },
];

const countriesFilter = countries.filter(function (currentValue, index, arr) {

  return arr[arr.length - 1].count < currentValue.count && index > 1;
})

console.log(countriesFilter).reduce((a, b) => a.count + b.count);

// hata reduce yalnızca arrayleri toplar.
