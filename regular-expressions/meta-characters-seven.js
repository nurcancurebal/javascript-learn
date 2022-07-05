// => []: Bir dizi karakter
// . [a-c] şu anlama gelir, a veya b veya c
// . [a-z], a'dan z'ye herhangi bir harf
// . [A-Z] anlamına gelir, A'dan Z'ye herhangi bir karakter
// . [0-3] anlamına gelir, 0 veya 1 veya 2 veya 3
// . [0 -9] 0'dan 9'a kadar herhangi bir sayı anlamına gelir
// . [A-Za-z0-9] a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar herhangi bir karakter

// => \: özel karakterlerden kaçmak için kullanır
// . \d şu anlama gelir: dizenin rakamları içerdiği yerle eşleşir (0-9 arası sayılar)
// . \D anlamı: dizenin rakam içermediği yerde eşleşme

// => . : yeni satır karakteri (\n) dışında herhangi bir karakter

// => ^: ile başlar
// . r'^substring' örneğin r'^love', aşk kelimesiyle başlayan bir cümle
// . r'[^abc] a değil, b değil, c değil anlamına gelir.

// => $: zekice biter
// . r'alt dizesi`egr`love', cümle aşk kelimesiyle biter

// => *: sıfır veya daha fazla kez
// . r'[a]*' isteğe bağlı anlamına gelir veya birçok kez ortaya çıkabilir.

// => +: bir veya daha fazla kez
//. r'[a]+' en az bir veya daha fazla kez anlamına gelir

// => ?: sıfır veya bir kez
// . r'[a]?' sıfır kez veya bir kez anlamına gelir

// => \b: kelime sınırlayıcı, bir kelimenin başlangıcı veya bitişiyle eşleşir

// => {3}: Tam olarak 3 karakter

// => {3,}: En az 3 karakter

// => {3,8}: 3 ila 8 karakter

// => |: Ya veya
// . r'apple|muz' ya bir elma ya da bir muz anlamına gelir

// => (): Yakala ve grupla