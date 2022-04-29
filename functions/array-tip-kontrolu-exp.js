let array = [3, 5, 7, 9, 10, 'ghjklş'];

sumOfArrayItems(array);

function sumOfArrayItems(arrays) {

    let sum = 0;

    for (let index = 0; index < arrays.length; index++) {


        if (typeof arrays[index] != "number") {

            sum = "String ifade.";

        } else if (typeof arrays[index] == "number") {

            console.log(`number ${arrays[index]}`);
            sum += arrays[index];   // array' dekilerin hepsi number olunca toplamada yapıyor
        };
    };

    console.log(sum);
};