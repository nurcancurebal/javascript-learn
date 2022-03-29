// yeni bir array oluşturmak için bu şekilde yaptık yeni arrayin içinde sayıların kareleri yer alıyor
//amacımız bir tane daha array oluşturmak

const numbers = [1, 2, 3, 4, 5]
const newArr = []

for (let i = 0; i < numbers.length; i++) {
    newArr.push(numbers[i] ** 2)
}

console.log(newArr)