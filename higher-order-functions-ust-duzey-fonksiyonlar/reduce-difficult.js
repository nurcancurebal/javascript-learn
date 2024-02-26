const result = [
    {
        _id: "65d5d7fdac10095ba78f19c2",
        barcode: "c7nt64td94",
        productname: "Algida Keyif Vanilya 750 Ml",
        category: "Dondurma",
        subcategory: "Tek Dondurma",
        upplier: "Algida",
        brand: "Algida",
        unit: "mm",
        quantity: 10,
        unitprice: 1200,
        date: "2024-02-21T11:01:17.929Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65c29fc29d0e5bd6e96d4e94",
        barcode: "cc56uvb46v65u",
        productname: "Algida Max Gökkuşağı 59 Ml",
        category: "Dondurma",
        subcategory: "Tek Dondurma",
        supplier: "Max",
        brand: "Max",
        unit: "gr",
        quantity: 453,
        unitprice: 4364,
        date: "2024-02-06T21:08:18.291Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65d5b43480d593ae3516a9c8",
        barcode: "cev76b6h9tbrvgerh",
        productname: "Söke Un 2 Kg",
        category: "Temel Gıda",
        subcategory: "Un",
        supplier: "Söke",
        brand: "Söke",
        unit: "paket",
        quantity: 10,
        unitprice: 4500,
        date: "2024-02-21T08:28:36.463Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65c61c0946927a8b23235e60",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "paket",
        quantity: 48,
        unitprice: 47587,
        date: "2024-02-09T12:35:21.910Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65c6236a46927a8b23235e68",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "top",
        quantity: 324,
        unitprice: 24387,
        date: "2024-02-09T13:06:50.134Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65c623dc46927a8b23235e6c",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "cm",
        quantity: 423,
        unitprice: 2350,
        date: "2024-02-09T13:08:44.031Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65d31e9dbdd230b41dfd1062",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "paket",
        quantity: 10,
        unitprice: 1500,
        date: "2024-02-19T09:25:49.051Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65d31f45bdd230b41dfd1065",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "paket",
        quantity: 20,
        unitprice: 1250,
        date: "2024-02-19T09:28:37.458Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65d31fe2bdd230b41dfd1068",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "top",
        quantity: 1,
        unitprice: 2700,
        date: "2024-02-19T09:31:14.994Z",
        process: "entry",
        __v: 0
    },
    {
        _id: "65d3521f19642dc4eb40e056",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "top",
        quantity: 1,
        unitprice: 3000,
        date: "2024-02-19T13:05:35.653Z",
        process: "checkout",
        __v: 0
    },
    {
        _id: "65d355b119642dc4eb40e05a",
        barcode: "effc54f356gfc56tr",
        productname: "Turco Doğadan Yüzey Temizlik Havlusu 100'lü",
        category: "Deterjan ve Temizlik",
        subcategory: "Temizlik Malzemeleri",
        supplier: "Turco",
        brand: "Turco",
        unit: "paket",
        quantity: 10,
        unitprice: 1850,
        date: "2024-02-19T13:20:49.898Z",
        process: "checkout",
        __v: 0
    },
]

let groupedResult = result.reduce((acc, current) => {
    if (!acc[current.barcode]) { // oluşturduğumuz boş acc objesinin içerisinde current.barcode var mı?
        acc[current.barcode] = {}; // yoksa oluştur. içerisinede boş obje oluştur.
    }
    if (!acc[current.barcode][current.unit]) { // acc[current.barcode] içerisindeki objede current.unit var mı?
        acc[current.barcode][current.unit] = []; // yukarıda oluşturulan objenin içerisinde key var(barcode) o keyin value su bir obje ve o objenin keyi [current.unit] örn: { c7nt64td94: { mm: [ [Object] ] }, ... }
    }
    acc[current.barcode][current.unit].push(current);
    return acc;
}, {});

console.log(groupedResult);

/*
{
    c7nt64td94: { mm: [ [Object] ] },
    cc56uvb46v65u: { gr: [ [Object] ] },
    cev76b6h9tbrvgerh: { paket: [ [Object] ] },
    effc54f356gfc56tr: {
      paket: [ [Object], [Object], [Object], [Object] ],
      top: [ [Object], [Object], [Object] ],
      cm: [ [Object] ]
    }
} */