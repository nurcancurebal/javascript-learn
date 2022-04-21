function findMaxMin(num1, num2, num3) {

     let max = Math.max(num1, num2, num3);
     let min = Math.min(num1, num2, num3);
     return [max,min];
};

console.log(findMaxMin(0, 10, 5));
console.log(findMaxMin(0, -10, -2));


//TODO birinci çıktı maximumu, ikinci çıktı minimumu verecek ve çıktı array olmayacak