let items = {
    "Meyve & Sebze": {
        Meyve: [
            "Reyondan",
            "Verita",
            "Excelente",
            "Genuine Coconut"
        ],
        Sebze: [
            "Reyondan",
            "Si&Ha",
            "Aressa"
        ]
    },
    "Et, Tavuk & Balık": {
        "Kırmızı Et": [
            "Pınar",
            "Erşan",
            "Eral"
        ],
        "Balık ve Deniz Mahsülleri": [
            "Dardanel",
            "Leroy",
            "Fish Point"
        ],
        "Et Şarküteri": [
            "Polonez",
            "Pınar",
            "Laz Kızı",
            "Seçme"
        ]
    },
    "Kahvaltılık & Süt Ürünleri": {
        Süt: [
            "İçim",
            "Pınar",
            "Efeler Çiftliği",
            "Milupa"
        ],
        Peynir: [
            "Tahsildaroğlu",
            "Pınar",
            "Bahçıvan",
            "İçim",
            "Meriç"
        ],
        Yoğurt: [
            "Activia",
            "Eker",
            "Danone",
            "Belkıs Çiftliği",
            "Velioğlu"
        ]
    }
};
let kategoriobjectEntries = Object.entries(items);

console.log(kategoriobjectEntries);

/* [
    [ 'Meyve & Sebze', { Meyve: [Array], Sebze: [Array] } ],
    [
      'Et, Tavuk & Balık',
      {
        'Kırmızı Et': [Array],
        'Balık ve Deniz Mahsülleri': [Array],
        'Et Şarküteri': [Array]
      }
    ],
    [
      'Kahvaltılık & Süt Ürünleri',
      { 'Süt': [Array], Peynir: [Array], 'Yoğurt': [Array] }
    ]
   ] 
*/


let kategoriArray = [];
let altKategoriArray = [];
let markalarArray = [];

for (const iterator of kategoriobjectEntries) {

    let kategori = iterator[0];

    kategoriArray.push(kategori)


    let altKategori = Object.entries(iterator[1]);

    for (const iterator of altKategori) {
        altKategoriArray.push(iterator[0]);
    }

    for (const iterator of altKategori) {
        markalarArray.push(iterator[1])
    }
}


console.log(kategoriArray); // [ 'Meyve & Sebze', 'Et, Tavuk & Balık', 'Kahvaltılık & Süt Ürünleri' ]
console.log(altKategoriArray); // ['Meyve','Sebze','Kırmızı Et','Balık ve Deniz Mahsülleri','Et Şarküteri','Süt','Peynir','Yoğurt']
console.log(markalarArray);
/* [
    [ 'Reyondan', 'Verita', 'Excelente', 'Genuine Coconut' ],
    [ 'Reyondan', 'Si&Ha', 'Aressa' ],
    [ 'Pınar', 'Erşan', 'Eral' ],
    [ 'Dardanel', 'Leroy', 'Fish Point' ],
    [ 'Polonez', 'Pınar', 'Laz Kızı', 'Seçme' ],
    [ 'İçim', 'Pınar', 'Efeler Çiftliği', 'Milupa' ],
    [ 'Tahsildaroğlu', 'Pınar', 'Bahçıvan', 'İçim', 'Meriç' ],
    [ 'Activia', 'Eker', 'Danone', 'Belkıs Çiftliği', 'Velioğlu' ]
   ] 
*/