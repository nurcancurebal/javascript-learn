//Modifying array element(Dizi öğesini değiştirme)

const countries= [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0]='Afghanistan' 
//(11) ['Afghanistan', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

let lastIndex= countries.length-1
countries[lastIndex]='Korea'
//(11) ['Afghanistan', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Korea']

console.log(countries)