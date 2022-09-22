/* -> Yeni eklendi
Bu dile yeni eklenen bir özelliktir. Örnekler sadece yeni Chrome çalışır. */

// Normal sınıf özellikleri gibi statik özellikler de mümkündür:

class Article {

    static publisher = "Ilya Kantor";
}

console.log(Article.publisher); // Ilya Kantor

// Bu, Makaleye doğrudan atama ile aynıdır:

Article.publisher = "Ilya Kantor";