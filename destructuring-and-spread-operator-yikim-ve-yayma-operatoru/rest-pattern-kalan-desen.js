/* -> Kalan desen “…”
Ya nesne, sahip olduğumuz değişkenlerden daha fazla özelliğe sahipse? Biraz alıp sonra “dinlenmeyi” bir yere atayabilir miyiz?

Dizilerde yaptığımız gibi dinlenme kalıbını kullanabiliriz. Bazı eski tarayıcılar tarafından desteklenmez (IE, çoklu doldurmak için Babel'i kullanın), ancak modern tarayıcılarda çalışır.

Şuna benziyor: */

let options = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);   // 100


/* -> eğer yoksa al let
Yukarıdaki örneklerde, değişkenler atamada doğru olarak bildirildi: let {…} = {…}. Tabii ki, var olan değişkenleri de kullanabiliriz, let. Ama bir yakalama var.

Bu işe yaramaz: */

/* let title2, width2, height2;

 error in this line
{ title2, width2, height2 } = { title2: "Menu", width2: 200, height2: 100 }; */

/* Sorun, JavaScript'in {...}ana kod akışında (başka bir ifadenin içinde değil) bir kod bloğu olarak ele almasıdır. Bu tür kod blokları, aşağıdaki gibi ifadeleri gruplamak için kullanılabilir: */

{
    // a code block
    let message = "Hello";
    // ...
    console.log(message); // Hello
}

// JavaScript'in bir kod bloğu olmadığını göstermek için parantez içine alarak onu bir ifadenin parçası yapabiliriz (...):

let title3, width3, height3;

// okay now
({ title3, width3, height3 } = { title3: "Menu", width3: 200, height3: 100 });

console.log(title); // Menu