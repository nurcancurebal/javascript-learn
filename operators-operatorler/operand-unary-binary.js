// Operand operatörlerin uygulandığı(+,-,* vs.) değerlerdir. Örneğin çarpma işlemi için 5*2 örneğinden gidersek. İki tane
// operand vardır. Bunlardan solda olan 5 ve sağ operand 2. Bunlara argüman da denebilir.
// Eğer tek operanddan oluşursa bu operatör unary olarak adlandırılır. Örneğin, "-" sayının işaretini değiştirir:

let x = 1;

x = -x;

console.log(x); // -1, unary işlemi gerçekleşti


// Eğer operatörün iki tane operand’ı var ise buna binary operand denir. Örneğin çıkarma işlemi aşağıda bu formda bulunur.

let x2 = 1, y = 3;

console.log(y - x2); // 2, iki sayının çıkarılması binary operand işlemidir.

// Şeklen, iki operatörden konuşuyoruz. unary çıkarma(tek operand işareti değiştirir) ve binary çıkarma(iki operatör çıkarma )