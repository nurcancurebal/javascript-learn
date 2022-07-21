// ForEach çalışma mantıgı.

const outArray = ["bursa", "istanbul", "ankara"];

forEaca(outArray);

function forEaca(inArray) {

    let index = 0;

    loopFunc(inArray[index], index, inArray);

    function loopFunc(item, loopIndex, fullArray) {

        console.log(item);

        if (loopIndex < 1) {

            loopFunc(fullArray[loopIndex + 1], (loopIndex + 1), fullArray);

        } else {
            
            return;
        };
    };
};