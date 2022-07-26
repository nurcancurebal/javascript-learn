let array = [3, 5, 7, 9, 10, 'nurcan', 'erdinç'];

average(array);

function average(arrays) {

    let sum = 0;
    let string = 0;

    for (let index = 0; index < arrays.length; index++) {


        if (typeof arrays[index] != "number") {

            string++
            console.log("String ifade.");

        } else if (typeof arrays[index] == "number") {

            console.log(`number ${arrays[index]}`);
            sum += arrays[index];   // array' dekilerin hepsi number olunca toplamada yapıyor
        };
    };
    sum = sum / ((arrays.length) - string);

    console.log(sum);
};