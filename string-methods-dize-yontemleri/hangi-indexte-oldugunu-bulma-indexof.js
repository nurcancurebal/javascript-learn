// indexOf()

let string = '30 Days Of JavaScript';

console.log(string.indexOf('D')); //ekran çıktısı= 3

console.log(string.indexOf('Days')); //ekran çıktısı= 3

console.log(string.indexOf('days')); //ekran çıktısı= -1

//içine yazdığın şeyin nerede olduğunu söyler hiç yoksa -1 döner
//IndexOf() ilk bulduğunun nerede olduğunu döndürür
//lastIndexOf() = son bulduğunun nerede olduğunu döndürür


/* İsteğe bağlı olan ikinci parametre aramaya nereden başlanacağının belirtilmesine yarar.
Örneğin "an"'ın ilk bulunduğu pozisyon 8'dir. Bir sonraki denk gelişi ise 19. pozisyonda olur. */

let str = "N`aber Canım - Tavşan";

console.log(str.indexOf('an', 9)); // 19