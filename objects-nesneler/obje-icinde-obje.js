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

// console.log(Object.entries(items)); 
/* 
[
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
] */

let objectEntries = Object.entries(items);

for (let index = 0; index < objectEntries.length; index++) {
    console.log(objectEntries[index][0]);
}
/* Meyve & Sebze
Et, Tavuk & Balık
Kahvaltılık & Süt Ürünleri */

for (let index = 0; index < objectEntries.length; index++) {
    /*  Object.entries(objectEntries[index][1]); */
    console.log(Object.entries(objectEntries[index][1]))
}
/* {
    Meyve: [ 'Reyondan', 'Verita', 'Excelente', 'Genuine Coconut' ],
    Sebze: [ 'Reyondan', 'Si&Ha', 'Aressa' ]
  }
  {
    'Kırmızı Et': [ 'Pınar', 'Erşan', 'Eral' ],
    'Balık ve Deniz Mahsülleri': [ 'Dardanel', 'Leroy', 'Fish Point' ],
    'Et Şarküteri': [ 'Polonez', 'Pınar', 'Laz Kızı', 'Seçme' ]
  }
  {
    'Süt': [ 'İçim', 'Pınar', 'Efeler Çiftliği', 'Milupa' ],
    Peynir: [ 'Tahsildaroğlu', 'Pınar', 'Bahçıvan', 'İçim', 'Meriç' ],
    'Yoğurt': [ 'Activia', 'Eker', 'Danone', 'Belkıs Çiftliği', 'Velioğlu' ]
  } */

