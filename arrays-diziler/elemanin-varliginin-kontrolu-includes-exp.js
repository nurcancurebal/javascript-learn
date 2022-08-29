/* Bu metodlar(indexOf/lastIndexOf ve includes) eşitlik kontrolü için === kullanır. Bundan dolayı false'a bakacak olursanız 0 ile eşit değildir. Sadece false ile eşittir. Eğer sadece dizi içinde var olup olmadığını kontrol etmek istiyorsanız arr.includes tercih edilir. */

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

let control = webTechs.includes('Sass');

console.log(control ? ' Sass is a CSS preprocess' : webTechs.push('Sass') && webTechs);