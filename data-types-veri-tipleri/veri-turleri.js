/* 1. Primitive Data Types(İlkel Veri Türleri)

1. Strings
2. Numbers
3. Booleans(true or false)
4. Undefined (tanımsız)
5. Null (boş değer)
6. Symbol(Symbol yapıcısı tarafından oluşturulabilen benzersiz bir değer)

    2. Non Primitive Data Types(İlkel Olmayan Veri Türleri)

1. Objects
2. Arrays(diziler) */

// non primitive değişkenlerin değerlerini sonradan değiştirebiliyorken primitive değişkenler değişmez


// nan = bu matematiksel işlem hatalı


let numb = ['nurcan', 27, false];

console.log(numb);

// bu bir Array örneğidir


let obj = {

    adi: 'nurcan',
    soyadi: 'cürebal',
    yasi: 27
};

console.log(obj);

// bu bir Obje örneğidir


let name = 'nurcan';
let surname = 'cürebal';

let fullname = name + ' ' + surname;

console.log(fullname);

// bu bir String örneğidir


let nurcanyas = 27;
let erdincyas = 26;

let fullName = nurcanyas + erdincyas;

console.log(fullName);           //+: iki sayı olduğu zaman toplama islemi yapar,string değer olduğu zaman yan yana yazar

// bu bir Numbers örneğidir


console.log('This is a backslash  symbol (\\)');

// This is a backslash  symbol (\)

// bu bir Symbol örneğidir