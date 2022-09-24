/* -> Yazım hatasının kalıtılması.

FormatError adında bir sınıf yazın ve bu sınıf varsayılan SyntaxError'dan kalıtılsın.

message, name, stack gibi özellikleri desteklemeli.

Kullanımı: */

//------let err1 = new FormatError("Formatlama hatası");

//------console.log(err1.message); // formatlama hatası
//------console.log(err1.name); // FormatError
//------console.log(err1.stack); // stack

//------console.log(err1 instanceof FormatError); // true
//------console.log(err1 instanceof SyntaxError); // true ( SyntaxError sınıfından kalıtıldığından dolayı )

// çözüm

class FormatError extends SyntaxError {

    constructor(message) {

        super(message);

        this.name = "FormatError";
    }
}

let err = new FormatError("formatting error");

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // ... stack ...

console.log(err instanceof SyntaxError); // true // TODO