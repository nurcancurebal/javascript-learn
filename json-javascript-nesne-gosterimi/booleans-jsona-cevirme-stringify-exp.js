let isMarried = true;

isMarried = { isMarried };

console.log(isMarried);

const booleanJson = JSON.stringify(isMarried, undefined, 2);

console.log(booleanJson);


// { isMarried: true }
// {
//   "isMarried": true
// }