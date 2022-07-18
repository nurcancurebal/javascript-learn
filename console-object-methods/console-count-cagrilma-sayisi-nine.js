// Console.count()'un çağrılma sayısını yazdırır. Bir string etiket parametresini alır. Bir fonksiyonun kaç defa çağrıldığını saymak çok
// faydalıdır. Aşağıdaki örnekte, console.count() yöntemi üç kez çalıştırılacaktır.

const func = () => {

    console.count('Function has been called');
};

func();
func();
func();

// Function has been called: 1
// Function has been called: 2
// Function has been called: 3