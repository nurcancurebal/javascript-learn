// Bir metinde aradığımız alt dizenin uzunluğunu küme parantezini kullanarak belirtebiliriz. RegExp niceleyicilerinin nasıl
// kullanıldığını görelim. Düşünün, uzunluklarının 4 karakter olduğu alt dizeyle ilgileniyoruz.


const txt = 'This regular expression example was made in December 6,  2019.';

const pattern = /\\b\w{4}\b/g;

const matches = txt.match(pattern);

console.log(matches);

// Todo neden null verdi?