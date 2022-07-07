// Brackets(Parantez) : Parantezler bir dizi karakter bulmak için kullanılır:

// => [] : Bir dizi karakter
// . [a-c] : a veya b veya c
// . [a-z] : a'dan z'ye herhangi bir küçük harf
// . [A-Z] : A'dan Z'ye herhangi bir büyük karakter
// . [0-3] : 0 veya 1 veya 2 veya 3
// . [0-9] : 0'dan 9'a kadar herhangi bir sayı
// . [A-Za-z0-9] : a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar herhangi bir karakter
// . [abc] : Parantezler arasında herhangi bir karakter bulun
// . [^abc] : Köşeli parantezler arasında DEĞİL herhangi bir karakter bulun
// . [^0-9] : Köşeli parantezler arasında DEĞİL herhangi bir karakter bulun (rakam olmayan herhangi bir karakter)


// Metacharacters(Meta Karakterler) : özel bir anlamı olan karakterlerdir:

// => \ : özel karakterlerden kaçmak için kullanır
// . \d : dizenin rakamları içerdiği yerle eşleşir (0-9 arası sayılar)
// . \D : dizenin rakam içermediği yerde eşleşme
// . \s : Bir boşluk karakteri bulun
// . \S : Boşluk olmayan bir karakter bul
// . \w : Bir kelime karakteri bul
// . \W : Kelime olmayan bir karakter bul
// . \b : Bir kelimenin başında/sonunda şöyle başlayan bir eşleşme bulun: \bHI, şöyle bitirin: HI\b, bir kelimenin başlangıcı veya bitişiyle eşleşir
// . \B : Bir eşleşme bulun, ancak bir kelimenin başında/sonunda değil
// . \0 : NULL karakter bul
// . \n : Yeni bir satır karakteri bul
// . \f : Bir form besleme karakteri bulun
// . \r : Bir satır başı karakteri bulun
// . \t : Bir sekme(tab) karakteri bul
// . \v : Dikey sekme karakteri bul
// . \xxx : Sekizlik bir sayı xxx ile belirtilen karakteri bulun
// . \xdd : Onaltılık bir sayı ile belirtilen karakteri bulun dd
// . \udddd : Onaltılık bir sayı ile belirtilen Unicode karakterini bulun dddd


// Quantifiers(Niceleyiciler):

// . : yeni satır karakteri (\n) dışında herhangi bir karakter
// ^ : ile başlar; r'^substring' : örneğin r'^love', love kelimesiyle başlayan bir cümle; r'[^abc] : a değil, b değil, c değil anlamına gelir.
// $ : zekice biter; r'substring' : örneğin 'love', cümle aşk kelimesiyle biter
// * : sıfır veya daha fazla kez; r'[a]*' : isteğe bağlı anlamına gelir veya birçok kez ortaya çıkabilir.
// + : bir veya daha fazla kez; r'[a]+' : en az bir veya daha fazla kez anlamına gelir
// ? : sıfır veya bir kez; r'[a]?' : sıfır kez veya bir kez anlamına gelir
// {3} : Tam olarak 3 karakter
// {3,} : En az 3 karakter
// {3,8} : 3 ila 8 karakter
// | : Ya ... veya; r'apple|muz' : ya bir elma ya da bir muz anlamına gelir
// () : Yakala ve grupla
// ?! : Belirli bir dize tarafından takip edilmeyen herhangi bir dizeyle eşleşir