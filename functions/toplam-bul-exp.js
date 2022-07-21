//1.yol

function AddNumbers(num1, num2) {

    let nums = num1 + num2;

    return nums;
};

console.log(AddNumbers(3, 5));


// 2.yol

function AddNumbersTwo(num3, num4) {

    console.log(num3 + num4);

};

AddNumbersTwo(7, 10);


// anonim fonksiyon kullanarak

const math = function (num5, num6) {

    return num5 + num6;
};

console.log(math(7, 5));


// kendi kendini çağıran fonksiyon ile

(function (num7, num8) {

    console.log(num7 + num8);

})(10, 11);