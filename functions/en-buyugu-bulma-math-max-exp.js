function findMaxMin(num1, num2, num3) {

     let max = Math.max(num1, num2, num3);
     let min = Math.min(num1, num2, num3);
     return [max,min];
};

console.log(`Maximum değer: ${findMaxMin(0, 10, 5)[0]} Minimum değer:${findMaxMin(0, -567, -2)[1]}`);


// birinci çıktı maximumu, ikinci çıktı minimumu verecek ve çıktı array olmayacak