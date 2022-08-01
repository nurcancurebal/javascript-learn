const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// 2. yol

function wait(ms) {

    return new Promise(function (resolve) {

        return setTimeout(resolve, ms);
    });
};

wait(500)
    .then(() => {

        box.classList.add("bigger");

        return wait(500);
    })
    .then(() => {

        box.classList.add("circle");
        return wait(500)
    })
    .then(() => {

        box.classList.add("move");
        return wait(500)
    })
    .then(() => {

        box.classList.add("colored");
        return wait(500)
    })
    .then(() => {

        box.classList.remove("colored");
        return wait(500)
    })
    .then(() => {

        box.classList.remove("move");
        return wait(500)
    })
    .then(() => {

        box.classList.remove("circle");
        return wait(500)
    })
    .then(() => {

        box.classList.remove("bigger");
        return wait(500)
    })
    .finally(() => console.log("Animasyon bitti!"));

    // TODO SyntaxError: Identifier 'wait' has already been declared