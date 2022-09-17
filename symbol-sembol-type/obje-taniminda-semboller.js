/* Obje Tanımında Semboller
Eğer obje tanımlanırken sembol doğrudan yazılmak istenirse, köşeli parantez gerekmektedir.
Aşağıdaki Gibi: */

let id = Symbol("id");

let kullanici = {
    isim: "Bal",
    [id]: 123 // dikkat ederseniz id:123 değil
};

// Böyle yazılmasının nedeni, id değişkeninin ismi değil değerinin istenmesidir, bu değer karakter dizisi değildir.