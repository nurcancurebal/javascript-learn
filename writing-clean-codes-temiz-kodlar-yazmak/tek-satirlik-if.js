if (n < 0) { console.log(`Pover ${n} is not supported`); }
// Süslü parantez açma ve kapama aynı satırda yapılmış: Burada süslü paranteze gerek yok.


if (n < 0)
    console.log(`Pover ${n} is not supported`);
// Ayrı bir satıra süslü parantez olmadan yazılmış. Bu şekilde yazmayın. Bu ileride bazı anlayamadığınız hatalara neden
// olabilir. Örneğin if gövdesine bir satır daha yazarsanız bu satırlardan sonraki yazdığınız çalışmaz.


if (n < 0) console.log(`Pover ${n} is not supported`);
// Süslü parantez olmadan tek satırda işi bitirebilirseniz kabul edilebilir. Ama kısa olması şartıyla.

if (n < 0) {
    console.log(`Pover ${n} is not supported`);
}
// bu şekilde kullanım her zaman en okunaklısıdır.


// Çok kısa kodlar için, şu şekilde kullanım kabul edilebilir: if(koşul) return null.