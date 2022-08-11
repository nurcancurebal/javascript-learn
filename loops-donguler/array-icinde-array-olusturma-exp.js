const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
];

const newCountries = [];

for (let index = 0; index < countries.length; index++) {

    newCountries.push([countries[index], countries[index].slice(0, 3).toUpperCase(), countries[index].length]);
};

console.log(newCountries);

/* 
[
    [ 'Albania', 'ALB', 7 ],
    [ 'Bolivia', 'BOL', 7 ],
    [ 'Canada', 'CAN', 6 ],
    [ 'Denmark', 'DEN', 7 ],
    [ 'Ethiopia', 'ETH', 8 ],
    [ 'Finland', 'FIN', 7 ],
    [ 'Germany', 'GER', 7 ],
    [ 'Hungary', 'HUN', 7 ],
    [ 'Ireland', 'IRE', 7 ],
    [ 'Japan', 'JAP', 5 ],
    [ 'Kenya', 'KEN', 5 ]
  ]
*/