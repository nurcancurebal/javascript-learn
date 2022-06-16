// Parametre olarak iletilen fonksiyonlara callback denir.

main(callbackFunc);

function main(pusher) {

    pusher("Nurcan", "Merhabalar");
    pusher("Erdinç", "Merhaba, Buyrun siz kimsiniz?");
    pusher("Nurcan", "Ben sekerlikten oluşan bir hanımefendiyim ya siz?");
    pusher("Erdinç", "Sanane");
};

function callbackFunc(who, message) {

    console.log(`WHO: ${who} | MESSAGE: ${message}`);
};