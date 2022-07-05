// replace(): Bir dizede eşleşme araması yapar ve eşleşen alt dizeyi bir yedek alt dizeyle değiştirir.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

matchReplaced = txt.replace(/Python|python/, 'JavaScript');

console.log(matchReplaced);
// JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language

