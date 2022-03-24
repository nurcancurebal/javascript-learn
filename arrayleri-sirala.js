let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let itCompaniesOne= itCompanies.sort() // sıralama
console.log(itCompanies)

let itCompaniesTwo= itCompanies.reverse()
console.log(itCompanies) //ters çevirme


let itCompaniesThree= itCompanies.shift()
itCompanies.shift()
itCompanies.shift()
console.log(itCompanies) // baştan 1 eleman silme

let itCompaniesFour= itCompanies.slice(2,4)
console.log(itCompaniesFour)
//** slice ana dizinde değişiklik yapmaz ayrı bir ayrı bir değişkene atamamız gerekir


let itCompaniesfive= itCompanies.pop()
itCompanies.pop()
itCompanies.pop()
console.log(itCompanies)




