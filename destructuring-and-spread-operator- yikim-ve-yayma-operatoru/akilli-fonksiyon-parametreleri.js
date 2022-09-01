/* Akıllı fonksiyon parametreleri
Bir işlevin çoğu isteğe bağlı olan birçok parametresi olduğu zamanlar vardır. Bu özellikle kullanıcı arayüzleri için geçerlidir. Bir menü oluşturan bir fonksiyon hayal edin. Genişlik, yükseklik, başlık, öğe listesi vb. olabilir.

İşte böyle bir işlevi yazmanın kötü bir yolu: */

function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
    // ...
}

/* Gerçek hayatta sorun, argümanların sırasını nasıl hatırlayacağımızdır. Genellikle IDE'ler, özellikle kod iyi belgelenmişse bize yardım etmeye çalışır, ancak yine de… Diğer bir sorun, çoğu parametre varsayılan olarak uygun olduğunda bir işlevin nasıl çağrılacağıdır.

Bunun gibi? */

showMenu("My Menu", undefined, undefined, ["Item1", "Item2"])

/* Bu çok çirkin. Ve daha fazla parametre ile uğraştığımızda okunamaz hale gelir.

-> Yıkım kurtarmaya geliyor!

Parametreleri bir nesne olarak iletebiliriz ve fonksiyon onları anında değişkenlere dönüştürür: */

// we pass object to function
let options1 = {
    title1: "My menu",
    items1: ["Item1", "Item2"]
};

// ...ve onu hemen değişkenlere genişletir
function showMenu1({ title1 = "Untitled", width1 = 200, height1 = 100, items1 = [] }) {

    console.log(`${title1} ${width1} ${height1}`); // My menu 200 100
    console.log(items1); // [ 'Item1', 'Item2' ]
}

showMenu1(options1);

// İç içe nesneler ve iki nokta üst üste eşlemelerle daha karmaşık yıkımı da kullanabiliriz:

let options2 = {
    title2: "My menu",
    items2: ["Item1", "Item2"]
};

function showMenu2({

    title2 = "Untitled",
    width2: w2 = 100,  // width goes to w
    height2: h2 = 200, // height goes to h
    items2: [item11, item21] // items first element goes to item1, second to item2

}) {

    console.log(`${title2} ${w2} ${h2}`); // My Menu 100 200
    console.log(item11); // Item1
    console.log(item21); // Item2
}

showMenu2(options2);

// Sözdizimi, bir yıkım atamasıyla aynıdır:

/* function({

    incomingProperty: parameterName = defaultValue
    ...
}) */

/* Lütfen bu tür bir yıkımın showMenu()bir argümanı olduğunu varsaydığını unutmayın. Varsayılan olarak tüm değerleri istiyorsak, boş bir nesne belirtmeliyiz: */

showMenu({});


showMenu(); // this would give an error

// {}Bunu , tüm yıkım olayı için varsayılan değeri yaparak düzeltebiliriz :

// simplified parameters a bit for clarity
function showMenu3({ title3 = "Menu", width3 = 100, height3 = 200 } = {}) {

    console.log(`${title3} ${width3} ${height3}`);
}

showMenu3(); // Menu 100 200

// Yukarıdaki kodda, tüm argümanlar nesnesi {}varsayılan olarak vardır, bu nedenle her zaman tahrip edilecek bir şey vardır.