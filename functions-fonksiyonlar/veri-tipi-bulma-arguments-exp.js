console.log(dataType(3, 5, 7, 9, "asdas"));
console.log(dataType('nurcan', 'erdinç', 'bal'));
console.log(dataType(true, false));
console.log(dataType(3, 5, 7, 'nurcan', "asdas", "asdasd", "asdasdsa"));
console.log(dataType(3, 4, 5, 7, 9, 10));

function dataType() {

    let number = 0;
    let string = 0;
    let boolean = 0;

    for (let index = 0; index < arguments.length; index++) {

        if (typeof arguments[index] == "string") {

            string++;

        } else if (typeof arguments[index] == "number") {

            number++;

        } else if (typeof arguments[index] == "boolean") {

            boolean++;
        };
    };

    if (number == 0 && string == 0 && boolean != 0) {

        return "Veri tipleri aynı. Boolean";

    } else if (number != 0 && string == 0 && boolean == 0) {

        return "Veri tipleri aynı. Number";

    } else if (number == 0 && string != 0 && boolean == 0) {

        return "Veri tipleri aynı. String";

    } else {

        return "Veri tipleri aynı değil.";
    };
};