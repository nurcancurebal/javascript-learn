const messages = [
    { who: "NODE.JS", message: "Go go go!" }
];

main(pusherFunc, listenerFunc);

function main(pusher, listen) {

    pusher("Nurcan", "Merhabalar");
    pusher("Erdinç", "Merhaba, Buyrun siz kimsiniz?");
    pusher("Nurcan", "Ben sekerlikten oluşan bir hanımefendiyim ya siz?");
    pusher("Erdinç", "Sanane");

    listen();
};

function pusherFunc(who, message) {

    messages.push({ who, message });
};

function listenerFunc() {

    messages.forEach(function (item) {
        console.log(`WHO: ${item.who} | MESSAGE: ${item.message}`);
    });
};