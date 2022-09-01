/* -> Nesne yok etme
İmha etme ataması nesnelerle de çalışır.

Temel sözdizimi şöyledir:

let {var1, var2} = {var1:…, var2…}

Sağ tarafta değişkenlere bölmek istediğimiz mevcut bir nesnemiz var. Sol taraf, karşılık gelen özellikler için bir "desen" içerir. Basit durumda, bu, içindeki değişken adlarının bir listesidir {...}.

Örneğin: */

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

/* Properties options.title, options.width ve options.height karşılık gelen değişkenlere atanır. Sıra önemli değil. Bu da işe yarar: */

// changed the order in let {...}
let { height2, width2, title2 } = { title2: "Menu", height2: 200, width2: 100 }

console.log(height2, width2, title2); // 200 100 Menu

/* Sol taraftaki desen daha karmaşık olabilir ve özellikler ile değişkenler arasındaki eşlemeyi belirtebilir.

options.width Örneğin, adlı değişkene girmek için başka bir ada sahip bir değişkene özellik atamak istiyorsak, wbunu iki nokta üst üste kullanarak ayarlayabiliriz: */

let options3 = {
    title3: "Menu",
    width3: 100,
    height3: 200
};

// { sourceProperty: targetVariable }
let { width3: w3, height3: h3, title3 } = options3;

// width -> w
// height -> h
// title -> title

console.log(title3);  // Menu
console.log(w3);      // 100
console.log(h3);      // 200

/* İki nokta üst üste "ne : nereye gidiyor"u gösterir. Yukarıdaki örnekte, özellik width'e gider w, özellik height'ye gider h ve title aynı ada atanır.

Potansiyel olarak eksik özellikler için aşağıdaki gibi kullanarak varsayılan değerleri ayarlayabiliriz "=": */

let options4 = {
    title4: "Menu"
};

let { width4 = 100, height4 = 200, title4 } = options4;

console.log(title4);  // Menu
console.log(width4);  // 100
console.log(height4); // 200

/* Dizilerde veya işlev parametrelerinde olduğu gibi, varsayılan değerler herhangi bir ifade veya hatta işlev çağrıları olabilir. Değer verilmediği takdirde değerlendirilecektir.

Aşağıdaki kod genişlik ister, ancak başlık istemez. */

let options5 = {
    title5: "Menu"
};

let { width5 = 1100, title5 = 'Nurcan' } = options5;

console.log(title5);  // Menu
console.log(width5);  // 1100

// Ayrıca hem iki nokta üst üste hem de eşitliği birleştirebiliriz:

let options6 = {
    title6: "Menu"
};

let { width6: w6 = 100, height6: h6 = 200, title6 } = options6;

console.log(title6);  // Menu
console.log(w6);      // 100
console.log(h6);      // 200