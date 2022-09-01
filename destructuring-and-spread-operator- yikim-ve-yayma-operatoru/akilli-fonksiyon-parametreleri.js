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

Yıkım kurtarmaya geliyor!

Parametreleri bir nesne olarak iletebiliriz ve fonksiyon onları anında değişkenlere dönüştürür: */

// we pass object to function
let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({ title = "Untitled", width = 200, height = 100, items = [] }) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log(`${title} ${width} ${height}`); // Menu 100 200
    console.log(items); // My menu 100 200
}

showMenu(options);

// İç içe nesneler ve iki nokta üst üste eşlemelerle daha karmaşık yıkımı da kullanabiliriz:

let optionsTwo = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({

    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2

}) {

    console.log(`${title} ${w} ${h}`); // My Menu 100 200
    console.log(item1); // Menu 100 200
    console.log(item2); // Menu 100 200
}

showMenu(optionsTwo);

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
function showMenu({ title = "Menu", width = 100, height = 200 } = {}) {

    console.log(`${title} ${width} ${height}`);
}

showMenu(); // Menu 100 200

// Yukarıdaki kodda, tüm argümanlar nesnesi {}varsayılan olarak vardır, bu nedenle her zaman tahrip edilecek bir şey vardır.