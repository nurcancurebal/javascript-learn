// Nesne değişmezini const ile ilan ediyoruz.

const person = {
    firstName: 'Nurcan',
    lastName: 'Cürebal',
    age: 27,
    country: 'Canada',
    city: 'Ottava',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
    isMarried: true
};

// nesne anahtarları aracılığıyla yineleme
for (const key in person) {

    console.log(key, person[key]);
};

// firstName Nurcan
// lastName Cürebal
// age 27
// country Canada
// city Ottava
// skills [
//   'HTML',       'CSS',
//   'JavaScript', 'TypeScript',
//   'React',      'Node',
//   'MongoDB',    'Python',
//   'D3.js'
// ]
// isMarried true