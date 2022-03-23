let names= Array() // çıktı= (0) []

console.log(names)
// veya bir dizi aşağıdaki şekildede oluşturulur

let namesTwo= []
console.log(namesTwo) // çıktı= (0) []


let namesThree= [
    'nurcan', 27 , 'erdinç', 26,'yazılımcı'
]
console.log(namesThree.length)   


// arrayin içerisinde obje tutabiliriz, objenin içindede rray tutabiliriz

const arr = [
    'Nurcan',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },     // obje satırı
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } // objenin içerisinde array
] // arr containing different data types
console.log(arr)
//çıktı= (5) ['Nurcan', 250, true, {…}, {…}]



// split array a dönüştürür

let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]