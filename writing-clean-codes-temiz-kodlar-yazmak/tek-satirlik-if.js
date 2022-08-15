if (n < 0) { console.log(`Pover ${n} is not supported`); }
// 1. burada koşuldan sonra boşluk olmamalı
// 2. kapama süslü parantezinden önce noktalı virgül gelmemeli


if (n < 0)
    console.log(`Pover ${n} is not supported`);
// burada console.log aşağıya alınmamalı


if (n < 0) console.log(`Pover ${n} is not supported`);
// buradaki yazım doğrudur ancak süslü parantez kullanmak en iyisidir.

if (n < 0) {
    console.log(`Pover ${n} is not supported`);
}

// bu şekilde kullanım her zaman en okunaklısıdır.