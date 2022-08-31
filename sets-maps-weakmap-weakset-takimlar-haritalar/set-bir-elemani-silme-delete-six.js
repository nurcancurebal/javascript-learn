const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French'
];

const setOfLanguages = new Set(languages);

console.log(setOfLanguages);    // Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

setOfLanguages.delete('English');

console.log(setOfLanguages);  // Set(3) { 'Finnish', 'French', 'Spanish' }