/* Üst üste bağlama

Fazladan bir defa daha bağlama işlemi yaparak this'i değiştirebilir miyiz? */

function f() {

    console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f();

// Cevap: John.

/* f.bind(...) tarafından dönen egzotik objeler bound function yaratıldığı zamanki kaynağı hatırlar. Bundan dolayı bir fonksiyon birden fazla defa bağlanamaz. */