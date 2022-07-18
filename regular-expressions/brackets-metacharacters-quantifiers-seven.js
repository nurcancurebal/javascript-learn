// Brackets(Parantez) : Parantezler bir dizi karakter bulmak için kullanılır:

// => [] : Bir dizi karakter
// . [a-c] : a veya b veya c
// . [a-z] : a'dan z'ye herhangi bir küçük harf
// . [A-Z] : A'dan Z'ye herhangi bir büyük karakter
// . [0-3] : 0 veya 1 veya 2 veya 3
// . [0-9] : 0'dan 9'a kadar herhangi bir sayı
// . [A-Za-z0-9] : a'dan z'ye, A'dan Z'ye, 0'dan 9'a kadar herhangi bir karakter
// . [abc] : Köşeli parantez içindekilerden herhangi bir karakter bulun
// . [^abc] : Köşeli parantez içindekiler hariç herhangi bir karakter bulun
// . [^0-9] : Köşeli parantez içindekiler hariç (rakam olmayan herhangi bir karakter)


// Metacharacters(Meta Karakterler) : özel bir anlamı olan karakterlerdir:

// => \ : Özel karakterlerden kaçmak için kullanır
// . \d : Dizenin rakamları içerdiği yerle eşleşir (0-9 arası sayılar)
// . \D : Dizenin rakam içermediği yerde eşleşme
// . \s : Bir boşluk karakteri bulun
// . \S : Boşluk olmayan bir karakter bul
// . \w : Bir kelime karakteri bul
// . \W : Kelime olmayan bir karakter bul(harfleri ve sayıları almaz)
// . \b : Bir kelimenin başında/sonunda şöyle başlayan bir eşleşme bulun: \bHI, şöyle bitirin: HI\b, bir kelimenin başlangıcı veya bitişiyle eşleşir
// . \B : Bir eşleşme bulun, ancak bir kelimenin başında/sonunda değil
// . \0 : NULL karakter bul
// . \n : Yeni bir satır karakteri bul(Satır beslemesi, bir sonraki satıra aşağı doğru ilerlemek anlamına gelir)
// . \f : Bir form besleme karakteri bulun(Form besleme, bir sonraki "sayfaya" aşağı doğru ilerlemenizi sağlar)
// . \r : Bir satır başı karakteri bulun(Satır başı, aşağı doğru ilerlemeden geçerli satırın başına dönmek)
// . \t : Bir sekme(tab) karakteri bul
// . \v : Dikey sekme karakteri bul
// . \xxx : Sekizlik bir sayı xxx ile belirtilen karakteri bulun
// . \xdd : Onaltılık bir sayı ile belirtilen karakteri bulun dd
// . \udddd : Onaltılık bir sayı ile belirtilen Unicode karakterini bulun dddd


// Quantifiers(Niceleyiciler):

// . : Yeni satır karakteri (\n) dışında herhangi bir karakter
// ^ : İle başlar; r'^substring' : örneğin r'^love', love kelimesiyle başlayan bir cümle; r'[^abc] : a,b,c dışında bir şeyler
// $ : Zekice biter; r'substring' : örneğin r'love', cümle aşk kelimesiyle biter
// * : Sıfır veya daha fazla kez; r'[a]*' : isteğe bağlı anlamına gelir veya birçok kez ortaya çıkabilir.
// + : Bir veya daha fazla kez; r'[a]+' : en az bir veya daha fazla kez anlamına gelir
// ? : Sıfır veya bir kez; r'[a]?' : sıfır kez veya bir kez anlamına gelir
// {3} : Tam olarak 3 karakter
// {3,} : En az 3 karakter
// {3,8} : 3 ila 8 karakter
// | : Ya ... veya; r'apple|muz' : ya bir elma ya da bir muz anlamına gelir(kısaca ve anlamına gelir)
// () : Yakala ve grupla
// ?! : Belirli bir dize tarafından takip edilmeyen herhangi bir dizeyle eşleşir