// replace(): Bir dizede eşleşme araması yapar ve eşleşen alt dizeyi bir yedek alt dizeyle değiştirir.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language';

matchReplaced = txt.replace(/Python|python/, 'JavaScript');

console.log(matchReplaced);
// JavaScript is the most beautiful language that a human begin has ever created.I recommend python for a first programming language



matchReplacedTwo = txt.replace(/Python|python/g, 'JavaScript');

console.log(matchReplacedTwo);
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language



matchReplacedThree = txt.replace(/Python/gi, 'JavaScript');

console.log(matchReplacedThree);
// JavaScript is the most beautiful language that a human begin has ever created.I recommend JavaScript for a first programming language



const text = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.';

matches = text.replace(/%/g, '');

console.log(matches);
// I am teacher and  I love teaching.There is nothing as more rewarding as educating and empowering people.I found teaching more
// interesting than any other jobs.Does this motivate you to be a teacher.