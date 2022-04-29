// parametre olarak array alsın ve arrayin her değerini yazdırır

function printArray(arrays) {

   for (let index = 0; index < arrays.length; index++) {
      
      console.log(arrays[index])
   };
};

let array = [3, 4, 5, 6];

printArray(array);