// Parametre olarak iletilen fonksiyonlara callback denir.

const messages = [
    { who: "NODE.JS", message: "Go go go!" }
];

main(pusherFunc, listenerFunc);

function main(pusher, listen) {

    pusher("Nurcan", "Merhabalar");
    pusher("Erdinç", "Merhaba, Buyrun siz kimsiniz?");
    pusher("Nurcan", "Ben sekerlikten oluşan bir hanımefendiyim ya siz?");
    pusher("Erdinç", "Sanane");

    listen(); // listen function olduğu için bu şekilde burada çalıştırdık
};

function pusherFunc(who, message) {

    messages.push({ who, message }); // obje olarak messages' in içine pushladı
};

function listenerFunc() {

    messages.forEach(function (item) {
        console.log(`WHO: ${item.who} | MESSAGE: ${item.message}`); // item: {who: 'NODE.JS', message: 'Go go go!'} item bu şekildeyken bunu tek tek düzenleyip ekrana yazdırıyor
    });
};