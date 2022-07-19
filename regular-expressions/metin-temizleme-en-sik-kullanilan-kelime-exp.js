// Metni temizleyen bir fonksiyon yazınız. Aşağıdaki metni temizleyin. Temizledikten sonra, dizede en sık kullanılan üç kelimeyi sayın.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(sentence));

// I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher

// console.log(mostFrequentWords(cleanedText));

// [{word:'I', count:3}, {word:'teaching', count:2}, {word:'teacher', count:2}]


function cleanText(text) {

    const pattern = /[\w\s]+/g;

    const matches = text.match(pattern).join("");

    return matches;
};


// TODO