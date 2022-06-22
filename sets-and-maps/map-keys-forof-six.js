const map = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let key of map.keys()) { // map.keys' i tek tek key' in içine at

    console.log(key);
};

// a
// b
// c

for (const [keyTwo, value] of map.entries()) {

    console.log(keyTwo, value);
};

// a 1
// b 2
// c 3


for (let [keyThree, valueTwo] of[...map]){

    console.log(keyThree,valueTwo);
};

// a 1
// b 2
// c 3