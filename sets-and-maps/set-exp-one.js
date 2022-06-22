const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];

const langSet = new Set(languages);

console.log(langSet);      // Set(4) {"English", "Finnish", "French", "Spanish"}

console.log(langSet.size);   // 4

const counts = [];

const count = {};

for (const l of langSet) {

    const filteredLang = languages.filter((lng) => lng === l);

    console.log(filteredLang);
    // ["English", "English", "English"]
    // [ 'Finnish' ]
    // [ 'French', 'French' ]
    // [ 'Spanish' ]

    counts.push({ lang: l, count: filteredLang.length });
};

console.log(counts);

/* [
    { lang: 'English', count: 3 },
    { lang: 'Finnish', count: 1 },
    { lang: 'French', count: 2 },
    { lang: 'Spanish', count: 1 }
  ] */