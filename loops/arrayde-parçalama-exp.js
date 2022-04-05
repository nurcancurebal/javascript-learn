const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

const newMernStack = [];

for (const mern of mernStack){

  newMernStack.push(mern[0]);
  
}

console.log(newMernStack.join(''));

// join olmazsa (4) ['M', 'E', 'R', 'N'] yazdırır