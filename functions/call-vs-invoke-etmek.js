function test(){
    console.log('test fonksiyonu çalıştı!')
};


// call etmek ( doğrudan çağırma )

test();

// invoke etmek( dolaylı yoldan çağırma )

function invoker(func) {
    func();
};
invoker(test);