// bir arrayi mape çevirme

const values = [["tr", "merhaba dünya"], ["nurcan", "hello world"]];

let map = new Map(values);

console.log(map);   // Map(2) { 'tr' => 'merhaba dünya', 'nurcan' => 'hello world' }


// set ile boş bir mapin içine eleman ekleme

let myMap = new Map();

myMap.set("tr", "merhaba dünya").set("nurcan", "hello world");

console.log(map);   // Map(2) { 'tr' => 'merhaba dünya', 'nurcan' => 'hello world' }