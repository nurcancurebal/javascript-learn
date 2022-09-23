/* -> “Throw” operatörü
throw operatörü hata oluşturur.

Yazımı şu şekildedir: */

throw <error object>

/* Teknik olarak her şeyi hata objesi olarak kullanmak mümküdür. Hatta bu ilkel tipler olan sayı, karakter dizisi gibi yapılar da olabilir. Fakat obje kullanmak, daha sı name ve message özelliklerine sahip obje kullanmak daha iyidir. ( Böylece gömülü gelen hatalar ile uyumlu olacaktır.)

    JavaScript birçok standart hataya sahitir:Error, SyntaxError, ReferenceError, TypeError vs. Bunları kullanarak da hata objesiyaratmak mümkündür. */

    let error = new Error(message);
    // or
    let error = new SyntaxError(message);
    let error = new ReferenceError(message);
    // ...

    /* Gömülü hatalar ( objeler değil sadece hatalar ) name özelliği yapıcının aynı isme sahip özelliğindne meydana gelir. message ise argümandan alınır. */

    let error = new Error("Bir şeyler oldu o_O");

    console.log(error.name); // Error
    console.log(error.message); // Bir şeyler oldu o_O

    JSON.parse ne tarz hatalar üretti bakalım:

    try {

        JSON.parse("{ bad json o_O }");

} catch(e) {

        console.log(e.name); // SyntaxError
    console.log(e.message); // Unexpected token o in JSON at position 0
}

    /* Gördüğünüz gibi bu SyntaxError yani yazım yanlışıdır.
    
    Bizim durumumuzda ise name'in olmaması yazım hatası olarak tanımlanabilir. Bunu isimsiz öğretmen olmayacağından yazı hatası olarak tanımlayabiliri.
    
    atacak olursak: */

    let json = '{"yaş": 30 }'; // incomplete data

    try {

        let user = JSON.parse(json); // <-- hata yok

    if (!user.name) {

    throw new SyntaxError("Tanımlanmamış veri:isim yok"); // (*)
  }

    console.log( user.name );

} catch(e) {

        console.log("JSON Error: " + e.message); // JSON Error: Tanımlanmamış veri:isim yok
}

/* (*) satırında throw operatörü verilen message ile bir SyntaxError hatası verir. Bu JavaScript’in hata oluşturmasına benzemektedir. try'ın çalışması akışta anında durur ve catch bölümüne atlar.

Artık catch tüm hata idaresinin yapılacağı yerdir: Buna JSON.parse ve diğer durumlar dahildir. */ // TODO