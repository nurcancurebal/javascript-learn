/* -> Garip instanceof

Aşağıdaki instanceof neden true dönüyor? Aslında a'nın B() tarafından üretilmediği açık. */

function A() { }
function B() { }

A.prototype = B.prototype = {};

let a = new A();

console.log(a instanceof B); // true

/* Gerçekten de garip.

Fakat instanceof aslında fonksiyonu umursamaz, bunun yerine bunun prototype'ını umursar ve bu prototip zinciriyle karşılaştırılır.

Burada a.__proto__ == B.prototype, bundan dolayı instanceof, true dönecektir.

Öyleyse, instanceof mantığına göre asıl tipi belirleyen prototiptir, yapıcı fonksiyon değil. */