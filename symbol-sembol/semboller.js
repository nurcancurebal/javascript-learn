/* Sembol Tipi
Tanım olarak objeler, karakter dizisi veya sembol tipinde olmalıdır. Sayı veya boolean olamaz.
Şimdiye kadar sadece karakter dizisi işlendi. Bundan sonra semboller nasıl kullanılır ve ne gibi artısı var bunların üzerinden geçilecektir.

Semboller
“Symbol” değeri eşsizdir. Symbol() yazılara yeni bir değer yaratılabilir.*/

// id yeni bir semboldür
let id = Symbol();

//Ayrıca sembollere tanım açıklama ( sembol ismi ) verilebilir. Bu genelde hata ayıklarken kullanılır:

// id açıklaması "id" olan bir semboldür.
let id1 = Symbol("id");

/* Sembollerin eşsiz oldukları garantidir. Eğer aynı açıklamaya ( sembol ismi ) ait iki sembol olsa bile değerleri farklıdır. Bu açıklama sadece etikettir. hiçbir şeyi etkilemez. */

// Örneğin aşağıdaki iki sembol aynı açıklamalara aittir – eşit değillerdir:

let id2 = Symbol("id");
let id3 = Symbol("id");

console.log(id2 == id3); // false

/* Eğer Ruby veya diğer diller ile çalışıyorsanız “symbols” farklı özelliklere sahip olabilir. JavaScript sembolleri tamamen farklıdır. */


//! Semboller doğrudan karakter dizisine çevrilmezler
/* Çoğu değer karakter dizisine çevrilmeyi destekler. Örneğin, console.log neredeyse tüm değerler için çalışır. Symbol ise farklıdır. Doğrudan karakter disizine çevrilemez.
Örneğin, Aşağıdaki console.log hata verecektir. */

let id4 = Symbol("id");

console.log(id4); // Tip Hatası: Sembol karakter dizisine çevirilemez.

// Eğer sembol’ün değerini göstermek istiyorsanız bu durumda .toString() metodunu çağırmanız gerekir:

let id5 = Symbol("id");

console.log(id5.toString()); // Symbol(id), Şimdi çalışır

/* Sembol ve karakter dizisi birbirinden mantıken farklı olduklarından dolayı bu şekilde birbirlerine çevrilirken sorun olmasın diye kontrollü bir şekilde çevrilmesi istenmektedir. */