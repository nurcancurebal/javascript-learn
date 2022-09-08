/* -> clearTimeout fonksiyonu ile iptal etme
setTimeout çağrısı “timer identifier” döner. Bu timerId ile zamanlayıcıyı iptal edebiliriz. */

let timerId1 = setTimeout(() => console.log('Adım Nurcan'), 1000);

clearTimeout(timerId1);

// Aşağıdaki kodda önce bir zamanlayıcı test eder sonrasında ise bunu iptal eder. Sonuç olarak hiçbir şey olmaz:

let timerId = setTimeout(() => console.log("Bir şey olmayacak"), 1000);

console.log(timerId); // timer identifier

clearTimeout(timerId);

console.log(timerId); // same identifier (iptal ettikten sonra null olmaz)

/* console.log çıktısından da göreceğiniz gibi timer bir id numarası ile tanımlanır. Diğer ortamlarda bu başka bir şey olabilir. Örneğin Node.Js bir sayı yerine farklı metodları olan timer objesi döner.

Tekrar söylemek gerekirse üzerinde anlaşılmış bir şartname bulunmamaktadır. */