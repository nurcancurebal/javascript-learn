const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];


console.log(convertArrayToObject(students));

function convertArrayToObject(array) {

  let arr = [];

  for ([name, skills, score] of array) {

    arr.push({ name, skills, score });
  };

  return arr;
};