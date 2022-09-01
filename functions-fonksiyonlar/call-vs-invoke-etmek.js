function test() {

    console.log('test fonksiyonu çalıştı!');
};

test();   // call etmek ( doğrudan çağırma )




function invoker(func) {

    func();
};

invoker(test);  // invoke etmek( dolaylı yoldan çağırma )