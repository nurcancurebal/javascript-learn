const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];


const newArray = [];

for (let index = 0; index < webTechs.length; index++) {

  newArray.push([webTechs[index], webTechs[index].length]);
};

console.log(newArray);