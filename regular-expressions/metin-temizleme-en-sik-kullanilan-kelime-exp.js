// Metni temizleyen bir fonksiyon yazınız. Aşağıdaki metni temizleyin. Temizledikten sonra, dizede en sık kullanılan üç kelimeyi sayın.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));

let cleanedText = cleanText(sentence);

console.log(mostFrequentWords(cleanedText));

// [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]


function cleanText(text) {

    const pattern = /[\w\s]+/g;

    const matches = text.match(pattern).join("");

    return matches;
};

function mostFrequentWords(matchText) {

    let splitMach = matchText.split(" ");

    let obj = {};

    splitMach.forEach(function (letter) {

        if (!obj[letter]) {

            obj[letter] = 1;

        } else {

            obj[letter]++;
        }
    });

    const resultObj = Object.entries(obj);

    const newObj = [];

    resultObj.forEach(function (item) {

        newObj.push({ word: item[0], count: item[1] });

    });

    const newObjSort = newObj.sort(function (a, b) {

        return b.count - a.count;
    });

    newObjSort.forEach(function (_item, index) {

        if (index == 3) {

            break;
        }
    });

    return ;
};

// TODO