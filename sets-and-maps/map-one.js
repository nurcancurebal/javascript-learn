const values = [["tr", "merhaba, dünya"], ["nurcan", "hello, world"]];

let map = new Map(values);

console.log(map);   // Map(2) { 'tr' => 'merhaba, dünya', 'nurcan' => 'hello, world' }


map.set("tr", "merhaba, dünya").set("nurcan", "hello, world");

console.log(map);   // Map(2) { 'tr' => 'merhaba, dünya', 'nurcan' => 'hello, world' }