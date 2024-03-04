const result = [{ date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "1doc" }, { date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "2doc" }, { date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "3doc" }, { date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "4doc" }, { date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "5doc" }, { date: 46297, barcode: "fehxueh", productname: "vbdlıufn", _doc: "6doc" }]


for (const { _doc: iterator } of result) {
    console.log(iterator);
}

for (const item of result) {
    const iterator = item._doc;
    console.log(iterator);
}

/* 1doc
2doc
3doc
4doc
5doc
6doc
1doc
2doc
3doc
4doc
5doc
6doc */

/* 1. İlk döngüde, destructuring (yapı çözümleme) kullanılır. Bu, bir objenin özelliklerini tek bir satırda çıkartmamızı sağlar. Bu durumda, her bir result elemanının _doc özelliği iterator adlı bir değişkene atanır ve konsola yazdırılır.

2. İkinci döngüde, her bir result elemanı item adlı bir değişkene atanır. Daha sonra, item._doc özelliği iterator adlı bir değişkene atanır ve konsola yazdırılır. */
