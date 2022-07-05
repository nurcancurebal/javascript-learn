// (?): Sıfır veya bir kez. Desen oluşmayabilir veya bir kez oluşabilir.

const txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.';

const pattern = /[Ee]-?mail/g;

matches = txt.match(pattern);

console.log(matches);   // [ 'e-mail', 'email', 'Email', 'E-mail' ]