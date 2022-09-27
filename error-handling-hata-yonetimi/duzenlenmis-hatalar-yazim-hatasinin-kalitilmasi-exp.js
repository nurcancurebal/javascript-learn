/* -> Yazım hatasının kalıtılması.

FormatError adında bir sınıf yazın ve bu sınıf varsayılan SyntaxError'dan kalıtılsın.

message, name, stack gibi özellikleri desteklemeli. */

class SyntaxError {

    constructor(message) {

        this.message = message;
        this.name = "Error";
    }
}

class FormatError extends SyntaxError {

    constructor(message) {

        super(message);

        this.name = "FormatError";
    }
}

let err = new FormatError("formatting error");

console.log(err.message); // formatting error
console.log(err.name); // FormatError
console.log(err.stack); // undefined

console.log(err instanceof SyntaxError); // true
console.log(err instanceof FormatError); // true