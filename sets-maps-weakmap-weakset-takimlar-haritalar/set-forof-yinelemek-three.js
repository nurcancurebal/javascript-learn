// Set yinelenebilir bir objedir ve her bir öğeyi yineleyebiliriz.

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];

const setOfLanguages = new Set(languages);

for (const language of setOfLanguages) {

    console.log(language);
};

// English
// Finnish
// French
// Spanish